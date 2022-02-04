import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';


const One = () => {
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
        <g
          id='bar_element'
          data-name='Bar element 1'
        >
          <motion.path
            {...mainPathVariant}
            d='M88.053 80.2763L196.91 80.4022H302.053'
            stroke='#252323'
            strokeWidth='2.5'
          />
          <motion.path
            {...shapeVariations}
            d='M88 80.1373C88 82.3464 86.2091 84.1373 84 84.1373C81.7909 84.1373 80 82.3464 80 80.1373C80 77.9281 81.7909 76.1373 84 76.1373C86.2091 76.1373 88 77.9281 88 80.1373Z'
            fill='#CADEFC'
            stroke='#242121'
          />
          <motion.circle
            {...shapeVariations}
            cx='305'
            cy='80'
            r='4'
            fill='#CADEFC'
            stroke='black'
          />
        </g>
      </svg>
    </motion.div>
  )
};

export default One;
