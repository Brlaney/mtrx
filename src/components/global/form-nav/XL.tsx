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

const XL = ({ lhs, rhs, stage }) => {
  return (
    <motion.div
      {...mainPathVariant}
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg
        width='268'
        height='90'
        viewBox='0 0 268 90'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='rod' data-name='Rod'>

          {/* Left end */}
          <motion.path
            id='left-end'
            d='M14.5 36.5L23 45L14.5 53.5L6 45L14.5 36.5Z'
            fill='#2F2F2F'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />

          {/* Right end */}
          <motion.path
            id='right-end'
            d='M253.5 36.5L262 45L253.5 53.5L245 45L253.5 36.5Z'
            fill='#2F2F2F'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />

          {/* Line */}
          <motion.path
            id='line'
            d='M21 45H247'
            stroke='#2F2F2F'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />

          {/* Renders if lhs is active */}
          {lhs === 1 && (
            <motion.path
              id='left-end-active'
              d='M14.5 37L6.5 45L14.5 53L22.5 45L14.5 37Z'
              stroke='#55BF81'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
          )}

          {/* Renders if rhs is active */}
          {rhs === 1 && (
            <motion.path
              id='right-end-active'
              d='M253.5 37L245.5 45L253.5 53L261.5 45L253.5 37Z'
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
                d='M9.5 45L14.5 40L19.5 45L14.5 50L9.5 45Z'
                fill={leftColors[stage]}
                {...shapeVariations}
                animate='visible'
                initial='hidden'
              />
              <motion.path
                id='right-end'
                d='M248.5 45L253.5 40L258.5 45L253.5 50L248.5 45Z'
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

export default XL;
