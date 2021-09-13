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
          width='2.5rem'
          height='2.5rem'
          viewBox='0 0 512 512'
          fill={color1}
          {...shapeVariations}
          xmlns='http://www.w3.org/2000/svg'
        >
          <g
            id='col3'
            data-name='Homepage column 3 icon'
          >
            <motion.path
              {...mainPathVariant}
              d='M113 41v446h30V41h-30zM95 60.35L18 114.9v22l77-54.5V60.35zm66 0V82.4L483.8 311H494v-14.7L161
                60.35zM95 98.59L18 170.8v24.7l77-72.2V98.59zm66 0v24.71L361.2 311h26.4L161 98.59zm0
                49.81v34.4L239.9 311h21.2L161 148.4zm-66 .1L18 273.6v34.3l77-125.1v-34.3zM18
                329v30h77v-30H18zm143 0v30h333v-30H161z'
              fill={color1}
              stroke={color3}
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

export default Col3;
