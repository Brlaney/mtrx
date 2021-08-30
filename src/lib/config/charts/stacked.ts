export const data = {
  labels: [
    '<= 13 (Surgical)',
    '<= 9 (Medical)',
    '> 13 (Surgical)',
    'Unkown (Medical)',
    '> 9 (Medical)',
  ],
  datasets: [
    {
      label: 'Florida',
      data: [33565, 30567, 2438, 0, 356,],
      backgroundColor: 'rgba(232, 170, 20, 0.2)',
      borderColor: 'rgba(232, 170, 20, 1)',
      borderWidth: 1,
    },
    {
      label: 'Georgia',
      data: [16418, 14328, 2864, 0, 204,],
      backgroundColor: 'rgba(255, 87, 20, 0.2)',
      borderColor: 'rgba(255, 87, 20, 1)',
      borderWidth: 1,
    },
    {
      label: 'Massachusetts',
      data: [0, 0, 10826, 7257, 0,],
      backgroundColor: 'rgba(247, 208, 2, 0.2)',
      borderColor: 'rgba(247, 208, 2, 1)',
      borderWidth: 1,
    },
    {
      label: 'Michigan',
      data: [13761, 9999, 2681, 0, 213,],
      backgroundColor: 'rgba(1, 142, 66, 0.2)',
      borderColor: 'rgba(1, 142, 66, 1)',
      borderWidth: 1,
    },
    {
      label: 'New Jersey',
      data: [12593, 2682, 219, 179, 367,],
      backgroundColor: 'rgba(240, 6, 153, 0.2)',
      borderColor: 'rgba(240, 6, 153, 1)',
      borderWidth: 1,
    },
    {
      label: 'New York',
      data: [43279, 21472, 6243, 1443, 1887,],
      backgroundColor: 'rgba(191, 26, 47, 0.2)',
      borderColor: 'rgba(191, 26, 47, 1)',
      borderWidth: 1,
    },
    {
      label: 'New York City',
      data: [31443, 13390, 4295, 0, 438,],
      backgroundColor: 'rgba(110, 235, 131, 0.2)',
      borderColor: 'rgba(110, 235, 131, 1)',
      borderWidth: 1,
    },
    {
      label: 'New York State',
      data: [0, 8082, 0, 1435, 1449,],
      backgroundColor: 'rgba(27, 231, 255, 0.2)',
      borderColor: 'rgba(27, 231, 255, 1)',
      borderWidth: 1,
    },
    {
      label: 'North Carolina',
      data: [12241, 11410, 2030, 41, 0,],
      backgroundColor: 'rgba(41, 191, 18, 0.2)',
      borderColor: 'rgba(41, 191, 18, 1)',
      borderWidth: 1,
    },
    {
      label: 'Ohio',
      data: [11940, 2300, 0, 0, 0,],
      backgroundColor: 'rgba(171, 255, 79, 0.2)',
      borderColor: 'rgba(171, 255, 79, 1)',
      borderWidth: 1,
    },
    {
      label: 'Pennsylvania',
      data: [14056, 10564, 3840, 0, 1902,],
      backgroundColor: 'rgba(8, 189, 189, 0.2)',
      borderColor: 'rgba(8, 189, 189, 1)',
      borderWidth: 1,
    },
    {
      label: 'Texas',
      data: [31966, 18891, 4033, 0, 243,],
      backgroundColor: 'rgba(242, 27, 63, 0.2)',
      borderColor: 'rgba(242, 27, 63, 1)',
      borderWidth: 1,
    },
    {
      label: 'Wisconsin',
      data: [0, 0, 4302, 1739, 0,],
      backgroundColor: 'rgba(255, 153, 20, 0.2)',
      borderColor: 'rgba(255, 153, 20, 1)',
      borderWidth: 1,
    }
  ]
};

export const options = {
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
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      align: 'center',
      maxWidth: 500,
      padding: '2rem'
    },
    title: {
      display: false,
    },
  },
};
