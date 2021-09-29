import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import { data, config } from '@/lib/config/matrix/frames';

defaults.font.family = "'Rubik', sans-serif"; // Default font-styles

const Frames = () => {
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

export default Frames;
