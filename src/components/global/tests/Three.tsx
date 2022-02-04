import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';


const Three = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg
        width='390'
        height='160'
        viewBox='0 0 390 160'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='bar_element' data-name='Bar element 3'>
          <motion.path
            {...mainPathVariant}
            d='M1.09419 154L390.742 11.4899'
            stroke='#4E4E4E'
            strokeDasharray='4 4'
          />
          <motion.path
            {...shapeVariations}
            d='M94.9476 119.597L197.209 82.5112L295.94 46.5762'
            stroke='#252323'
            strokeWidth='2.5'
          />
          <motion.path
            {...shapeVariations}
            d='M87.0915 120.853C87.0915 118.644 88.8824 116.853 91.0915 116.853C93.3006 116.853 95.0915 118.644 95.0915 120.853C95.0915 123.062 93.3006 124.853 91.0915 124.853C88.8824 124.853 87.0915 123.062 87.0915 120.853Z'
            fill='#CADEFC'
            stroke='#242121'
          />
          <motion.circle
            {...shapeVariations}
            cx='299.094'
            cy='45'
            r='4'
            transform='rotate(-180 299.094 45)'
            fill='#CADEFC'
            stroke='black'
          />
        </g>
      </svg>
    </motion.div>
  )
};

export default Three;
