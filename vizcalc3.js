export const makeTrajectoriesSpec = trajectories => {

  let firstPieces = []
  let secondPieces = []
  let data = []

  // trajectories.push({t0, tpeak, tf, vpeak})

  for (let i = 0; i < trajectories.length; i++) {
    let traj = trajectories[i]

    data.push({x: traj.t0, y: 3, i})
    data.push({x: traj.tpeak, y: traj.vpeak, i})
    //data.push({x: traj.tf, y: 6, i})

    let xcand = traj.tf - 3*(traj.tf - traj.tpeak)/(6 - traj.vpeak)

    if (xcand <= 30) {
      data.push({x: xcand, y: 3, i})
    }
    else {
      let y = 6 + (30 - traj.tf)*(6 - traj.vpeak)/(traj.tf - traj.tpeak)

      data.push({x: 30, y, i})
    }
  }
  
  return {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "description": "Several viral load trajectories",
    "width": 500,
    "height": 200,
    "padding": 5,

    "data": [
      {
        "name": "trajectories",
        "values": data,
      }
    ],

    "scales": [
      {
        "name": "x",
        "type": "linear",
        "nice": true,
        "zero": true,
        "range": "width",
        "domain": [0, 30],
      },
      {
        "name": "y",
        "type": "linear",
        "range": "height",
        "nice": true,
        "zero": false,
        "domain": {"data": "trajectories", "field": "y"}
      },
      /*{
        "name": "color",
        "type": "ordinal",
        "range": "category",
        "domain": {"data": "trajectories", "field": "i"}
      }*/
    ],

    "axes": [
      {"orient": "bottom", "scale": "x", title: "days since exposure, t", labelFontSize: 16, titleFontSize: 16},
      {"orient": "left", "scale": "y", title: "log10 viral load (virions/mL)", labelFontSize: 16, titleFontSize: 16, grid: true}
    ],

    /*
    "signals": [
      {
        "name": "hover",
        "value": null,
        "on": [
          {"events": "line:mouseover", "update": "datum"},
          {"events": "line:mouseout", "update": "null"},
        ]
      }
    ],
    */

    "marks": [
      {
        "type": "group",
        "from": {
          "facet": {
            "name": "series",
            "data": "trajectories",
            "groupby": "i"
          }
        },
        "marks": [
          {
            "type": "line",
            "from": {"data": "series"},
            "encode": {
              "enter": {
                "x": {"scale": "x", "field": "x"},
                "y": {"scale": "y", "field": "y"},
                //"stroke": {"scale": "color", "field": "i"},
                "strokeWidth": {"value": 2}
              },
              "update": {
                "interpolate": "linear",
                "strokeOpacity": {"value": 0.1}
              },
              "hover": {
                "strokeOpacity": {"value": 1}
              }
            }
          },
          /*
          {
            "type": "symbol",
            "shape": "square",
            "interactive": false,
            "from": {"data": "series"},
            "encode": {
              "enter": {
                "x": {"scale": "x", "field": "x"},
                "y": {"scale": "y", "field": "y"},
                //"stroke": {"scale": "color", "field": "i"},
                "opacity": {"value": 0.1}
              },
            }
          },
          */

        ]
      }
    ]
  }
}

export const makeInfectiousnessRemovedBarplotSpec = (infectiousnesses, baselineInfectiousnesses) => {

  let totalInfectiousness = 0
  let infecRemovedByTest = 0
  let infecRemovedBySelf = 0

  let baseTotalInfectiousness = 0
  let baseInfecRemovedByTest = 0
  let baseInfecRemovedBySelf = 0

  for (let i = 0; i < infectiousnesses.length; i++) {
    totalInfectiousness += infectiousnesses[i].totalInfectiousness

    if (infectiousnesses[i].selfIsolation) {
      infecRemovedBySelf += infectiousnesses[i].infectiousnessRemoved
    }
    else {
      infecRemovedByTest += infectiousnesses[i].infectiousnessRemoved
    }
  }

  for (let i = 0; i < baselineInfectiousnesses.length; i++) {
    baseTotalInfectiousness += baselineInfectiousnesses[i].totalInfectiousness

    if (baselineInfectiousnesses[i].caught) {
      baseInfecRemovedByTest += baselineInfectiousnesses[i].infectiousnessRemoved
    }
    else {
      baseInfecRemovedBySelf += baselineInfectiousnesses[i].infectiousnessRemoved
    }
  }

  let data = 
    [
          {x: "No tests", y: 100*baseInfecRemovedByTest/baseTotalInfectiousness, c: "Detected"},
          {x: "No tests", y: 100*baseInfecRemovedBySelf/baseTotalInfectiousness, c: "Self-isolated"},
          {x: "Tests", y: 100*infecRemovedByTest/totalInfectiousness, c: "Detected"},
          {x: "Tests", y: 100*infecRemovedBySelf/totalInfectiousness, c: "Self-isolated"},
    ]

  return {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "description": "Stacked bar chart showing infectiousness removed",
    "width": 100,
    "height": 200,
    "padding": 5,

    "data": [
      {
        "name": "table",
        "values": data,
        "transform": [
          {
            "type": "stack",
            "groupby": ["x"],
            "sort": {"field": "c"},
            "field": "y"
          }
        ]
      }
    ],

    "scales": [
      {
        "name": "x",
        "type": "band",
        "range": "width",
        "domain": {"data": "table", "field": "x"}
      },
      {
        "name": "y",
        "type": "linear",
        "range": "height",
        "nice": true, "zero": true,
        "domain": [0, 100]
      },
      {
        "name": "color",
        "type": "ordinal",
        "domain": {"data": "table", "field": "c"},
        "range": ["rgb(255,51,119)", "rgb(100,100,100)"]
      }
    ],

    "axes": [
      {"orient": "bottom", "scale": "x", "zindex": 1, title: "Condition", titleFontSize: 16 },
      {"orient": "left", "scale": "y", "zindex": 1, title: "Infectiousness removed (%)", titleFontSize: 16, labelFontSize: 16, grid: true}
    ],
    "legends": [
      {
        "fill": "color",
        "title": "",
        "padding": 4,
        labelFontSize: 16,
        "encode": {
          "symbols": {
            "enter": {
              "strokeWidth": {"value": 0},
              "size": {"value": 50},
            }
          }
        }
      }
    ],

    "marks": [
      {
        "type": "rect",
        "from": {"data": "table"},
        "encode": {
          "enter": {
            "x": {"scale": "x", "field": "x"},
            "width": {"scale": "x", "band": 1, "offset": -1},
            "y": {"scale": "y", "field": "y0"},
            "y2": {"scale": "y", "field": "y1"},
            "fill": {"scale": "color", "field": "c"}
          },
          "update": {
            "fillOpacity": {"value": 1}
          },
          "hover": {
            "fillOpacity": {"value": 0.5}
          }
        }
      }
    ]
  }
}


