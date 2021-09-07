import { motion, AnimationProps } from 'framer-motion';

const color1 = '#4E4E4E';
const color2 = '#888888';
const color3 = '#C4C4C4';
const color4 = '#CADEFC';
const color5 = '#252323';
const color6 = '#000000';

const mainPathVariant: AnimationProps = {
  transition: { duration: 6, ease: 'easeInOut' },
  variants: { visible: { pathLength: 1 }, hidden: { pathLength: 0, } }
};

const shapeVariations: AnimationProps = {
  transition: { delay: 0, duration: 1, ease: 'easeIn' },
  variants: {
    visible: {
      fillOpacity: 1,
      pathLength: 1,
      transition: { delay: 0, duration: 4 }
    },
    hidden: { fillOpacity: 0, pathLength: 0 }
  }
};

const Frame = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='420'
          height='255'
          viewBox='0 0 420 255'
          fill='none'
        >
          <g
            id='frame_system'
            data-name='Frame system 1'
          >
            <motion.line
              id='elem1'
              data-name='Elem 1'
              {...mainPathVariant}
              x1="350"
              y1="220.5"
              x2="400"
              y2="220.5"
              stroke="#4E4E4E"
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.line
              id='elem1'
              data-name='Elem 1'
              {...mainPathVariant}
              x1="186"
              y1="220.5"
              x2="236"
              y2="220.5"
              stroke="#4E4E4E"
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.line
              id='elem1'
              data-name='Elem 1'
              {...mainPathVariant}
              x1="23"
              y1="220.5"
              x2="73"
              y2="220.5"
              stroke="#4E4E4E"
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.circle
              id='elem1'
              data-name='Elem 1'
              cx="374.5"
              cy="32.5"
              r="3.5"
              transform="rotate(-180 374.5 32.5)"
              {...shapeVariations}
              fill='#CADEFC'
              stroke='black'
              stroke-width='0.5'
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.2,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
              initial={{ y: 600, opacity: 0, }}
            />
            <motion.circle
              id='elem1'
              data-name='Elem 1'
              cx="210.5"
              cy="32.5"
              r="3.5"
              transform="rotate(-180 210.5 32.5)"
              {...shapeVariations}
              fill='#CADEFC'
              stroke='black'
              stroke-width='0.5'
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.2,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
              initial={{ y: 600, opacity: 0, }}
            />
            <motion.circle
              id='elem1'
              data-name='Elem 1'
              cx="46.5"
              cy="32.5"
              r="3.5"
              transform="rotate(-180 46.5 32.5)"
              {...shapeVariations}
              fill='#CADEFC'
              stroke='black'
              stroke-width='0.5'
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.2,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
              initial={{ y: 600, opacity: 0, }}
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M374.5 36V220"
              stroke={color6}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M50 33H128.5H207"
              stroke={color6}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M210.5 36V220"
              stroke={color6}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M46.5 36V220"
              stroke={color6}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M214 33H292.5H371"
              stroke={color6}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M365 221L359 227"
              stroke="#888888"
              stroke-width="0.5"
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M388 221L382 227"
              stroke="#888888"
              stroke-width="0.5"
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M380 221L374 227"
              stroke="#888888"
              stroke-width="0.5"
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M372 221L366 227"
              stroke="#888888"
              stroke-width="0.5"
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M201 221L195 227"
              stroke="#888888"
              stroke-width="0.5"
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M224 221L218 227"
              stroke="#888888"
              stroke-width="0.5"
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M216 221L210 227"
              stroke="#888888"
              stroke-width="0.5"
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M208 221L202 227"
              stroke="#888888"
              stroke-width="0.5"
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M37 221L31 227"
              stroke="#888888"
              stroke-width="0.5"
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M60 221L54 227"
              stroke="#888888"
              stroke-width="0.5"
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M52 221L46 227"
              stroke="#888888"
              stroke-width="0.5"
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='elem2'
              data-name='Elem 2'
              d="M44 221L38 227"
              stroke="#888888"
              stroke-width="0.5"
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

export default Frame;
