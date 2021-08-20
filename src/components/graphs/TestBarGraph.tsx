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
        'rgba(255, 98, 82, 0.3)',
        'rgba(61,61,65, 0.2)',
        'rgba(95, 160, 160, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255,98,82, 1)',
        'rgba(61,61,65, 1)',
        'rgb(95,160,160)',
        'rgba(75, 192, 192, 1)',
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
