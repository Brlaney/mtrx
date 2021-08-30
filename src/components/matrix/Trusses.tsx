import React from 'react'
import { Line } from 'react-chartjs-2'
import { defaults } from 'react-chartjs-2';
import { data, config } from '@/lib/config/matrix/trusses';

defaults.font.family = "'Rubik', sans-serif"; // Default font-styles

const Trusses = () => {
  return (
    <>
      <Line
        data={data}
        options={config}
        width={800}
        height={350}
      />
    </>
  )
}

export default Trusses