export const makeIndividualInfectiousnessScatterSpec = (infectiousnesses, baselineInfectiousnesses) => {
  let concated = infectiousnesses.concat(baselineInfectiousnesses)
  let maxInfec = 0
  for (let i = 0; i < concated.length; i++) {
    let infec = concated[i].totalInfectiousness - concated[i].infectiousnessRemoved
    if (infec > maxInfec) {
      maxInfec = infec
    }
  }

  let data = []

  for (let i = 0; i < baselineInfectiousnesses.length; i++) {
    let infec = baselineInfectiousnesses[i]

    data.push({
      'type': 'No tests',
      'caught': infec.caught ? "Caught" : "Missed",
      'infectiousness': 100 * (infec.totalInfectiousness - infec.infectiousnessRemoved)/ maxInfec
    })
  }


  for (let i = 0; i < infectiousnesses.length; i++) {
    let infec = infectiousnesses[i]

    data.push({
      'type': 'Tests',
      'caught': infec.caught ? "Caught" : "Missed",
      'infectiousness': 100 * (infec.totalInfectiousness - infec.infectiousnessRemoved)/ maxInfec
    })
  }
  
  return {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "description": "Individual infectiousnesses and outcomes",
    "width": 130,
    "height": 200,
    "padding": 5,

    "data": [
      {
        "name": "source",
        "values": data,
        "transform": [{"type": "formula", "expr": "random()", "as": "random"}],
      }
    ],

    "scales": [
      {
        "name": "x",
        "type": "point",
        "domain": {"data": "source", "field": "type"},
        "range": "width",
        "padding": 10,
      },
        {
        "name": "xOffset",
        "type": "linear",
        "domain": {"data": "source", "field": "random"},
        "range": [{"signal": "- 0.4 * 40 / 2"}, {"signal": "0.4 * 40 / 2"}],
        "nice": true,
        "zero": true
      },
      {
        "name": "y",
        "type": "linear",
        "round": true,
        "nice": true,
        "zero": true,
        "domain": [0, 100],
        "range": "height",
      },
      {
        "name": "color",
        "type": "ordinal",
        "range": ["rgb(58,190,255)", "rgb(255,51,119)"],
        "domain": {"data": "source", "field": "caught"}
      }
    ],

    "axes": [
      {
        "scale": "x",
        "domain": false,
        "orient": "bottom",
        "tickCount": 2,
        "title": "Condition",
        titleFontSize: 16, 
      },
      {
        "scale": "y",
        "grid": true,
        "domain": false,
        "orient": "left",
        "titlePadding": 5,
        "title": "Total infectiousness (%)",
        titleFontSize: 16, 
        labelFontSize: 16
      }
    ],

    "legends": [
      {
        "fill": "color",
        "title": "",
        "padding": 4,
        labelFontSize: 16,
        "encode": {
          "symbols": {
            "enter": {
              "strokeWidth": {"value": 0},
              "size": {"value": 50},
            }
          }
        }
      }
    ],

    "marks": [
      {
        "name": "marks",
        "type": "symbol",
        "from": {"data": "source"},
        "encode": {
          "update": {
            "x": {
              "scale": "x",
              "field": "type",
              "offset": {
                "scale": "xOffset",
                "field": "random"
              }
            },
            "y": {
              "scale": "y",
              "field": "infectiousness",
            },
            "fill": {"scale": "color", "field": "caught"},
            "shape": {"value": "circle"},
            "strokeWidth": {"value": 1},
            "opacity": {"value": 0.3},
          }
        }
      }
    ]
  }
}

