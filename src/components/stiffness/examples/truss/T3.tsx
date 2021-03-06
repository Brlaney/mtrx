import { motion } from 'framer-motion'
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';

const color1 = '#252323';
const color2 = '#2F2F2F';
const color3 = '#4E4E4E';
const color4 = '#242121';
const color5 = '#CADEFC';
const color6 = 'rgba(37, 35, 35, 0.3)';
const color7 = 'rgba(202, 222, 252, 0.7)';

const T3 = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg
        width='443'
        height='233'
        viewBox='0 0 443 233'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='theta3' data-name='theta3'>
          <motion.path
            {...mainPathVariant}
            d='M272.5 63.5L370 170'
            stroke='#252323'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M271.5 61.5H341.5'
            stroke='#888888'
            {...shapeVariations}
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M316.621 75.8764C316.621 73.9093 316.016 72 314.465 72C311.818 72 309 77.6507 309 81.8936C309 82.7807 309.189 85.77 311.175 85.77C313.747 85.77 316.621 80.2543 316.621 75.8764ZM310.891 78.5957C311.175 77.4579 311.572 75.8379 312.328 74.4686C312.952 73.3114 313.614 72.3857 314.446 72.3857C315.07 72.3857 315.487 72.9257 315.487 74.7771C315.487 75.4714 315.43 76.4357 314.881 78.5957H310.891ZM314.749 79.1743C314.276 81.0643 313.879 82.2793 313.198 83.4943C312.65 84.4779 311.988 85.3843 311.194 85.3843C310.607 85.3843 310.135 84.9214 310.135 83.0122C310.135 81.7586 310.437 80.4472 310.74 79.1743H314.749Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M320.062 84.1757C321.058 84.1757 321.689 84.9214 321.689 86.2714C321.689 87.8786 320.794 88.3543 320.125 88.3543C319.432 88.3543 318.487 88.0971 318.045 87.4157C318.499 87.4157 318.814 87.12 318.814 86.6957C318.814 86.2843 318.524 85.9886 318.121 85.9886C317.78 85.9886 317.427 86.2071 317.427 86.7214C317.427 87.9429 318.713 88.74 320.151 88.74C321.827 88.74 323 87.5571 323 86.2714C323 85.2043 322.168 84.2271 320.882 83.9443C321.878 83.5843 322.622 82.71 322.622 81.6814C322.622 80.6528 321.487 79.92 320.176 79.92C318.827 79.92 317.806 80.6657 317.806 81.6428C317.806 82.1186 318.121 82.3243 318.449 82.3243C318.84 82.3243 319.092 82.0414 319.092 81.6686C319.092 81.1928 318.688 81.0128 318.411 81C318.94 80.2928 319.911 80.2543 320.138 80.2543C320.466 80.2543 321.424 80.3571 321.424 81.6814C321.424 82.5814 321.058 83.1214 320.882 83.3271C320.504 83.7257 320.214 83.7514 319.445 83.8028C319.205 83.8157 319.104 83.8286 319.104 83.9957C319.104 84.1757 319.218 84.1757 319.432 84.1757H320.062Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M293 84.5L294.509 80.4414L297.269 83.7778L293 84.5ZM307 62L309.087 65.794L304.758 65.7044L307 62ZM295.364 82.0576C300.833 77.6266 305.824 73.7236 306.557 65.3431L307.304 65.4084C306.54 74.1422 301.284 78.2268 295.836 82.6403L295.364 82.0576Z'
            fill='#4E4E4E'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.circle
            cx='387'
            cy='190'
            r='13.25'
            fill={color7}
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
            cx='255'
            cy='42'
            r='13.25'
            fill={color7}
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
            cx='371.5'
            cy='171.5'
            r='2.75'
            fill='#CADEFC'
            stroke='black'
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
            cx='271.5'
            cy='61.5'
            r='2.75'
            fill='#CADEFC'
            stroke='black'
            stroke-width='0.5'
            {...shapeVariations}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
            }}
            initial={{ y: 60, opacity: 0, }}
          />
          <motion.path
            d='M254.106 47C254.013 47 253.934 46.972 253.868 46.916C253.812 46.8507 253.784 46.7713 253.784 46.678V38.838L251.46 40.63C251.395 40.686 251.325 40.714 251.25 40.714C251.166 40.714 251.087 40.6673 251.012 40.574L250.648 40.112C250.602 40.0467 250.578 39.9813 250.578 39.916C250.578 39.804 250.625 39.7153 250.718 39.65L253.77 37.298C253.873 37.2327 253.994 37.2 254.134 37.2H254.848C254.942 37.2 255.016 37.2327 255.072 37.298C255.138 37.354 255.17 37.4287 255.17 37.522V46.678C255.17 46.7713 255.138 46.8507 255.072 46.916C255.016 46.972 254.942 47 254.848 47H254.106ZM257.49 47C257.397 47 257.318 46.972 257.252 46.916C257.196 46.8507 257.168 46.7713 257.168 46.678V45.67C257.168 45.5767 257.196 45.502 257.252 45.446C257.318 45.3807 257.397 45.348 257.49 45.348H258.498C258.592 45.348 258.671 45.3807 258.736 45.446C258.802 45.502 258.834 45.5767 258.834 45.67V46.678C258.834 46.7713 258.802 46.8507 258.736 46.916C258.671 46.972 258.592 47 258.498 47H257.49Z'
            fill={color3}
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.path
            d='M383.136 195C383.043 195 382.963 194.972 382.898 194.916C382.842 194.851 382.814 194.771 382.814 194.678V194.23C382.814 194.015 382.931 193.81 383.164 193.614L386.132 190.646C386.851 190.049 387.345 189.563 387.616 189.19C387.887 188.807 388.022 188.406 388.022 187.986C388.022 187.445 387.868 187.02 387.56 186.712C387.261 186.404 386.823 186.25 386.244 186.25C385.703 186.25 385.269 186.413 384.942 186.74C384.615 187.057 384.415 187.482 384.34 188.014C384.321 188.126 384.275 188.21 384.2 188.266C384.135 188.313 384.06 188.336 383.976 188.336H383.248C383.164 188.336 383.094 188.313 383.038 188.266C382.982 188.21 382.954 188.145 382.954 188.07C382.973 187.566 383.108 187.085 383.36 186.628C383.612 186.161 383.981 185.783 384.466 185.494C384.961 185.195 385.553 185.046 386.244 185.046C387.299 185.046 388.092 185.321 388.624 185.872C389.165 186.413 389.436 187.104 389.436 187.944C389.436 188.532 389.287 189.064 388.988 189.54C388.699 190.007 388.246 190.511 387.63 191.052L384.942 193.782H389.31C389.413 193.782 389.492 193.815 389.548 193.88C389.613 193.936 389.646 194.011 389.646 194.104V194.678C389.646 194.771 389.613 194.851 389.548 194.916C389.483 194.972 389.403 195 389.31 195H383.136ZM391.605 195C391.511 195 391.432 194.972 391.367 194.916C391.311 194.851 391.283 194.771 391.283 194.678V193.67C391.283 193.577 391.311 193.502 391.367 193.446C391.432 193.381 391.511 193.348 391.605 193.348H392.613C392.706 193.348 392.785 193.381 392.851 193.446C392.916 193.502 392.949 193.577 392.949 193.67V194.678C392.949 194.771 392.916 194.851 392.851 194.916C392.785 194.972 392.706 195 392.613 195H391.605Z'
            fill={color3}
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
        </g>
      </svg>
    </motion.div>
  )
};

export default T3;
