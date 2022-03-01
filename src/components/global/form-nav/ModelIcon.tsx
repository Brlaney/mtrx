import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';

const strokeColors = ['#A2A2A2', '#2F2F2F'];
const fillColors = ['#C4C4C4', '#55BF81'];

const ModelIcon = ({ ready }) => {
  return (
    <motion.div
      {...mainPathVariant}
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg
        width='50'
        height='90'
        viewBox='0 0 50 90'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='model-icon' data-name='Model Icon'>
          <motion.path
            d='M7.5 36.2L16.3 45L7.5 53.8V36.21Z'
            fill={fillColors[ready]}
            stroke={strokeColors[ready]}
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M16.9 35.8L19 33.7L30.3 45L19 56.3L16.9 54.2L25.7 45.4L26 45L25.7 44.6L16.9 35.8Z'
            fill={fillColors[ready]}
            stroke={strokeColors[ready]}
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M29.9 35.8L32 33.7L43.3 45L32 56.3L29.9 54.2L38.7 45.4L39 45L38.7 44.6L29.9 35.8Z'
            fill={fillColors[ready]}
            stroke={strokeColors[ready]}
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
        </g>
      </svg>
    </motion.div>
  )
}

export default ModelIcon
