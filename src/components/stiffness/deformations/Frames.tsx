import * as React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['0', '5 ft', '10 ft', '20 ft', '30 ft'],
  datasets: [
    {
      type: 'line',
      label: 'Continuous beam',
      data: [
        { x: 0, y: 0, },
        { x: 0, y: 25, },
        { x: 10, y: 25, },
        { x: 10, y: 0, },
      ],
      backgroundColor: 'rgba(41, 105, 255, 0.2)',
      borderColor: 'rgba(52, 58, 64, 0.5)',
      borderDash: [10],
      hitRadius: 4,
      borderWidth: 1,
      pointRadius: 3,
      pointHoverRadius: 5,
      yAxisID: 'y'
    },
    {
      type: 'line',
      label: 'Deformation',
      data: [
        { x: 0, y: 0, },
        { x: 0.16, y: 23.97, },
        { x: 10.5, y: 24.95, },
        { x: 10, y: 0, }
      ],
      // fill: true,
      backgroundColor: 'rgba(191, 26, 47, 0.2)',
      borderColor: 'rgba(191, 26, 47, 1)',
      hitRadius: 4,
      borderWidth: 1,
      pointRadius: 3,
      pointHoverRadius: 5,
      lineTension: -0.05,
      yAxisID: 'y'
    },
  ]
};

const options = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: true,
    },
    stacked: false,
    layout: {
      padding: '10px',
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Combined Line/Bar Chart',
      }
    }
  },
  interaction: {
    mode: 'index',
    intersect: false
  },
  scales: {
    x: {
      type: 'linear',
      display: true,
      max: 20,
      min: -10,
      ticks: {
        stepSize: 5,
        callback: function (value) {
          return value + ' ft';
        }
      },
    },
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      max: 30,
      min: -10,
      ticks: {
        stepSize: 5,
        callback: function (value) {
          return value + ' ft';
        }
      },
    },
  },
};

const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 14
  }
};

export default function Frames() {
  return (
    <>
      <Line
        data={data}
        legend={legend}
        options={options}
        width={800}
        height={550}
      />
    </>
  );
}
