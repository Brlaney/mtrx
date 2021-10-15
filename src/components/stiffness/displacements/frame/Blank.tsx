import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';

const color1 = '#818181';
const color2 = '#4E4E4E';
const color3 = '#888888';

const Blank = () => {
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
          <g id='blank' data-name='blank'>
            <motion.path
              {...mainPathVariant}
              d='M91.5 79.5V267'
              stroke={color1}
              stroke-linecap='round'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M91.5 79.5H255.5'
              stroke={color1}
              stroke-linecap='round'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M255.5 79.5V267'
              stroke={color1}
              stroke-linecap='round'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.line
              x1='231'
              y1='267.5'
              x2='281'
              y2='267.5'
              stroke={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.line
              x1='68'
              y1='267.5'
              x2='118'
              y2='267.5'
              stroke={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M246 268L240 274'
              stroke={color3}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M269 268L263 274'
              stroke={color3}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M261 268L255 274'
              stroke={color3}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M253 268L247 274'
              stroke={color3}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M82 268L76 274'
              stroke={color3}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M105 268L99 274'
              stroke={color3}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M97 268L91 274'
              stroke={color3}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M89 268L83 274'
              stroke={color3}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
          </g>
        </svg>
      </div>
    </motion.div>
  )
};

export default Blank;
