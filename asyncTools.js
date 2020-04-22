export const briefPause = (x) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 1);
  });
}

