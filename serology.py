import numpy as np


def fr(r, nplus, nminus, u, v):
    numerator = (u + r*(1 - u - v))**nplus * (1 - u - r*(1-u-v))**nminus
    return numerator


def log_fr(r, nplus, nminus, u, v):
    return nplus*np.log((u + r*(1 - u - v))) +\
        nminus * np.log((1 - u - r*(1-u-v)))

"""
from scipy.special import betainc
def fr(r, nplus, nminus, u, v):
    numerator = (u + r*(1 - u - v))**nplus * (1 - u - r*(1-u-v))**nminus

    denominator = (betainc(1 + nplus, 1 + nminus, 1 - v) - \
                   betainc(1+nplus, 1+nminus, u))/(1 - u -v)

    return numerator/denominator


def log_fr(r, nplus, nminus, u, v):
    return nplus*np.log((u + r*(1 - u - v))) +\
        nminus * np.log((1 - u - r*(1-u-v))) -\
        np.log((betainc(1 + nplus, 1 + nminus, 1 - v) - \
                   betainc(1+nplus, 1+nminus, u))) - np.log(1 - u -v)
"""

def sample_post_r_log(pos,neg,u,v,size=1):
    '''
    sample_post_r_log(pos,neg,u,v,size=1)
    where u = 1- specificity
    and v = 1-sensitivity
    '''
    rm = (pos/(pos+neg)-u)/(1-u-v)
    if (rm>0) and (rm < 1):
        log_M = np.array([log_fr(0,pos,neg,u,v),log_fr(1,pos,neg,u,v),
            log_fr(rm,pos,neg,u,v)]).max()
    else:
        log_M = np.array([log_fr(0,pos,neg,u,v),log_fr(1,pos,neg,u,v)]).max()
    # uniform accept/reject algorithm
    samples = []
    n_accepted = 0
    max_failures = 1e6
    failures = 0
    while n_accepted < size:
        r_proposal = np.random.rand()
        if (np.log(np.random.rand()) < (log_fr(r_proposal,pos,neg,u,v)-log_M)):
            samples.append(r_proposal)
            n_accepted += 1
            failures = 0
        else:
            failures += 1
        if failures == max_failures:
            return [-1]
    if size==1:
        return samples[0]
    else:
        return np.array(samples)
def sample_post_r(pos,neg,u,v,size=1):
    '''
    sample_post_r(pos,neg,u,v,size=1)
    where u = 1- specificity
    and v = 1-sensitivity
    '''
    rm = (pos/(pos+neg)-u)/(1-u-v)
    if (rm>0) and (rm < 1):
        M = np.array([fr(0,pos,neg,u,v),fr(1,pos,neg,u,v),
            fr(rm,pos,neg,u,v)]).max()
    else:
        M = np.array([fr(0,pos,neg,u,v),fr(1,pos,neg,u,v)]).max()
    # uniform accept/reject algorithm
    samples = []
    n_accepted = 0
    max_failures = 1e6
    failures = 0
    while n_accepted < size:
        r_proposal = np.random.rand()
        if (np.random.rand() < (fr(r_proposal,pos,neg,u,v)/M)):
            samples.append(r_proposal)
            n_accepted += 1
            failures = 0
        else:
            failures += 1
        if failures == max_failures:
            return [-1]
    if size==1:
        return samples[0]
    else:
        return np.array(samples)
