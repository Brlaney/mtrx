import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
  fadeInUp,
  stagger
} from '@/lib/config/animations/columns';

const Col2 = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      variants={stagger}
    >
      <div>
        <svg
          width='100'
          height='100'
          viewBox='0 0 100 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='col2' data-name='Homepage column 2 icon'>
            <motion.path
              {...mainPathVariant}
              d='M52.4 33L72 50L91.6 67'
              stroke='white'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M91.6 33L72 50L52.4 67'
              stroke='white'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M48.6 33L29 50L9.40004 67'
              stroke='white'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M53.1 69H72H90.9'
              stroke='white'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M51 66L51 50L51 34'
              stroke='white'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M93 66L93 50L93 34'
              stroke='white'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M53.1 31H72H90.9'
              stroke='white'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.ellipse
              cx='50.5'
              cy='31.5'
              rx='2.5'
              ry='2.5'
              transform='rotate(-180 50.5 31.5)'
              stroke='white'
              variants={fadeInUp}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
              }}
              initial={{ y: 60, opacity: 0 }}
            />
            <motion.ellipse
              cx='50.5'
              cy='68.5'
              rx='2.5'
              ry='2.5'
              transform='rotate(-180 50.5 68.5)'
              stroke='white'
              variants={fadeInUp}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
              }}
              initial={{ y: 60, opacity: 0 }}
            />
            <motion.ellipse
              cx='93.5'
              cy='31.5'
              rx='2.5'
              ry='2.5'
              transform='rotate(-180 93.5 31.5)'
              stroke='white'
              variants={fadeInUp}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
              }}
              initial={{ y: 60, opacity: 0 }}
            />
            <motion.ellipse
              cx='93.5'
              cy='68.5'
              rx='2.5'
              ry='2.5'
              transform='rotate(-180 93.5 68.5)'
              stroke='white'
              variants={fadeInUp}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
              }}
              initial={{ y: 60, opacity: 0 }}
            />
            <motion.path
              stroke='white'
              {...shapeVariations}
              d='M10.1 69H29H47.9'
              animate='visible'
              initial='hidden'
            />
            <motion.ellipse
              cx='7.5'
              cy='68.5'
              rx='2.5'
              ry='2.5'
              transform='rotate(-180 7.5 68.5)'
              stroke='white'
              variants={fadeInUp}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
              }}
              initial={{ y: 60, opacity: 0 }}
            />
          </g>
        </svg>
      </div>
    </motion.div>
  )
};

export default Col2;
