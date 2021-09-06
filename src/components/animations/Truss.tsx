import { motion, AnimationProps } from 'framer-motion'

const color1 = '#4E4E4E'
const color2 = '#888888'
const color3 = '#C4C4C4'
const color4 = '#CADEFC'
const color5 = '#252323'
const color6 = '#D1D1D1'

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
            <motion.path
              {...mainPathVariant}
              id='element'
              data-name='Path 1'
              d="M355 176H388V163H355V176Z"
              // fill="url(#paint0_linear)"
              fill={color5}
              stroke={color5}
              stroke-width='0.5'
              animate='visible'
              initial='hidden'
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 1.1 }}
            />
            <motion.line
              {...mainPathVariant}
              id='element'
              data-name='Path 1'
              x1="355"
              y1="162.5"
              x2="388"
              y2="162.5"
              // fill={color5}
              stroke={color5}
              stroke-width='0.5'
              animate='visible'
              initial='hidden'
            />
            <motion.circle
              id='support1'
              data-name='Path 3'
              cx="366"
              cy="160"
              r="1.75"
              fill={color4}
              stroke={color5}
              stroke-width='0.5'
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
              cx="376"
              cy="160"
              r="1.75"
              transform='rotate(-180 284 55)'
              fill={color4}
              stroke={color5}
              stroke-width='0.5'
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              id='supoort3'
              data-name='Path 2'
              cx="371"
              cy="160"
              r="1.75"
              transform='rotate(-180 284 55)'
              fill={color4}
              stroke={color5}
              stroke-width='0.5'
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              id='node1'
              data-name='Path 2'
              cx="204"
              cy="147.5"
              r="3.5"
              stroke="black"
              transform='rotate(-180 284 55)'
              fill={color4}
              stroke-width='0.5'
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              id='node2'
              data-name='Path 2'
              cx="371"
              cy="147.5"
              r="3.5"
              fill="#CADEFC"
              stroke="black"
              transform='rotate(-180 284 55)'
              stroke-width='0.5'
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              id='node3'
              data-name='Path 2'
              cx="371"
              cy="20.5"
              r="3.5"
              fill="#CADEFC"
              stroke="black"
              stroke-width='0.5'
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              id='node4'
              data-name='Path 2'
              cx="204"
              cy="20.5"
              r="3.5"
              fill="#CADEFC"
              stroke="black"
              stroke-width='0.5'
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              id='node5'
              data-name='Path 2'
              cx="37"
              cy="147.5"
              r="3.5"
              fill="#CADEFC"
              stroke="black"
              stroke-width='0.5'
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.path
              id='m1'
              data-name='Path 12'
              d="M362 163L356 169"
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='m2'
              data-name='Path 13'
              d="M385 163L379 169"
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='m3'
              data-name='Path 14'
              d="M377 163L371 169"
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='m4'
              data-name='Path 15'
              d="M369 163L363 169"
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx1_vector'
              data-name='Path 16'

              stroke={color5}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx2_vector'
              data-name='Path 17'

              stroke={color5}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx3_vector'
              data-name='Path 18'

              stroke={color5}
              stroke-width='0.5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              id='Fx4_vector'
              data-name='Path 19'

              stroke={color5}
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
}

export default Truss
