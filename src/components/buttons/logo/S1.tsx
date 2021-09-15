import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
  fadeInUp,
  stagger,
} from '@/lib/config/animations/svgs/svgs';

const wht = '#ffffff';
const blck = '#000000';
const color1 = '#3D69C2';

const colors = [
  '#3D69C2',
  '#3D69C2',
  '#6967BC',
  '#8665B4',
  '#9B65AA',
  '#AA66A0',
  '#B56A97',
]

const S1 = () => {
  // console.log(colors);

  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      variants={stagger}
    >
      <svg
        width='50'
        height='50'
        viewBox='0 0 63 63'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='site-logo' data-name='site-logo'>
          <motion.path
            {...mainPathVariant}
            d='M4.00006 13C4 9 10.0001 9 10.0001 13C10.0001 17 4 17 4.00006 13Z'
            stroke={blck}
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M14.0001 13C14 9 20.0001 9 20.0001 13C20.0001 17 14 17 14.0001 13Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M24.0001 13C24 9 30.0001 9 30.0001 13C30.0001 17 24 17 24.0001 13Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M34.0001 13C34 9 40.0001 9 40.0001 13C40.0001 17 34 17 34.0001 13Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M4.00006 20C4 16 10.0001 16 10.0001 20C10.0001 24 4 24 4.00006 20Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M14.0001 20C14 16 20.0001 16 20.0001 20C20.0001 24 14 24 14.0001 20Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M24.0001 20C24 16 30.0001 16 30.0001 20C30.0001 24 24 24 24.0001 20Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M34.0001 20C34 16 40.0001 16 40.0001 20C40.0001 24 34 24 34.0001 20Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M4.00006 27C4 23 10.0001 23 10.0001 27C10.0001 31 4 31 4.00006 27Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M14.0001 27C14 23 20.0001 23 20.0001 27C20.0001 31 14 31 14.0001 27Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M24.0001 27C24 23 30.0001 23 30.0001 27C30.0001 31 24 31 24.0001 27Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M34.0001 27C34 23 40.0001 23 40.0001 27C40.0001 31 34 31 34.0001 27Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M4.00006 34C4 30 10.0001 30 10.0001 34C10.0001 38 4 38 4.00006 34Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M14.0001 34C14 30 20.0001 30 20.0001 34C20.0001 38 14 38 14.0001 34Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M24.0001 34C24 30 30.0001 30 30.0001 34C30.0001 38 24 38 24.0001 34Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M34.0001 34C34 30 40.0001 30 40.0001 34C40.0001 38 34 38 34.0001 34Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M4.00006 41C4 37 10.0001 37 10.0001 41C10.0001 45 4 45 4.00006 41Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M14.0001 41C14 37 20.0001 37 20.0001 41C20.0001 45 14 45 14.0001 41Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M24.0001 41C24 37 30.0001 37 30.0001 41C30.0001 45 24 45 24.0001 41Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M34.0001 41C34 37 40.0001 37 40.0001 41C40.0001 45 34 45 34.0001 41Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M4.00006 48C4 44 10.0001 44 10.0001 48C10.0001 52 4 52 4.00006 48Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M14.0001 48C14 44 20.0001 44 20.0001 48C20.0001 52 14 52 14.0001 48Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M24.0001 48C24 44 30.0001 44 30.0001 48C30.0001 52 24 52 24.0001 48Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M34.0001 48C34 44 40.0001 44 40.0001 48C40.0001 52 34 52 34.0001 48Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M44.0001 13C44 9 50.0001 9 50.0001 13C50.0001 17 44 17 44.0001 13Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M54.0001 13C54 9 60.0001 9 60.0001 13C60.0001 17 54 17 54.0001 13Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M44.0001 20C44 16 50.0001 16 50.0001 20C50.0001 24 44 24 44.0001 20Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M54.0001 20C54 16 60.0001 16 60.0001 20C60.0001 24 54 24 54.0001 20Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M44.0001 27C44 23 50.0001 23 50.0001 27C50.0001 31 44 31 44.0001 27Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M54.0001 27C54 23 60.0001 23 60.0001 27C60.0001 31 54 31 54.0001 27Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M44.0001 34C44 30 50.0001 30 50.0001 34C50.0001 38 44 38 44.0001 34Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M54.0001 34C54 30 60.0001 30 60.0001 34C60.0001 38 54 38 54.0001 34Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M44.0001 41C44 37 50.0001 37 50.0001 41C50.0001 45 44 45 44.0001 41Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M54.0001 41C54 37 60.0001 37 60.0001 41C60.0001 45 54 45 54.0001 41Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M44.0001 48C44 44 50.0001 44 50.0001 48C50.0001 52 44 52 44.0001 48Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M54.0001 48C54 44 60.0001 44 60.0001 48C60.0001 52 54 52 54.0001 48Z'
            stroke={blck}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.circle
            cx='7'
            cy='13'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='7'
            cy='41'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='7'
            cy='20'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='7'
            cy='27'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='7'
            cy='48'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='7'
            cy='34'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='13'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='20'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='27'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='34'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='41'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='48'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='13'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='20'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='27'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='34'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='41'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='48'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='13'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='20'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='27'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='34'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='41'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='48'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='13'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='20'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='27'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='34'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='41'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='48'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='13'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='20'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='27'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='34'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='41'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='48'
            r='3'
            fill={color1}
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='7'
            cy='13'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='7'
            cy='20'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='7'
            cy='27'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='7'
            cy='34'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='7'
            cy='41'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='7'
            cy='48'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='13'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='20'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='27'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='34'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='41'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='48'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='13'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='20'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='27'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='34'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='41'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='48'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='13'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='20'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='27'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='34'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='41'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='48'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='13'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='20'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='27'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='34'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='41'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='48'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='13'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='20'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='27'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='34'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='41'
            r='1'
            fill='white'
            variants={fadeInUp}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='48'
            r='1'
            fill='white'
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
    </motion.div>
  )
};

export default S1;
