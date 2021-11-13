import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';

const leftColors = [
  '#FFFFFF',
  '#3D69C2',
  '#3D69C2',
  '#3D69C2'
];

const rightColors = [
  '#FFFFFF',
  '#FFFFFF',
  '#3D69C2',
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

const Rod = ({ lhs, rhs, stage }) => {
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

          {/* Left end */}
          <motion.path
            id='left-end'
            d='M12 36.5L20.5 45L12 53.5L3.5 45L12 36.5Z'
            fill='#2F2F2F'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />

          {/* Right end */}
          <motion.path
            id='right-end'
            d='M412 36.5L420.5 45L412 53.5L403.5 45L412 36.5Z'
            fill='#2F2F2F'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />

          {/* Line */}
          <motion.path
            id='line'
            d='M18.5 45C275.388 45 379.703 45 406 45'
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

          {/* Renders if rhs is active */}
          {rhs === 1 && (
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

          {/* Each ends outline path */}
          {stage >= 0 && (
            <>
              <motion.path
                id='left-end'
                d='M7 45L12 40L17 45L12 50L7 45Z'
                fill={leftColors[stage]}
                {...shapeVariations}
                animate='visible'
                initial='hidden'
              />
              <motion.path
                id='right-end'
                d='M407 45L412 40L417 45L412 50L407 45Z'
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

export default Rod;
