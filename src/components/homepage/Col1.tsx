import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations
} from '@/lib/config/animations/columns';

const Col1 = () => {
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
          <g id='col1' data-name='Homepage column 1 icon'>
            <motion.path
              {...mainPathVariant}
              d='M13 13.5V85.5C13 86.3284 13.6716 87 14.5 87H86.5C87.3284 87 88 86.3284 88 85.5V13.5C88 12.6716 87.3284 12 86.5 12H14.5C13.6716 12 13 12.6716 13 13.5Z'
              stroke='white'
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M10 10.5V88.5C10 89.3284 10.6716 90 11.5 90H89.5C90.3284 90 91 89.3284 91 88.5V10.5C91 9.67157 90.3284 9 89.5 9H11.5C10.6716 9 10 9.67157 10 10.5Z'
              stroke='white'
              stroke-width='0.5'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M13 37H88M13 62H88'
              stroke='white'
              stroke-width='0.5'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M13 36H88M13 61H88'
              stroke='white'
              stroke-width='0.5'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M38 87L38 12M63 87V12'
              stroke='white'
              stroke-width='0.5'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M37 87L37 12M64 87V12'
              stroke='white'
              stroke-width='0.5'
              animate='visible'
              initial='hidden'
            />
          </g>
        </motion.svg>
      </div>
    </motion.div>
  )
};

export default Col1;
