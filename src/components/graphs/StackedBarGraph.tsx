import React from 'react'
import { Bar } from 'react-chartjs-2'

const data = {
  labels: [
    '<= 13 (Surgical)',
    '> 13 (Surgical)',
    'Unknown (Surgical)',
    '<= 9 (Medical)',
    '> 9 (Medical)',
    'Unkown (Medical)',
    'Unkown (Intrauterine instillation)',
    'Unknown (Hysterectomy)',
    'Unknown (Total abortions reported by known method type)'
  ],
  datasets: [
    {
      label: 'Arizona',
      data: [0, 0, 0, 0, 0, 0, 112, 0, 0],
      backgroundColor: 'rgb(105,180,200)',
    },
    {
      label: 'Connecticut',
      data: [0, 0, 169, 0, 0, 69, 0, 0, 0],
      backgroundColor: 'rgb(105,180,200)',
    },
    {
      label: 'Florida',
      data: [33565, 2438, 0, 30567, 356, 0, 0, 5, 66931],
      backgroundColor: 'rgb(255,98,82)',
    },
    {
      label: 'Georgia',
      data: [16418, 2864, 0, 14328, 204, 0, 0, 0, 33814],
      backgroundColor: 'rgb(150,81,75)',
    },
    {
      label: 'Massachusetts',
      data: [0, 0, 10826, 0, 0, 7257, 8, 0, 0],
      backgroundColor: 'rgb(95,160,160)',
    },
    {
      label: 'Michigan',
      data: [13761, 2681, 0, 9999, 213, 0, 0, 0, 26677],
      backgroundColor: 'rgb(66,61,65)',
    },
    {
      label: 'Minnesota',
      data: [0, 0, 59, 0, 0, 93, 0, 0, 0],
      backgroundColor: 'rgb(110,219,232)',
    },
    {
      label: 'Nevada',
      data: [0, 0, 41, 0, 0, 0, 0, 0, 0],
      backgroundColor: 'rgb(110,219,232)',
    },
    {
      label: 'New Jersey',
      data: [12593, 2682, 219, 0, 367, 179, 0, 0, 22933],
      backgroundColor: 'rgb(255,98,82)',
    },
    {
      label: 'New York',
      data: [43279, 6243, 1141, 21472, 1887, 1443, 72, 15, 75552],
      backgroundColor: 'rgb(255,98,82)',
    },
    {
      label: 'New York City',
      data: [31443, 4295, 0, 13390, 438, 0, 18, 15, 49631],
      backgroundColor: 'rgb(255,98,82)',
    },
    {
      label: 'New York State',
      data: [0, 0, 1117, 8082, 1449, 1435, 54, 0, 25921],
      backgroundColor: 'rgb(255,98,82)',
    },
    {
      label: 'North Carolina',
      data: [12241, 2030, 48, 11410, 0, 41, 0, 0, 25972],
      backgroundColor: 'rgb(150,81,75)',
    },
    {
      label: 'Ohio',
      data: [11940, 2300, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: 'rgb(95,160,160)',
    },
    {
      label: 'Pennsylvania',
      data: [14056, 3840, 0, 10564, 1902, 0, 0, 0, 30363],
      backgroundColor: 'rgb(255,98,82)',
    },
    {
      label: 'Rhode Island',
      data: [0, 0, 0, 0, 0, 800, 0, 0, 0],
      backgroundColor: 'rgb(105,180,200)',
    },
    {
      label: 'South Carolina',
      data: [0, 0, 0, 0, 665, 0, 0, 0, 0],
      backgroundColor: 'rgb(105,180,200)',
    },
    {
      label: 'Tennessee',
      data: [0, 0, 0, 0, 0, 43, 0, 0, 0],
      backgroundColor: 'rgb(110,219,232)',
    },
    {
      label: 'Texas',
      data: [31966, 4033, 0, 18891, 243, 0, 0, 0, 55138],
    },
    {
      label: 'Virginia',
      data: [0, 0, 46, 0, 0, 0, 0, 0, 0],
      backgroundColor: 'rgb(110,219,232)',
    },
    {
      label: 'Washington',
      data: [0, 0, 0, 7963, 0, 0, 0, 0, 0],
      backgroundColor: 'rgb(95,160,160)',
    },
    {
      label: 'Wisconsin',
      data: [0, 0, 4302, 0, 0, 1739, 0, 0, 0],
      backgroundColor: 'rgb(66,61,65)',
    }
  ]
}

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
}

const StackedBarGraph = () => (
  <>
    <Bar
      data={data}
      options={options}
    />
  </>
);

export default StackedBarGraph
