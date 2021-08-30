export const data = {
  labels: ['0', '5 ft', '10 ft', '20 ft', '30 ft'],
  datasets: [
    {
      type: 'line',
      label: 'Continuous beam',
      data: [
        { x: 0, y: 0, },
        { x: 5, y: 0, },
        { x: 10, y: 0, },
        { x: 20, y: 0, },
        { x: 30, y: 0 }
      ],
      backgroundColor: 'rgba(41, 105, 255, 0.2)',
      borderColor: 'rgba(41, 105, 255, 1)',
      borderWidth: 1,
      pointRadius: 2,
      pointHoverRadius: 4,
      yAxisID: 'y'
    },
    {
      type: 'line',
      label: 'Deformation',
      data: [
        { x: 0, y: 0, },
        { x: 5, y: -0.1, },
        { x: 10, y: 0, },
        { x: 20, y: 0.16, },
        { x: 30, y: 0 }
      ],
      fill: true,
      backgroundColor: 'rgba(191, 26, 47, 0.2)',
      borderColor: 'rgba(191, 26, 47, 1)',
      borderWidth: 1,
      pointRadius: 2,
      pointHoverRadius: 4,
      lineTension: 0.25,
      yAxisID: 'y'
    },
  ]
};

export const config = {
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
      max: 35,
      min: -5,
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
      max: 2,
      min: -2,
      ticks: {
        stepSize: 1,
        callback: function (value) {
          return value + ' in';
        }
      },
    },
  },
};
