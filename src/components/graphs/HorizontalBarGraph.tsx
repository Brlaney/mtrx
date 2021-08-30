import React from 'react'
import { Bar } from 'react-chartjs-2'
import { data, options } from '@/lib/config/charts/horizontal'


const HorizontalBarGraph = () => {
  return (
    <>
      <Bar
        data={data}
        options={options}
      />
    </>
  )
}

export default HorizontalBarGraph
