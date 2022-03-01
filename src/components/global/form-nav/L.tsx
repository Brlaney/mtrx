import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';

const leftColors = [
  '#FFFFFF',
  '#55BF81',
  '#3D69C2',
  '#3D69C2'
];

const rightColors = [
  '#FFFFFF',
  '#FFFFFF',
  '#55BF81',
  '#3D69C2'
];

/* State variables:

  lhs/rhs: 0 | 1
    0 => not-active
    1 => active

  stage: 0 | 1 | 2 | 3
    0 => neither are active
    1 => lhs active
    2 => lhs complete & rhs active
    3 => lhs & rhs complete
*/

const L = ({ lhs, rhs, stage }) => {
  return (
    <motion.div
      {...mainPathVariant}
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg
        width='140'
        height='90'
        viewBox='0 0 140 90'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='rod' data-name='Rod'>

          {/* Left end */}
          <motion.path
            id='left-end'
            d='M16.5 36.5L25 45L16.5 53.5L8 45L16.5 36.5Z'
            fill='#2F2F2F'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />

          {/* Right end */}
          <motion.path
            id='right-end'
            d='M123.5 36.5L132 45L123.5 53.5L115 45L123.5 36.5Z'
            fill='#2F2F2F'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />

          {/* Line */}
          <motion.path
            id='line'
            d='M23 45H117'
            stroke='#2F2F2F'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />

          {/* Renders if lhs-outline is active */}
          {lhs === 1 && (
            <motion.path
              id='left-end-active'
              d='M16.5 37L8.5 45L16.5 53L24.5 45L16.5 37Z'
              stroke='#55BF81'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
          )}

          {/* Renders if rhs-outline is active */}
          {rhs === 1 && (
            <motion.path
              id='right-end-active'
              d='M123.5 37L115.5 45L123.5 53L131.5 45L123.5 37Z'
              stroke='#55BF81'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
          )}

          {/* Each ends fill path */}
          {stage >= 0 && (
            <>
              <motion.path
                id='left-end'
                d='M11.5 45L16.5 40L21.5 45L16.5 50L11.5 45Z'
                fill={leftColors[stage]}
                {...shapeVariations}
                animate='visible'
                initial='hidden'
              />
              <motion.path
                id='right-end'
                d='M118.5 45L123.5 40L128.5 45L123.5 50L118.5 45Z'
                fill={rightColors[stage]}
                {...shapeVariations}
                animate='visible'
                initial='hidden'
              />
            </>
          )}
        </g>
      </svg>
    </motion.div>
  );
};

export default L;
