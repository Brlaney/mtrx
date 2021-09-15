import { motion, AnimationProps } from 'framer-motion';

const color1 = '#4E4E4E';
const color2 = '#888888';
const color3 = '#C4C4C4';
const color4 = '#CADEFC';
const color5 = '#252323';

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

const Truss = () => {
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
          width='409'
          height='211'
          viewBox='0 0 409 211'
          fill='none'
        >
          <g
            id='truss_system'
            data-name='Truss system 1'
          >
            <motion.line
              id='m16'
              data-name='Path 27'
              x1='20'
              y1='163.5'
              x2='53'
              y2='163.5'
              stroke={color1}
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.line
              {...mainPathVariant}
              id='element'
              data-name='Path 1'
              x1='355'
              y1='162.5'
              x2='388'
              y2='162.5'
              stroke={color1}
              stroke-width='0.5'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='member1'
              data-name='Path 21'
              d='M40 145.85L120.5 83.9251L201 22'
              stroke='#252323'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='member2'
              data-name='Path 24'
              d='M207 21L287.5 21L368 21'
              stroke='#252323'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='member3'
              data-name='Path 17'
              d='M371 145V84.5V24'
              stroke='#252323'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='member4'
              data-name='Path 19'
              d='M207 148H287.5H368'
              stroke='#252323'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='member5'
              data-name='Path 20'
              d='M40 148H120.5H201'
              stroke='#252323'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='member6'
              data-name='Path 22'
              d='M204 144V84V24'
              stroke='#252323'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='member7'
              data-name='Path 18'
              d='M206 145.85L287 83.9251L368 22'
              stroke='#252323'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='member8'
              data-name='Path 23'
              d='M207 22L287.556 83.9251L368.112 145.85'
              stroke='#252323'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='support1'
              data-name='Path 25'
              d='M30.2883 162.875L37 151.25L43.7117 162.875H30.2883Z'
              fill='#CADEFC'
              stroke='black'
              stroke-width='0.25'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='support2'
              data-name='Path 16'
              d='M366.043 157.375L371 150.219L375.957 157.375H366.043Z'
              fill='#CADEFC'
              stroke='black'
              stroke-width='0.25'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.circle
              id='support1'
              data-name='Path 3'
              cx='366'
              cy='160'
              r='1.75'
              {...shapeVariations}
              fill={color4}
              stroke={color5}
              stroke-width='0.25'
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              id='supoort2'
              data-name='Path 2'
              cx='376'
              cy='160'
              r='1.75'
              {...shapeVariations}
              transform='rotate(-180 284 55)'
              fill={color4}
              stroke={color5}
              stroke-width='0.25'
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.2,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              id='supoort2'
              data-name='Path 2'
              cx='371'
              cy='160'
              r='1.75'
              {...shapeVariations}
              transform='rotate(-180 284 55)'
              fill={color4}
              stroke={color5}
              stroke-width='0.25'
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.2,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              id='node1'
              data-name='Path 2'
              cx='204'
              cy='147.5'
              r='3.5'
              {...shapeVariations}
              stroke='black'
              transform='rotate(-180 284 55)'
              fill={color4}
              stroke-width='0.5'
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.2,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              id='node2'
              data-name='Path 2'
              cx='371'
              cy='147.5'
              r='3.5'
              {...shapeVariations}
              fill='#CADEFC'
              stroke='black'
              transform='rotate(-180 284 55)'
              stroke-width='0.5'
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.2,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              id='node3'
              data-name='Path 2'
              cx='371'
              cy='20.5'
              r='3.5'
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
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              id='node4'
              data-name='Path 2'
              cx='204'
              cy='20.5'
              r='3.5'
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
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              id='node5'
              data-name='Path 2'
              cx='37'
              cy='147.5'
              r='3.5'
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
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.path
              id='m17'
              data-name='Path 28'
              d='M27 164L22 170'
              stroke='#888888'
              stroke-width='0.5'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='m20'
              data-name='Path 31'
              d='M34 164L29 170'
              stroke='#888888'
              stroke-width='0.5'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='m19'
              data-name='Path 30'
              d='M41 164L36 170'
              stroke='#888888'
              stroke-width='0.5'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='m18'
              data-name='Path 29'
              d='M48 164L43 170'
              stroke='#888888'
              stroke-width='0.5'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='m17'
              data-name='Path 32'
              d='M362 163L357 169'
              stroke='#888888'
              stroke-width='0.5'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='m18'
              data-name='Path 33'
              d='M369 163L364 169'
              stroke='#888888'
              stroke-width='0.5'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='m19'
              data-name='Path 34'
              d='M376 163L371 169'
              stroke='#888888'
              stroke-width='0.5'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='m20'
              data-name='Path 35'
              d='M383 163L378 169'
              stroke='#888888'
              stroke-width='0.5'
              fill={color2}
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

export default Truss;
