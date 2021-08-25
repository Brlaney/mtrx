import React from 'react'
import { Bar } from 'react-chartjs-2'


const options = {
  scales: {
    yAxes: [{ ticks: { beginAtZero: true }}]
  }
}

const LocationBarChart = ({ data, location }) => {
  const graphData = data[location.id]
  console.log(graphData)

  return (
    <>
      <Bar
        data={{
          labels: [
            'Surgical at <= 13 weeks gestational age',
            'Surgical at > 13 weeks gestational age',
            'Surgical at unkown gestational age',
            'Medical at <= 9 weeks gestational age',
            'Medical at > 9 weeks gestational age',
            'Medical at unkown gestational age',
            'Intrauterine instillation',
            'Hysterectomy/Hysterotomy',
            'Total abortions reported by known method type'
          ],
          datasets: [
            {
              label: 'Number of abortion procedures',
              data: { graphData },
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={options}
      />
    </>
  )
}

export default LocationBarChart
