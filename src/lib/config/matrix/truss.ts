export const data = {
  labels: ['0', '5 ft', '10 ft', '20 ft', '30 ft'],
  datasets: [
    {
      label: 'Continuous beam',
      data: [
        { x: 0, y: 0, },
        { x: 10, y: 10, },
        { x: 20, y: 10, },
        { x: 30, y: 0, },
        { x: 10, y: 10, },
        { x: 0, y: 0, },
        { x: 20, y: 10, },
      ],
      backgroundColor: 'rgba(41, 105, 255, 0.2)',
      borderColor: 'rgba(52, 58, 64, 0.5)',
      borderDash: [10],
      hitRadius: 5,
      borderWidth: 1,
      pointRadius: 4,
      pointHoverRadius: 7,
    },
    {
      type: 'line',
      label: 'Deformation',
      data: [
        { x: 0, y: 0, },
        { x: 10.34, y: 9.4, },
        { x: 20.2, y: 10.15, },
        { x: 30, y: 0, },
        { x: 10.34, y: 9.4, },
        { x: 0, y: 0, },
        { x: 20.2, y: 10.15, },
      ],
      backgroundColor: 'rgba(191, 26, 47, 0.5)',
      borderColor: 'rgba(191, 26, 47, 1)',
      hitRadius: 5,
      borderWidth: 1,
      pointRadius: 4,
      pointHoverRadius: 7,
    },
  ]
};

export const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
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
  scales: {
    xAxes: {
      display: true,
      max: 40,
      min: -10,
      ticks: {
        stepSize: 5,
        callback: function (value) {
          return value + ' ft';
        }
      },
    },
    yAxes: {
      display: true,
      position: 'right',
      max: 15,
      min: -5,
      ticks: {
        stepSize: 1,
        callback: function (value) {
          return value + ' in';
        }
      },
    },
  },
};