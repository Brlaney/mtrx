import { motion, AnimationProps } from 'framer-motion';
import { cp } from 'fs';

const color1 = '#252323';
const color2 = '#2F2F2F';
const color3 = '#4E4E4E';
const color4 = '#242121';
const color5 = '#CADEFC';

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

const F_11 = () => {
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
          width='388'
          height='116'
          viewBox='0 0 388 116'
          fill='none'
        >
          <g
            id='bar_element_11'
            data-name='Bar element deformation 1'
          >
            <motion.path
              {...mainPathVariant}
              d='M82 54H93H104'
              stroke={color1}
              stroke-opacity='0.3'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M112 54L206 54L300 54'
              stroke={color1}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.circle
              cx='78'
              cy='54'
              r='4'
              transform='rotate(-180 78 54)'
              fill={color5}
              fill-opacity='0.7'
              stroke={color4}
              stroke-opacity='0.3'
              {...shapeVariations}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              cx='108'
              cy='54'
              r='4'
              transform='rotate(-180 108 54)'
              fill={color5}
              stroke='black'
              {...shapeVariations}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              cx='304'
              cy='54'
              r='4'
              transform='rotate(-180 304 54)'
              fill={color5}
              stroke='black'
              {...shapeVariations}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.path
              d='M64.3536 54.3536C64.5488 54.1583 64.5488 53.8417 64.3536 53.6464L61.1716 50.4645C60.9763 50.2692 60.6597 50.2692 60.4645 50.4645C60.2692 50.6597 60.2692 50.9763 60.4645 51.1716L63.2929 54L60.4645 56.8284C60.2692 57.0237 60.2692 57.3403 60.4645 57.5355C60.6597 57.7308 60.9763 57.7308 61.1716 57.5355L64.3536 54.3536ZM24 54.5H64V53.5H24V54.5Z'
              fill={color3}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M23.7849 77H22.1649V64.148H29.3469V65.57H23.7849V70.124H29.0049V71.546H23.7849V77ZM33.5689 72.068L30.2389 67.352H32.0389L34.5229 70.988L36.9889 67.352H38.7709L35.4409 72.068L38.9509 77H37.1509L34.5229 73.148L31.8589 77H30.0769L33.5689 72.068ZM45.6703 77H44.1223V68.018C44.1223 67.502 44.1283 67.088 44.1403 66.776C44.1523 66.464 44.1703 66.14 44.1943 65.804C44.0023 65.996 43.8283 66.158 43.6723 66.29C43.5163 66.422 43.3183 66.59 43.0783 66.794L41.7103 67.91L40.8823 66.848L44.3563 64.148H45.6703V77Z'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M78.8232 90.8232C78.7256 90.9209 78.7256 91.0791 78.8232 91.1768L80.4142 92.7678C80.5118 92.8654 80.6701 92.8654 80.7678 92.7678C80.8654 92.6701 80.8654 92.5118 80.7678 92.4142L79.3536 91L80.7678 89.5858C80.8654 89.4882 80.8654 89.3299 80.7678 89.2322C80.6701 89.1346 80.5118 89.1346 80.4142 89.2322L78.8232 90.8232ZM107.177 91.1768C107.274 91.0791 107.274 90.9209 107.177 90.8232L105.586 89.2322C105.488 89.1346 105.33 89.1346 105.232 89.2322C105.135 89.3299 105.135 89.4882 105.232 89.5858L106.646 91L105.232 92.4142C105.135 92.5118 105.135 92.6701 105.232 92.7678C105.33 92.8654 105.488 92.8654 105.586 92.7678L107.177 91.1768ZM79 91.25L107 91.25L107 90.75L79 90.75L79 91.25Z'
              fill={color3}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M87.5814 101.46C85.4977 101.965 84 104.13 84 106.035C84 107.777 85.1721 108.754 86.4744 108.754C88.3954 108.754 89.6977 106.116 89.6977 103.951C89.6977 102.486 89.014 101.591 88.607 101.053C88.0047 100.288 87.0279 99.0349 87.0279 98.2535C87.0279 97.9767 87.2395 97.4884 87.9558 97.4884C88.4605 97.4884 88.7698 97.6674 89.2581 97.9442C89.4047 98.0419 89.7791 98.2535 89.9907 98.2535C90.3326 98.2535 90.5768 97.9116 90.5768 97.6512C90.5768 97.3419 90.3326 97.293 89.7628 97.1628C88.9977 97 88.7698 97 88.493 97C88.2163 97 86.6209 97 86.6209 98.6605C86.6209 99.4581 87.0279 100.386 87.5814 101.46ZM87.7605 101.77C88.3791 103.056 88.6233 103.544 88.6233 104.602C88.6233 105.872 87.9395 108.428 86.4907 108.428C85.8558 108.428 84.9442 108.005 84.9442 106.491C84.9442 105.433 85.5465 102.356 87.7605 101.77Z'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M93.8164 104.087C93.8164 103.794 93.7947 103.783 93.5017 103.783C93.0567 104.217 92.4815 104.478 91.4505 104.478V104.836C91.7435 104.836 92.3296 104.836 92.9591 104.543V110.11C92.9591 110.512 92.9265 110.642 91.8955 110.642H91.5156V111C91.9606 110.967 92.8939 110.967 93.3823 110.967C93.8707 110.967 94.8149 110.967 95.2598 111V110.642H94.88C93.849 110.642 93.8164 110.512 93.8164 110.11V104.087Z'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M99.582 104.087C99.582 103.794 99.5603 103.783 99.2673 103.783C98.8223 104.217 98.2471 104.478 97.2161 104.478V104.836C97.5091 104.836 98.0952 104.836 98.7246 104.543V110.11C98.7246 110.512 98.6921 110.642 97.6611 110.642H97.2812V111C97.7262 110.967 98.6595 110.967 99.1479 110.967C99.6363 110.967 100.58 110.967 101.025 111V110.642H100.646C99.6146 110.642 99.582 110.512 99.582 110.11V104.087Z'
              fill={color2}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M78 61V98'
              stroke={color2}
              stroke-dasharray='5 5'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              d='M108 61V98'
              stroke={color2}
              stroke-dasharray='5 5'
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

export default F_11;
