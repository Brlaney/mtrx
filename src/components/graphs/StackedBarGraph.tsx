import React from 'react'
import { Bar } from 'react-chartjs-2'
import { data, options } from '@/lib/config/charts/stacked'


const StackedBarGraph = () => (
  <>
    <Bar
      data={data}
      options={options}
    />
  </>
);

export default StackedBarGraph
