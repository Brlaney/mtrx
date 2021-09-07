import { motion, AnimationProps } from 'framer-motion';

const color1 = '#4E4E4E';
const color2 = '#888888';
const color3 = '#C4C4C4';
const color4 = '#CADEFC';
// const color5 = '#252323';
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

const Beam = () => {
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
          width='446'
          height='108'
          viewBox='0 0 446 108'
          fill='none'
        >
          <g
            id='beam_system'
            data-name='Truss system 1'
          >
            <motion.path
              {...mainPathVariant}
              id='member1'
              data-name='Path 27'
              d='M200 57H418'
              stroke={color6}
              stroke-width='1'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...mainPathVariant}
              id='member2'
              data-name='Path 1'
              d='M27 57L192 57'
              stroke={color6}
              stroke-width='1'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.line
              id='ground_support1'
              data-name='groundline1'
              x1='6'
              y1='73.5'
              x2='39'
              y2='73.5'
              stroke={color1}
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.line
              id='ground_support2'
              data-name='groundline2'
              x1='179'
              y1='73.5'
              x2='212'
              y2='73.5'
              stroke={color1}
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.line
              id='ground_support3'
              data-name='groundline3'
              x1='406'
              y1='73.5'
              x2='439'
              y2='73.5'
              stroke='#4E4E4E'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='member6'
              data-name='Path 22'
              d='M186 74L180 80'
              stroke={color2}
              stroke-width='0.5'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='member7'
              data-name='Path 18'
              d='M209 74L203 80'
              stroke={color2}
              stroke-width='0.5'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='member8'
              data-name='Path 23'
              d='M201 74L195 80'
              stroke={color2}
              stroke-width='0.5'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='support1'
              data-name='Path 25'
              d='M193 74L187 80'
              stroke={color2}
              stroke-width='0.5'
              fill={color4}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='support2'
              data-name='Path 16'
              d='M189.505 72.75L196 61.5L202.495 72.75H189.505Z'
              fill={color4}
              stroke={color6}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='groundangledline41'
              data-name='Path 22'
              d='M417.043 68.375L422 61.2195L426.957 68.375H417.043Z'
              fill={color4}
              stroke={color6}
              stroke-width='0.25'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='groundangledline42'
              data-name='Path 18'
              d='M406 87H439V74H406V87Z'
              fill='url(#paint2_linear)'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='groundangledline43'
              data-name='Path 23'
              d='M413 74L407 80'
              stroke={color2}
              stroke-width='0.5'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='groundangledline44'
              data-name='Path 25'
              d='M436 74L430 80'
              stroke={color2}
              stroke-width='0.5'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='support2'
              data-name='Path 16'
              d='M428 74L422 80'
              stroke='#888888'
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='member6'
              data-name='Path 22'
              d='M420 74L414 80'
              stroke='#888888'
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Support1'
              data-name='support 1'
              d='M16.5048 72.75L23 61.5L29.4952 72.75H16.5048Z'
              fill='#CADEFC'
              stroke='black'
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='groundlineangled12'
              data-name='Ground Line 12'
              d='M13 74L7 80'
              stroke='#888888'
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='groundlineangled13'
              data-name='Ground Line 13'
              d='M36 74L30 80'
              stroke='#888888'
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='groundlineangled14'
              data-name='Ground Line 14'
              d='M28 74L22 80'
              stroke='#888888'
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='groundlineangled15'
              data-name='Ground Line 15'
              d='M20 74L14 80'
              stroke='#888888'
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.circle
              id='node1'
              data-name='Node 1'
              cx='23'
              cy='57'
              r='4'
              transform='rotate(-180 23 57)'
              fill={color4}
              stroke={color6}
              stroke-width='0.5'
              {...shapeVariations}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              id='support3r1'
              data-name='Roller 1'
              cx='417'
              cy='71'
              r='1.75'
              fill={color3}
              stroke='#4E4E4E'
              stroke-width='0.5'
              {...shapeVariations}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              id='supoort3r2'
              data-name='Roller 2'
              cx='422'
              cy='71'
              r='1.75'
              fill={color3}
              stroke='#4E4E4E'
              stroke-width='0.5'
              {...shapeVariations}
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
              id='supoort3r3'
              data-name='Roller 3'
              cx='427'
              cy='71'
              r='1.75'
              fill={color3}
              stroke='#4E4E4E'
              stroke-width='0.5'
              {...shapeVariations}
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
              data-name='Node 2'
              cx='196'
              cy='57'
              r='4'
              transform='rotate(-180 196 57)'
              fill={color4}
              stroke='black'
              stroke-width='0.5'
              {...shapeVariations}
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
              data-name='Node 3'
              cx='422'
              cy='57'
              r='4'
              transform='rotate(-180 422 57)'
              fill={color4}
              stroke='black'
              stroke-width='0.5'
              {...shapeVariations}
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
          </g>
        </svg>
      </div>
    </motion.div>
  )
};

export default Beam;
