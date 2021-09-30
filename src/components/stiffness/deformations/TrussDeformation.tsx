import * as React from 'react';
import { useRef, useState } from 'react';
import { Line as line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import { coordinates, config } from '@/lib/config/matrix/truss';
// import styles from '@/styles/components/Deformation.module.scss';

defaults.font.family = "'Rubik', sans-serif"; // Default font-styles

/*
 const data = {
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
      yAxisID: 'y'
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
      // lineTension: -0.05,
      yAxisID: 'y'
    },
  ]
};

 const config = {
   // type: 'line',
   // data: data,
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
       type: 'linear',
       display: true,
       max: 40,
       min: -10,
       // ticks: {
       //   stepSize: 5,
       //   callback: function (value) {
       //     return value + ' ft';
       //   }
       // },
     },
     yAxes: {
       type: 'linear',
       display: true,
       position: 'right',
       max: 15,
       min: -5,
       // ticks: {
       //   stepSize: 1,
       //   callback: function (value) {
       //     return value + ' in';
       //   }
       // },
     },
   },
  }; 
  */


const TrussDeformation = () => {
  const [data, setData] = useState(coordinates);
  const [options, setOptions] = useState(config);
  const ref = useRef();

  return <line type='line' ref={ref} data={data} options={options} width={800} height={550} />;
};

export default TrussDeformation;

/*
    <motion.div
      className={styles.chartouter}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <motion.div className={styles.chartinner} variants={fadeInUp}>
            </motion.div>
    </motion.div>
*/