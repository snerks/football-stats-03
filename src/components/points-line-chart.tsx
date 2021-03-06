import * as React from "react";

import { Line, ChartData } from "react-chartjs-2";
import * as chartjs from "chart.js";
import { points2019 } from "./points2019";
import { points2016 } from "./points2016";
import { points2017 } from "./points2017";
import { points2018 } from "./points2018";
import { points2020 } from "./points2020";

interface PointsLineChartProps { }

interface PointsLineChartState {
  showTrendLines: boolean;

  show2016: boolean;
  show2017: boolean;
  show2018: boolean;
  show2019: boolean;
  show2020: boolean;
}

class PointsLineChart extends React.Component<
  PointsLineChartProps,
  PointsLineChartState
  > {
  state = {
    showTrendLines: false,

    show2016: false,
    show2017: false,
    show2018: false,
    show2019: true,
    show2020: true
  };

  handleShowTrendLines = () => {
    this.setState(prevState => {
      const nextState = { ...prevState };
      nextState.showTrendLines = !prevState.showTrendLines;

      return nextState;
    });
  };

  handleShow2016 = () => {
    this.setState(prevState => {
      const nextState = { ...prevState };
      nextState.show2016 = !prevState.show2016;

      return nextState;
    });
  };

  handleShow2017 = () => {
    this.setState(prevState => {
      const nextState = { ...prevState };
      nextState.show2017 = !prevState.show2017;

      return nextState;
    });
  };

  handleShow2018 = () => {
    this.setState(prevState => {
      const nextState = { ...prevState };
      nextState.show2018 = !prevState.show2018;

      return nextState;
    });
  };

  handleShow2019 = () => {
    this.setState(prevState => {
      const nextState = { ...prevState };
      nextState.show2019 = !prevState.show2019;

      return nextState;
    });
  };

  handleShow2020 = () => {
    this.setState(prevState => {
      const nextState = { ...prevState };
      nextState.show2020 = !prevState.show2020;

      return nextState;
    });
  };

  render() {
    const redRgba = "255, 0, 0";
    const redLineColour = `rgba(${redRgba}, 1)`;
    const redLegendFillColour = `rgba(${redRgba}, 0.4)`;

    // 128, 0, 128
    const purpleRgba = "85, 85, 85";
    const purpleLineColour = `rgba(${purpleRgba}, 1)`;
    const purpleLegendFillColour = `rgba(${purpleRgba}, 0.4)`;

    const slateBlueRgba = "0, 100, 0";
    const slateBlueLineColour = `rgba(${slateBlueRgba}, 1)`;
    const slateBlueLegendFillColour = `rgba(${slateBlueRgba}, 0.4)`;

    const greyRgba = "220, 220, 220";
    const greyLineColour = `rgba(${greyRgba}, 1)`;
    // const greyLegendFillColour = `rgba(${greyRgba}, 0.4)`;

    // 2016 - Alice Blue
    const aliceBlueRgba = "0, 0, 255";
    const aliceBlueLineColour = `rgba(${aliceBlueRgba}, 1)`;
    const aliceBlueLegendFillColour = `rgba(${aliceBlueRgba}, 0.4)`;

    const greenRgba = "75, 192, 192";
    const greenLineColour = `rgba(${greenRgba}, 1)`;
    const greenLegendFillColour = `rgba(${greenRgba}, 0.4)`;

    const orangeRgba = "255, 165, 0";
    const orangeLineColour = `rgba(${orangeRgba}, 1)`;
    const orangeLegendFillColour = `rgba(${orangeRgba}, 0.4)`;

    const pointsRunning2016: number[] = [];

    for (let index = 0; index < points2016.length; index++) {
      const runningTotal = index === 0 ? 0 : pointsRunning2016[index - 1];

      const nextElement = runningTotal + points2016[index];

      pointsRunning2016.push(nextElement);
    }

    const pointsRunning2017: number[] = [];

    for (let index = 0; index < points2017.length; index++) {
      const runningTotal = index === 0 ? 0 : pointsRunning2017[index - 1];

      const nextElement = runningTotal + points2017[index];

      pointsRunning2017.push(nextElement);
    }

    const pointsRunning2018: number[] = [];

    for (let index = 0; index < points2018.length; index++) {
      const runningTotal = index === 0 ? 0 : pointsRunning2018[index - 1];

      const nextElement = runningTotal + points2018[index];

      pointsRunning2018.push(nextElement);
    }

    const pointsRunning2019: number[] = [];

    for (let index = 0; index < points2019.length; index++) {
      const runningTotal = index === 0 ? 0 : pointsRunning2019[index - 1];

      const nextElement = runningTotal + points2019[index];

      pointsRunning2019.push(nextElement);
    }

    const pointsRunning2020: number[] = [];

    for (let index = 0; index < points2020.length; index++) {
      const runningTotal = index === 0 ? 0 : pointsRunning2020[index - 1];

      const nextElement = runningTotal + points2020[index];

      pointsRunning2020.push(nextElement);
    }

    const dataPointCount = pointsRunning2018.length;

    const labels: string[] = [];

    for (let index = 0; index < dataPointCount; index++) {
      // const gameNumber = index + 1;
      const gameNumber = index;

      // const element = (index + 1) % 5 === 0 ? (index + 1).toString(10) : "";
      const element =
        (gameNumber % 5 === 0 ||
          gameNumber === 1 ||
          gameNumber === 23 ||
          gameNumber === 46) &&
          gameNumber !== 45
          ? gameNumber.toString(10)
          : "";

      labels.push(element);
    }

    const chartData: ChartData<chartjs.ChartData> = {
      // labels: Array(dataPointCount)
      //   .fill(0)
      //   .map((e, i) => (i + 1).toString(10)),

      labels: labels,

      datasets: []
    };

    if (this.state.show2016) {
      if (chartData.datasets) {
        chartData.datasets.push({
          label: "2016-",
          fill: false,
          lineTension: 0.1,

          backgroundColor: aliceBlueLegendFillColour,
          borderColor: aliceBlueLineColour,

          borderCapStyle: "butt",
          borderDash: [3, 3],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: aliceBlueLineColour,
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: aliceBlueLineColour,
          pointHoverBorderColor: greyLineColour,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: pointsRunning2016
        });
      }
    }

    if (this.state.show2017) {
      if (chartData.datasets) {
        chartData.datasets.push({
          label: "2017-",
          fill: false,
          lineTension: 0.1,

          backgroundColor: purpleLegendFillColour,
          borderColor: purpleLineColour,

          borderCapStyle: "butt",
          borderDash: [3, 3],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: purpleLineColour,
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: purpleLineColour,
          pointHoverBorderColor: greyLineColour,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: pointsRunning2017
        });
      }
    }

    if (this.state.show2018) {
      if (chartData.datasets) {
        chartData.datasets.push({
          label: "2018-",
          fill: false,
          lineTension: 0.1,
          backgroundColor: slateBlueLegendFillColour,
          borderColor: slateBlueLineColour,
          borderCapStyle: "butt",
          borderDash: [3, 3],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: slateBlueLineColour,
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: slateBlueLineColour,
          pointHoverBorderColor: greyLineColour,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: pointsRunning2018
        });
      }
    }

    // if (this.state.show2019) {
    //   if (chartData.datasets) {
    //     chartData.datasets.push({
    //       label: "2019-",
    //       fill: false,
    //       lineTension: 0.1,
    //       backgroundColor: redLegendFillColour,
    //       borderColor: redLineColour,
    //       borderCapStyle: "butt",
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: "miter",
    //       pointBorderColor: redLineColour,
    //       pointBackgroundColor: "#fff",
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 5,
    //       pointHoverBackgroundColor: redLineColour,
    //       pointHoverBorderColor: greyLineColour,
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 1,
    //       pointHitRadius: 10,
    //       data: pointsRunning2019
    //     });
    //   }
    // }

    if (this.state.show2019) {
      if (chartData.datasets) {
        chartData.datasets.push({
          label: "2019-",
          fill: false,
          lineTension: 0.1,
          backgroundColor: slateBlueLegendFillColour,
          borderColor: slateBlueLineColour,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: slateBlueLineColour,
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: slateBlueLineColour,
          pointHoverBorderColor: greyLineColour,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: pointsRunning2019
        });
      }
    }

    if (this.state.show2020) {
      if (chartData.datasets) {
        chartData.datasets.push({
          label: "2020-",
          fill: false,
          lineTension: 0.1,
          backgroundColor: redLegendFillColour,
          borderColor: redLineColour,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: redLineColour,
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: redLineColour,
          pointHoverBorderColor: greyLineColour,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: pointsRunning2020
        });
      }
    }

    if (this.state.showTrendLines) {
      const playoffFormValues: number[] = [];

      for (let index = 0; index < dataPointCount; index++) {
        // const element = (index + 1) * 1.7;
        const element = index * 1.61;
        playoffFormValues.push(element);
      }

      const relegationFormValues: number[] = [];

      for (let index = 0; index < dataPointCount; index++) {
        const element = index * 1.0;
        relegationFormValues.push(element);
      }

      if (chartData.datasets) {
        chartData.datasets.push({
          label: "Playoffs",
          fill: false,
          lineTension: 0.1,

          backgroundColor: greenLegendFillColour,
          borderColor: greenLineColour,

          borderCapStyle: "butt",
          borderDash: [5, 15],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: greenLineColour,
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: greenLineColour,
          pointHoverBorderColor: greyLineColour,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,

          data: playoffFormValues
        });

        chartData.datasets.push({
          label: "Relegation",
          fill: false,
          lineTension: 0.1,

          backgroundColor: orangeLegendFillColour,
          borderColor: orangeLineColour,

          borderCapStyle: "butt",
          borderDash: [5, 15],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: orangeLineColour,
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: orangeLineColour,
          pointHoverBorderColor: greyLineColour,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,

          data: relegationFormValues
        });
      }
    }

    const chartOptions = {
      // responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: "Points Total"
            }
          }
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Games Played"
            }
          }
        ]
      }
    };

    return (
      <div style={{ position: "relative", height: "80vh" }}>
        <div
          className="custom-control custom-checkbox"
          style={{ margin: "10px 30px 5px 25px" }}
        >
          <label className="custom-control-label">Show: </label>{" "}
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
            onChange={() => this.handleShowTrendLines()}
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Trend Lines
          </label>
          <input
            type="checkbox"
            className="custom-control-input"
            id="show2016Checkbox"
            onChange={() => this.handleShow2016()}
            style={{ marginLeft: "10px" }}
            checked={this.state.show2016}
          />
          <label className="custom-control-label" htmlFor="show2016Checkbox">
            2016-
          </label>{" "}
          <input
            type="checkbox"
            className="custom-control-input"
            id="show2017Checkbox"
            onChange={() => this.handleShow2017()}
            style={{ marginLeft: "10px" }}
            checked={this.state.show2017}
          />
          <label className="custom-control-label" htmlFor="show2017Checkbox">
            2017-
          </label>{" "}
          <input
            type="checkbox"
            className="custom-control-input"
            id="show2018Checkbox"
            onChange={() => this.handleShow2018()}
            style={{ marginLeft: "10px" }}
            checked={this.state.show2018}
          />
          <label className="custom-control-label" htmlFor="show2018Checkbox">
            2018-
          </label>{" "}
          <input
            type="checkbox"
            className="custom-control-input"
            id="show2019Checkbox"
            onChange={() => this.handleShow2019()}
            style={{ marginLeft: "10px" }}
            checked={this.state.show2019}
          />
          <label className="custom-control-label" htmlFor="show2019Checkbox">
            2019-
          </label>{" "}

          <input
            type="checkbox"
            className="custom-control-input"
            id="show2020Checkbox"
            onChange={() => this.handleShow2020()}
            style={{ marginLeft: "10px" }}
            checked={this.state.show2020}
          />
          <label className="custom-control-label" htmlFor="show2020Checkbox">
            2020-
          </label>{" "}
        </div>

        <Line
          data={chartData}
          options={chartOptions}
          width={600}
          redraw={true}
        />
      </div>
    );
  }
}

export default PointsLineChart;
