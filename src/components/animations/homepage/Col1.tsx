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
          xmlns='http://www.w3.org/2000/svg'
          {...shapeVariations}
          animate='visible'
          initial='hidden'
        >
          <g
            id='col1'
            data-name='Homepage column 1 icon'
          >
            <motion.path
              {...mainPathVariant}
              d='M0 1.5A1.5 1.5 0 011.5 0h13A1.5 1.5 0 0116 1.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010
                14.5v-13zM1.5 1a.5.5 0 00-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4V6h4v4H6zm-1 1H1v3.5a.5.5 0
                00.5.5H5v-4zm1 0h4v4H6v-4zm5 0v4h3.5a.5.5 0 00.5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0
                00-.5-.5H11v4zm-1 0H6V1h4v4z'
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

export default Col1;
