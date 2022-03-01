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

const Full = ({ lhs, rhs, stage }) => {
  return (
    <motion.div
      {...mainPathVariant}
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg
        width='400'
        height='90'
        viewBox='0 0 400 90'
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
            d='M385 36.5L393.5 45L385 53.5L376.5 45L385 36.5Z'
            fill='#2F2F2F'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />

          {/* Line */}
          <motion.path
            id='line'
            d='M20.5 45C257.831 45 354.205 45 378.5 45'
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
              d='M385 37L377 45L385 53L393 45L385 37Z'
              stroke='#55BF81'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
          )}

          {/* Each ends outline path */}
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
                d='M380 45L385 40L390 45L385 50L380 45Z'
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

export default Full;
