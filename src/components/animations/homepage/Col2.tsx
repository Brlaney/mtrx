import { motion, AnimationProps } from 'framer-motion';

const color1 = '#ffffff';
const color2 = '#3d69c2';
const color3 = '#252323';

const mainPathVariant: AnimationProps = {
  transition: { duration: 6, ease: 'easeInOut' },
  variants: { visible: { pathLength: 1 }, hidden: { pathLength: 0 } },
};

const shapeVariations: AnimationProps = {
  transition: { delay: 0, duration: 1, ease: 'easeIn' },
  variants: {
    visible: {
      fillOpacity: 1,
      pathLength: 1,
      transition: { delay: 0, duration: 4 },
    },
    hidden: { fillOpacity: 0, pathLength: 0 },
  },
};

const Col2 = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <div>
        <motion.svg
          width='1rem'
          height='1rem'
          viewBox='0 0 10 10'
          xmlns='http://www.w3.org/2000/svg'
          {...shapeVariations}
          animate='visible'
          initial='hidden'
        >
          <g
            id='col2'
            data-name='Homepage column 2 icon'
          >
            <motion.path
              {...mainPathVariant}
              d='M18 15c-0.183 0-0.358 0.022-0.532 0.054L8.946 6.532C8.978 6.359 9 6.182 9
                6c0-1.654-1.346-3-3-3S3 4.346 3 6 c0 1.302 0.839 2.401 2 2.815v6.369C3.839 15.599
                3 16.698 3 18c0 1.654 1.346 3 3 3c1.302 0 2.401-0.838 2.815-2h6.369 c0.414 1.162
                1.514 2 2.815 2c1.654 0 3-1.346 3-3S19.654 15 18 15z M7 15.184V8.816c0.329-0.118
                0.629-0.291 0.894-0.508 l7.799,7.799c-0.218 0.265-0.391 0.564-0.508 0.894H8.815C8.514
                16.153 7.848 15.486 7 15.184z M6 5c0.552 0 1 0.449 1 1 S6.552 7 6 7S5 6.551 5 6S5.448
                5 6 5z M6 19c-0.552 0-1-0.449-1-1s0.448-1 1-1s1 0.449 1 1S6.552 19 6 19z M18 19
                c-0.552 0-1-0.449-1-1s0.448-1 1-1s1 0.449 1 1S18.552 19 18 19z'
              fill={color1}
              stroke={color3}
              strokeWidth='0.1'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
          </g>
        </motion.svg>
      </div>
    </motion.div>
  )
};

export default Col2;
