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

const H = ({ lhs, rhs, stage }) => {
  return (
    <motion.div
      {...mainPathVariant}
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg
        width='200'
        height='90'
        viewBox='0 0 200 90'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='rod' data-name='Rod'>

          {/* Left end */}
          <motion.path
            id='left-end'
            d='M14.5 37L22.5 45L14.5 53L7 45L14.5 37Z'
            fill='#2F2F2F'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />

          {/* Right end */}
          <motion.path
            id='right-end'
            d='M186 37L194 45L186 53L178.5 45L186 37Z'
            fill='#2F2F2F'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />

          {/* Line */}
          <motion.path
            id='line'
            d='M21 45C123.755 45 168.981 45 179.5 45'
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
              d='M14.5 37.5L7 45L14.5 52.5L22 45L14.5 37.5Z'
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
              d='M186 37.5L178.5 45L186 52.5L193.5 45L186 37.5Z'
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
                d='M10 44.5L14.5 40L19 44.5L14.5 49L10 44.5Z'
                fill={leftColors[stage]}
                {...shapeVariations}
                animate='visible'
                initial='hidden'
              />
              <motion.path
                id='right-end'
                d='M181 45L186 40L191 45L186 50L181 45Z'
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

export default H;
