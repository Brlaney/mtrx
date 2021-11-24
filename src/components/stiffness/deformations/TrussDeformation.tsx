import * as React from 'react';
import { Line } from 'react-chartjs-2';
import { data, config } from '@/lib/config/matrix/truss';

const TrussDeformation = () => {
  return (
    <>
      <Line
        data={data}
        options={config}
        width={800}
        height={550}
      />
    </>
  )
};

export default TrussDeformation;
