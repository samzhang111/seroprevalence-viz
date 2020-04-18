# Covid seroprevalence visualization

**Live at [https://larremorelab.github.io/covid-serology](https://larremorelab.github.io/covid-serology).**

This interactive calculator accompanies the manuscript "Estimating SARS-CoV-2 seroprevalence and epidemiological parameters with uncertainty from serological surveys", which is available as a [preprint](https://dash.harvard.edu/handle/1/42659939). Other code for the project is available [here](https://github.com/LarremoreLab/covid_serological_sampling).

## Installation

First and foremost, a local installation of node.js is required. I recommend versioning your local installation of node using a tool such as [n](https://github.com/tj/n). The installation section there is very straightforward.

Next, a package manager is needed. If you do not have `yarn` installed, run 

```npm install -g yarn```

(using sudo if necessary). See [yarn installation instructions](https://yarnpkg.com/getting-started/install) for different types of installation.

In the root of this directory, run `yarn` to install project dependencies.

## Development

To develop the project, setup webpack to watch over the files by running

```yarn run webpack --watch```

then visit `dev-dist/serology.html` in a browser to view the application.

## Deployment

To compile a production version of the code, run

```yarn run webpack --config webpack.prod.js```

Copy the resulting files in the `dist/` folder as well as `serology.css` to the desired location. Modify the link and source tags within `covid-serology.html` to point to the correct location of the javascript and css files.
