import { motion } from 'framer-motion'
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs'


const Increasing = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg
        width='386'
        height='121'
        viewBox='0 0 386 121'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='Increasing' data-name='Increasing'>
          <motion.path
            {...mainPathVariant}
            d='M86 52L195 52L304 52'
            stroke='#252323'
            {...shapeVariations}
            animate='visible'
            initial='hidden'
          />
          <motion.circle
            cx='82'
            cy='52'
            r='4'
            transform='rotate(-180 82 52)'
            fill='#CADEFC'
            stroke='black'
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
            }}
            initial={{ y: 60, opacity: 0, }}
          />
          <motion.circle
            cx='308'
            cy='52'
            r='4'
            transform='rotate(-180 308 52)'
            fill='#CADEFC'
            stroke='black'
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
            }}
            initial={{ y: 60, opacity: 0, }}
          />
          <motion.path
            {...shapeVariations}
            d='M82 64L79.1132 69H84.8868L82 64ZM82.5 94V68.5H81.5V94H82.5Z'
            fill='#4E4E4E'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M95.8409 89C95.7023 89 95.5903 88.968 95.5049 88.904C95.4196 88.84 95.3503 88.744 95.2969 88.616L91.5849 78.296C91.5636 78.232 91.5529 78.1733 91.5529 78.12C91.5529 78.0347 91.5849 77.96 91.6489 77.896C91.7129 77.832 91.7876 77.8 91.8729 77.8H92.2089C92.3156 77.8 92.3956 77.832 92.4489 77.896C92.5129 77.9493 92.5503 77.9973 92.5609 78.04L96.0649 87.832L99.5689 78.04C99.5903 77.9973 99.6276 77.9493 99.6809 77.896C99.7343 77.832 99.8143 77.8 99.9209 77.8H100.257C100.342 77.8 100.417 77.832 100.481 77.896C100.545 77.96 100.577 78.0347 100.577 78.12C100.577 78.1733 100.566 78.232 100.545 78.296L96.8329 88.616C96.7903 88.744 96.7263 88.84 96.6409 88.904C96.5556 88.968 96.4383 89 96.2889 89H95.8409ZM103.5 91.72C103.265 91.72 103.148 91.6027 103.148 91.368V87.352L102.14 88.104C102.065 88.1573 101.98 88.1787 101.884 88.168C101.788 88.1573 101.708 88.1093 101.644 88.024L101.532 87.864C101.468 87.7787 101.441 87.6933 101.452 87.608C101.473 87.512 101.521 87.432 101.596 87.368L103.132 86.232C103.239 86.1573 103.361 86.12 103.5 86.12H103.724C103.959 86.12 104.076 86.2373 104.076 86.472V91.368C104.076 91.6027 103.959 91.72 103.724 91.72H103.5Z'
            fill='#4E4E4E'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M34.6923 53C34.5856 53 34.495 52.968 34.4203 52.904C34.3563 52.84 34.3243 52.7547 34.3243 52.648V42.168C34.3243 42.0507 34.3563 41.96 34.4203 41.896C34.495 41.832 34.5856 41.8 34.6923 41.8H35.0923C35.199 41.8 35.279 41.8267 35.3323 41.88C35.3856 41.9333 35.4176 41.976 35.4283 42.008L39.0603 49.08L42.7083 42.008C42.7296 41.976 42.7616 41.9333 42.8043 41.88C42.8576 41.8267 42.9376 41.8 43.0443 41.8H43.4283C43.5456 41.8 43.6363 41.832 43.7003 41.896C43.7643 41.96 43.7963 42.0507 43.7963 42.168V52.648C43.7963 52.7547 43.7643 52.84 43.7003 52.904C43.6363 52.968 43.5456 53 43.4283 53H43.1403C43.0336 53 42.9483 52.968 42.8843 52.904C42.8203 52.84 42.7883 52.7547 42.7883 52.648V43.976L39.7323 49.992C39.6896 50.0987 39.6256 50.1787 39.5403 50.232C39.4656 50.2853 39.3643 50.312 39.2363 50.312H38.8843C38.7563 50.312 38.655 50.2853 38.5803 50.232C38.5056 50.1787 38.4416 50.0987 38.3883 49.992L35.3323 43.976V52.648C35.3323 52.7547 35.3003 52.84 35.2363 52.904C35.1723 52.968 35.087 53 34.9803 53H34.6923ZM47.6407 55.72C47.406 55.72 47.2887 55.6027 47.2887 55.368V51.352L46.2807 52.104C46.206 52.1573 46.1207 52.1787 46.0247 52.168C45.9287 52.1573 45.8487 52.1093 45.7847 52.024L45.6727 51.864C45.6087 51.7787 45.582 51.6933 45.5927 51.608C45.614 51.512 45.662 51.432 45.7367 51.368L47.2727 50.232C47.3794 50.1573 47.502 50.12 47.6407 50.12H47.8647C48.0994 50.12 48.2167 50.2373 48.2167 50.472V55.368C48.2167 55.6027 48.0994 55.72 47.8647 55.72H47.6407Z'
            fill='#4E4E4E'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M344.95 55C344.843 55 344.753 54.968 344.678 54.904C344.614 54.84 344.582 54.7547 344.582 54.648V44.168C344.582 44.0507 344.614 43.96 344.678 43.896C344.753 43.832 344.843 43.8 344.95 43.8H345.35C345.457 43.8 345.537 43.8267 345.59 43.88C345.643 43.9333 345.675 43.976 345.686 44.008L349.318 51.08L352.966 44.008C352.987 43.976 353.019 43.9333 353.062 43.88C353.115 43.8267 353.195 43.8 353.302 43.8H353.686C353.803 43.8 353.894 43.832 353.958 43.896C354.022 43.96 354.054 44.0507 354.054 44.168V54.648C354.054 54.7547 354.022 54.84 353.958 54.904C353.894 54.968 353.803 55 353.686 55H353.398C353.291 55 353.206 54.968 353.142 54.904C353.078 54.84 353.046 54.7547 353.046 54.648V45.976L349.99 51.992C349.947 52.0987 349.883 52.1787 349.798 52.232C349.723 52.2853 349.622 52.312 349.494 52.312H349.142C349.014 52.312 348.913 52.2853 348.838 52.232C348.763 52.1787 348.699 52.0987 348.646 51.992L345.59 45.976V54.648C345.59 54.7547 345.558 54.84 345.494 54.904C345.43 54.968 345.345 55 345.238 55H344.95ZM356.411 57.72C356.176 57.72 356.059 57.6027 356.059 57.368V57.096C356.059 57.0107 356.085 56.9253 356.139 56.84C356.192 56.7653 356.293 56.6747 356.443 56.568C357.125 56.0773 357.669 55.6827 358.075 55.384C358.491 55.096 358.789 54.8347 358.971 54.6C359.163 54.3653 359.259 54.104 359.259 53.816C359.259 53.5387 359.152 53.32 358.939 53.16C358.736 53 358.496 52.92 358.219 52.92C357.931 52.92 357.712 52.968 357.562 53.064C357.424 53.1493 357.323 53.2453 357.259 53.352C357.205 53.4587 357.163 53.544 357.131 53.608C357.067 53.7253 357.008 53.8053 356.955 53.848C356.901 53.88 356.832 53.896 356.747 53.896H356.507C356.293 53.896 356.197 53.7947 356.219 53.592C356.24 53.336 356.341 53.0907 356.523 52.856C356.704 52.6213 356.944 52.4293 357.243 52.28C357.541 52.12 357.867 52.04 358.219 52.04C358.827 52.04 359.307 52.2213 359.659 52.584C360.011 52.936 360.187 53.3467 360.187 53.816C360.187 54.2107 360.101 54.5573 359.931 54.856C359.76 55.144 359.488 55.4373 359.115 55.736C358.741 56.0453 358.251 56.408 357.643 56.824H360.075C360.309 56.824 360.427 56.9413 360.427 57.176V57.368C360.427 57.6027 360.309 57.72 360.075 57.72H356.411Z'
            fill='#4E4E4E'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M308 64L305.113 69H310.887L308 64ZM308.5 94V68.5H307.5V94H308.5Z'
            fill='#4E4E4E'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M288.099 89C287.96 89 287.848 88.968 287.763 88.904C287.677 88.84 287.608 88.744 287.555 88.616L283.843 78.296C283.821 78.232 283.811 78.1733 283.811 78.12C283.811 78.0347 283.843 77.96 283.907 77.896C283.971 77.832 284.045 77.8 284.131 77.8H284.467C284.573 77.8 284.653 77.832 284.707 77.896C284.771 77.9493 284.808 77.9973 284.819 78.04L288.323 87.832L291.827 78.04C291.848 77.9973 291.885 77.9493 291.939 77.896C291.992 77.832 292.072 77.8 292.179 77.8H292.515C292.6 77.8 292.675 77.832 292.739 77.896C292.803 77.96 292.835 78.0347 292.835 78.12C292.835 78.1733 292.824 78.232 292.803 78.296L289.091 88.616C289.048 88.744 288.984 88.84 288.899 88.904C288.813 88.968 288.696 89 288.547 89H288.099ZM294.27 91.72C294.035 91.72 293.918 91.6027 293.918 91.368V91.096C293.918 91.0107 293.945 90.9253 293.998 90.84C294.051 90.7653 294.153 90.6747 294.302 90.568C294.985 90.0773 295.529 89.6827 295.934 89.384C296.35 89.096 296.649 88.8347 296.83 88.6C297.022 88.3653 297.118 88.104 297.118 87.816C297.118 87.5387 297.011 87.32 296.798 87.16C296.595 87 296.355 86.92 296.078 86.92C295.79 86.92 295.571 86.968 295.422 87.064C295.283 87.1493 295.182 87.2453 295.118 87.352C295.065 87.4587 295.022 87.544 294.99 87.608C294.926 87.7253 294.867 87.8053 294.814 87.848C294.761 87.88 294.691 87.896 294.606 87.896H294.366C294.153 87.896 294.057 87.7947 294.078 87.592C294.099 87.336 294.201 87.0907 294.382 86.856C294.563 86.6213 294.803 86.4293 295.102 86.28C295.401 86.12 295.726 86.04 296.078 86.04C296.686 86.04 297.166 86.2213 297.518 86.584C297.87 86.936 298.046 87.3467 298.046 87.816C298.046 88.2107 297.961 88.5573 297.79 88.856C297.619 89.144 297.347 89.4373 296.974 89.736C296.601 90.0453 296.11 90.408 295.502 90.824H297.934C298.169 90.824 298.286 90.9413 298.286 91.176V91.368C298.286 91.6027 298.169 91.72 297.934 91.72H294.27Z'
            fill='#4E4E4E'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M190.135 26C190.007 26 189.906 25.9733 189.831 25.92C189.767 25.856 189.719 25.7547 189.687 25.616L187.495 15.312C187.485 15.2693 187.474 15.232 187.463 15.2C187.463 15.1573 187.463 15.1307 187.463 15.12C187.463 15.0347 187.495 14.96 187.559 14.896C187.623 14.832 187.698 14.8 187.783 14.8H188.119C188.322 14.8 188.439 14.88 188.471 15.04L190.343 24.16L192.327 17.648C192.359 17.552 192.413 17.4667 192.487 17.392C192.573 17.3173 192.685 17.28 192.823 17.28H193.175C193.325 17.28 193.437 17.3173 193.511 17.392C193.586 17.4667 193.639 17.552 193.671 17.648L195.655 24.16L197.527 15.04C197.559 14.88 197.677 14.8 197.879 14.8H198.215C198.301 14.8 198.375 14.832 198.439 14.896C198.503 14.96 198.535 15.0347 198.535 15.12C198.535 15.1307 198.53 15.1573 198.519 15.2C198.519 15.232 198.514 15.2693 198.503 15.312L196.311 25.616C196.279 25.7547 196.226 25.856 196.151 25.92C196.087 25.9733 195.991 26 195.863 26H195.623C195.495 26 195.389 25.968 195.303 25.904C195.229 25.84 195.17 25.744 195.127 25.616L192.999 18.864L190.871 25.616C190.829 25.744 190.765 25.84 190.679 25.904C190.605 25.968 190.503 26 190.375 26H190.135Z'
            fill='#4E4E4E'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M190.473 71C190.367 71 190.281 70.968 190.217 70.904C190.153 70.84 190.121 70.7547 190.121 70.648V60.152C190.121 60.0453 190.153 59.96 190.217 59.896C190.281 59.832 190.367 59.8 190.473 59.8H190.777C190.884 59.8 190.969 59.832 191.033 59.896C191.097 59.96 191.129 60.0453 191.129 60.152V70.04H196.649C196.767 70.04 196.857 70.072 196.921 70.136C196.985 70.2 197.017 70.2907 197.017 70.408V70.648C197.017 70.7547 196.985 70.84 196.921 70.904C196.857 70.968 196.767 71 196.649 71H190.473Z'
            fill='#4E4E4E'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M304 13V48H86L304 13Z'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M295 14.4441L295 48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M285 16V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M275 17.5V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M265 19.2677V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M255 21V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M245 22.5V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M235 24V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M225 25.5L225 48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M215 27.5V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M205 29V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M195 30.5V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M185 32V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M175 33.5V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M165 35.5V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M155 37V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M145 38.5V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M135 40V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M125 41.7148V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M115 43.5V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M105 45V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M95 46.5V48'
            stroke='#252323'
            stroke-width='0.5'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M69.6152 37.8347L64.4847 35.1869L64.7568 40.954L69.6152 37.8347ZM66.0024 63.3741C60.2883 62.3005 57.6827 56.9338 57.76 51.2711C57.7984 48.4539 58.508 45.6198 59.7995 43.3119C61.0909 41.0042 62.9463 39.2507 65.2692 38.5241L64.9706 37.5697C62.3432 38.3917 60.3081 40.3554 58.9269 42.8235C57.5458 45.2913 56.8006 48.2916 56.7601 51.2574C56.6795 57.1607 59.4192 63.1547 65.8177 64.3569L66.0024 63.3741Z'
            fill='#4E4E4E'
            animate='visible'
            initial='hidden'
          />
          <motion.path
            {...shapeVariations}
            d='M323.235 63.0308L328.366 65.6787L328.094 59.9116L323.235 63.0308ZM326.848 37.4914C332.562 38.5651 335.168 43.9317 335.091 49.5945C335.052 52.4116 334.343 55.2457 333.051 57.5537C331.76 59.8613 329.904 61.6148 327.582 62.3415L327.88 63.2959C330.508 62.4739 332.543 60.5102 333.924 58.042C335.305 55.5742 336.05 52.574 336.091 49.6081C336.171 43.7049 333.431 37.7109 327.033 36.5086L326.848 37.4914Z'
            fill='#4E4E4E'
            animate='visible'
            initial='hidden'
          />
        </g>
      </svg>
    </motion.div>
  )
}

export default Increasing