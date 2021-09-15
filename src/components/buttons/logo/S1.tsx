import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/bar-deformations';

const wht = '#ffffff';

const colors = [
  '#3D69C2',
  '#3D69C2',
  '#6967BC',
  '#8665B4',
  '#9B65AA',
  '#AA66A0',
  '#B56A97'
];

const S1 = () => {
  console.log(colors);

  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg 
        width='52' 
        height='42' 
        viewBox='0 0 64 64' 
        fill='none'
      >
        <g
          id='s1'
          data-name='s1'
        >
          <motion.path
            {...mainPathVariant}
            d='M4.00006 6.00001C4 2 10.0001 2 10.0001 6.00001C10.0001 10 4 10 4.00006 6.00001Z'
            stroke={wht}
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M14.0001 6.00001C14 2 20.0001 2 20.0001 6.00001C20.0001 10 14 10 14.0001 6.00001Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M24.0001 6.00001C24 2 30.0001 2 30.0001 6.00001C30.0001 10 24 10 24.0001 6.00001Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M34.0001 6.00001C34 2 40.0001 2 40.0001 6.00001C40.0001 10 34 10 34.0001 6.00001Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M4.00006 16C4 12 10.0001 12 10.0001 16C10.0001 20 4 20 4.00006 16Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M14.0001 16C14 12 20.0001 12 20.0001 16C20.0001 20 14 20 14.0001 16Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M24.0001 16C24 12 30.0001 12 30.0001 16C30.0001 20 24 20 24.0001 16Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M34.0001 16C34 12 40.0001 12 40.0001 16C40.0001 20 34 20 34.0001 16Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M4.00006 26C4 22 10.0001 22 10.0001 26C10.0001 30 4 30 4.00006 26Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M14.0001 26C14 22 20.0001 22 20.0001 26C20.0001 30 14 30 14.0001 26Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M24.0001 26C24 22 30.0001 22 30.0001 26C30.0001 30 24 30 24.0001 26Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M34.0001 26C34 22 40.0001 22 40.0001 26C40.0001 30 34 30 34.0001 26Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M4.00006 36C4 32 10.0001 32 10.0001 36C10.0001 40 4 40 4.00006 36Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M14.0001 36C14 32 20.0001 32 20.0001 36C20.0001 40 14 40 14.0001 36Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M24.0001 36C24 32 30.0001 32 30.0001 36C30.0001 40 24 40 24.0001 36Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M34.0001 36C34 32 40.0001 32 40.0001 36C40.0001 40 34 40 34.0001 36Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M4.00006 46C4 42 10.0001 42 10.0001 46C10.0001 50 4 50 4.00006 46Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M14.0001 46C14 42 20.0001 42 20.0001 46C20.0001 50 14 50 14.0001 46Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M24.0001 46C24 42 30.0001 42 30.0001 46C30.0001 50 24 50 24.0001 46Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M34.0001 46C34 42 40.0001 42 40.0001 46C40.0001 50 34 50 34.0001 46Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M4.00006 56C4 52 10.0001 52 10.0001 56C10.0001 60 4 60 4.00006 56Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M14.0001 56C14 52 20.0001 52 20.0001 56C20.0001 60 14 60 14.0001 56Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M24.0001 56C24 52 30.0001 52 30.0001 56C30.0001 60 24 60 24.0001 56Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M34.0001 56C34 52 40.0001 52 40.0001 56C40.0001 60 34 60 34.0001 56Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M44.0001 6.00001C44 2 50.0001 2 50.0001 6.00001C50.0001 10 44 10 44.0001 6.00001Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M54.0001 6.00001C54 2 60.0001 2 60.0001 6.00001C60.0001 10 54 10 54.0001 6.00001Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M44.0001 16C44 12 50.0001 12 50.0001 16C50.0001 20 44 20 44.0001 16Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M54.0001 16C54 12 60.0001 12 60.0001 16C60.0001 20 54 20 54.0001 16Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M44.0001 26C44 22 50.0001 22 50.0001 26C50.0001 30 44 30 44.0001 26Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M54.0001 26C54 22 60.0001 22 60.0001 26C60.0001 30 54 30 54.0001 26Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M44.0001 36C44 32 50.0001 32 50.0001 36C50.0001 40 44 40 44.0001 36Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M54.0001 36C54 32 60.0001 32 60.0001 36C60.0001 40 54 40 54.0001 36Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M44.0001 46C44 42 50.0001 42 50.0001 46C50.0001 50 44 50 44.0001 46Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M54.0001 46C54 42 60.0001 42 60.0001 46C60.0001 50 54 50 54.0001 46Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M44.0001 56C44 52 50.0001 52 50.0001 56C50.0001 60 44 60 44.0001 56Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M54.0001 56C54 52 60.0001 52 60.0001 56C60.0001 60 54 60 54.0001 56Z'
            stroke={wht}
            stroke-width='0.5'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.circle
            cx='7'
            cy='6'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='6'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='6'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='6'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='7'
            cy='16'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='16'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='16'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='16'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='7'
            cy='26'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='26'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='26'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='26'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='7'
            cy='36'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='36'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='36'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='36'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='7'
            cy='46'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='46'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='46'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='46'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='7'
            cy='56'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='17'
            cy='56'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='27'
            cy='56'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='37'
            cy='56'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='6'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='6'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='16'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='16'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='26'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='26'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='36'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='36'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='46'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='46'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='47'
            cy='56'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
            }}
            initial={{ y: 60, opacity: 0 }}
          />
          <motion.circle
            cx='57'
            cy='56'
            r='3'
            fill='#3D69C2'
            {...shapeVariations}
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
