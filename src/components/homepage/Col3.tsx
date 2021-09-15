import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations
} from '@/lib/config/animations/svgs/svgs';

const Col3 = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <div>
        <motion.svg
          width='100'
          height='100'
          viewBox='0 0 100 100'
          fill='none'
          {...shapeVariations}
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='col3' data-name='Homepage column 3 icon'>
            <motion.path
              {...mainPathVariant}
              d='M42 57L42 36'
              stroke='white'
              stroke-width='2'
              {...shapeVariations}
              stroke-linecap='round'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M42 36L42 17'
              stroke='white'
              stroke-linecap='round'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M42 69V57'
              stroke='white'
              stroke-width='2.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M42 84L42 69'
              stroke='white'
              stroke-width='3'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M44 57L94 57'
              stroke='white'
              stroke-width='1.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M6 57H40'
              stroke='white'
              stroke-width='1.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M44 17L93 54'
              stroke='white'
              stroke-width='0.5'
              {...shapeVariations}
              stroke-linecap='round'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M44 22L81 54'
              stroke='white'
              stroke-width='0.5'
              {...shapeVariations}
              stroke-linecap='round'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M40 22L6 51'
              stroke='white'
              stroke-width='0.5'
              {...shapeVariations}
              stroke-linecap='round'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M40 17L6 41'
              stroke='white'
              stroke-width='0.5'
              {...shapeVariations}
              stroke-linecap='round'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M40 27L19 54'
              stroke='white'
              stroke-width='0.5'
              {...shapeVariations}
              stroke-linecap='round'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M44 27L64 54'
              stroke='white'
              stroke-width='0.5'
              {...shapeVariations}
              stroke-linecap='round'
              animate='visible'
              initial='hidden'
            />
          </g>
        </motion.svg>
      </div>
    </motion.div>
  )
};

export default Col3;
