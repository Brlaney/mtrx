import React from 'react'
import { Line } from 'react-chartjs-2'
import { defaults } from 'react-chartjs-2';

defaults.font.family = "'Rubik', sans-serif"; // Default font-styles

const data = {
  labels: ['0', '5 ft', '10 ft', '20 ft', '30 ft'],
  datasets: [
    {
      type: 'line',
      label: 'Continuous beam',
      data: [0, 0, 0, 0, 0],
      backgroundColor: 'rgba(41, 105, 255, 0.2)',
      borderColor: 'rgba(41, 105, 255, 1)',
      borderWidth: 1,
      pointRadius: 5,
      pointHoverRadius: 8,
      order: 0
    },
    {
      type: 'line',
      label: 'Deformation',
      data: [0, -0.1, 0, 0.16, 0],
      backgroundColor: 'rgba(191, 26, 47, 0.2)',
      borderColor: 'rgba(191, 26, 47, 1)',
      borderWidth: 1,
      pointRadius: 3,
      pointHoverRadius: 6,
      lineTension: 0.25,
      order: 0
    },
    {
      type: 'line',
      label: 'Internal stresses',
      data: [1.5, 1.5, -0.5, -0.5, 0],
      stepped: true,
      fill: true,
      backgroundColor: 'rgba(119, 104, 174, 0.2)',
      borderColor: 'rgba(119, 104, 174, 1)',
      borderWidth: 1,
      pointRadius: 3,
      pointHoverRadius: 1,
      order: 0
    },
  ]
}

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
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
  scales: {
    y: {
      max: 2,
      min: -2,
      ticks: {
        stepSize: 1,
        callback: function(value) {
          return value + ' ft';
      }
      },
    },
  },
}

const Frames = () => {
  return (
    <>
      <Line
        data={data}
        options={config}
        width={800}
        height={350}
      />
    </>
  )
}

export default Frames
