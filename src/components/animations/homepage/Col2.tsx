import {
  motion,
  AnimationProps
} from 'framer-motion';

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
          width='100'
          height='100'
          viewBox='0 0 100 100'
          fill='none'
          {...shapeVariations}
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='col2' data-name='Homepage column 2 icon'>
            <motion.path
              {...mainPathVariant}
              d='M22 33L50 50L78 67'
              stroke='white'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M78 33L50 50L22 67'
              stroke='white'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M23 69H50H77'
              stroke='white'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M20 66L20 50L20 34'
              stroke='white'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M80 66L80 50L80 34'
              stroke='white'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M23 31H50H77'
              stroke='white'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.ellipse
              {...shapeVariations}
              cx='20'
              cy='69'
              rx='3'
              ry='3'
              transform='rotate(-180 20 69)'
              stroke='white'
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
              }}
              initial={{ y: 60, opacity: 0 }}
            />
            <motion.ellipse
              {...shapeVariations}
              cx='80'
              cy='69'
              rx='3'
              ry='3'
              transform='rotate(-180 80 69)'
              stroke='white'
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
              }}
              initial={{ y: 60, opacity: 0 }}
            />
            <motion.ellipse
              {...shapeVariations}
              cx='20'
              cy='31'
              rx='3'
              ry='3'
              transform='rotate(-180 20 31)'
              stroke='white'
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
              }}
              initial={{ y: 60, opacity: 0 }}
            />
            <motion.ellipse
              {...shapeVariations}
              cx='80'
              cy='31'
              rx='3'
              ry='3'
              transform='rotate(-180 80 31)'
              stroke='white'
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
              }}
              initial={{ y: 60, opacity: 0 }}
            />
          </g>
        </motion.svg>
      </div>
    </motion.div>
  )
};

export default Col2;
