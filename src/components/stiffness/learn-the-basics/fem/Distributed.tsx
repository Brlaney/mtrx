import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations
} from '@/lib/config/animations/svgs/svgs';

const color1 = 'rgba(37, 35, 35, 0.3)';
const color2 = 'rgba(202, 222, 252, 0.7)';

/* 
  animate={{
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }}
  initial={{ y: 60, opacity: 0, }}
*/

const Distributed = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <div>
        <svg
          width='350'
          height='350'
          viewBox='0 0 350 350'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g
            id='Distributed'
            data-name='Distributed'
          >
            {/* motion.path html elements go here */}
            {/* ...mainPathVariant */}
            {/* ...shapeVariations */}
          </g>
        </svg>
      </div>
    </motion.div>
  )
};

export default Distributed;