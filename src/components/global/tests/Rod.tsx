import { motion } from 'framer-motion';
import {
  rods,
  rodLine,
} from '@/lib/data/solver/rods';
import {
  IRod,
  IRodLine,
} from '@/lib/types';
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';

/*
 - CONDITIONAL RENDERING - 

for line:
  strokeColor: 0,
  strokeWidth='3'
  strokeLinecap='round'
  strokeLinejoin='round'

for xxxx-end-active:
  stroke=color[2]
  strokeWidth='2'
  strokeLinecap='round'
  strokeLinejoin='round'

- POSSIBLE ROD STATES -

  Standard - neither end is active
  Left     - lhs is active
  Right    - lhs is complete & rhs is active
  Complete - lhs & rhs are complete

  -1 => strokeColor or fillColor == 'none'

  stateColors: [0, 0, 0, 0]
  
  format => [
    "stateColor for the 'Standard' state",
    "stateColor for the 'Left' state",
    "stateColor for the 'Right' state",
    "stateColor for the 'Complete' state",
];
*/

const colors = [
  '#2F2F2F',
  '#3D69C2',
  '#55BF81',
  '#FFFFFF'
];

const Rod = ({phase}) => {
  return (
    <motion.div
      {...mainPathVariant}
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg
        width='424'
        height='90'
        viewBox='0 0 424 90'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='rod' data-name='Rod'>

          {rods.map((rod: IRod) => (
            <motion.path
              key={rod.id}
              id={rod.name}
              d={rod.d}
              fill={colors[rod.index]}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
          ))}

          {rodLine.map((line: IRodLine) => (
            <motion.path
              key={line.id}
              id={line.name}
              d={line.d}
              stroke={line.color}
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
          ))}

          {phase === 1 && (
            <motion.path
              id='left-end-active'
              d='M12 36L3 45L12 54L21 45L12 36Z'
              stroke='#55BF81'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
          )}

          {phase === 2 && (
            <motion.path
              id='right-end-active'
              d='M412 36L403 45L412 54L421 45L412 36Z'
              stroke='#55BF81'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
          )}
        </g>
      </svg>
    </motion.div>
  );
};

export default Rod;
