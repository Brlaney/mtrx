import React from 'react'
import { Bar } from 'react-chartjs-2'

const data = {
  labels: [
    '<= 13 (Surgical)',
    '<= 9 (Medical)',
    '> 13 (Surgical)',
    '> 9 (Medical)',
    // 'Unknown (Total abortions reported by known method type)'
  ],
  datasets: [
    {
      label: 'Combined US totals',
      data: [289931, 214779, 43576, 7743], // 556294
      backgroundColor: [
        'rgba(242, 27, 63, 0.3)',
        'rgba(41, 191, 18, 0.2)',
        'rgba(171, 255, 79, 0.2)',
        'rgba(8, 189, 189, 0.2)',
      ],
      borderColor: [
        'rgba(242, 27, 63, 1)',
        'rgba(41, 191, 18, 1)',
        'rgba(171, 255, 79, 1)',
        'rgba(8, 189, 189, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
}

const TestBarGraph = () => {
  return (
    <>
      <Bar
        data={data}
        options={options}
      />
    </>
  )
}

export default TestBarGraph
