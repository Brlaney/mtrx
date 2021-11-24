import { Line } from 'react-chartjs-2';
import { data, config } from '@/lib/config/matrix/beams';

const Beams = () => {
  return (
    <>
      <Line
        data={data}
        options={config}
        width={800}
        height={600}
      />
    </>
  )
};

export default Beams;
