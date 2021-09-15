import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import { data, config } from '@/lib/config/matrix/beams';

defaults.font.family = "'Rubik', sans-serif"; // Default font-styles

const Beams = () => {
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
};

export default Beams;
