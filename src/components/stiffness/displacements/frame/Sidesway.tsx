import { motion } from 'framer-motion'
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs'

const color1 = 'rgba(37, 35, 35, 0.3)'
const color2 = 'rgba(202, 222, 252, 0.7)'

/* 
  animate={{
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }}
  initial={{ y: 60, opacity: 0, }}
*/

const Sidesway = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <div>
        <svg
          width='350'
          height='350'
          viewBox='0 0 350 350'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='sidesway' data-name='sidesway'>
            <motion.line
            {...mainPathVariant}
            x1='231'
            y1='267.5'
            x2='281'
            y2='267.5'
            stroke='#4E4E4E'
            {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.line
              x1='68'
              y1='267.5'
              x2='118'
              y2='267.5'
              stroke='#4E4E4E'
              {...shapeVariations}
              animate='visible'
              initial='hidden'
            />
            <motion.circle
              cx='255.5'
              cy='79.5'
              r='3.5'
              fill={color2}
              stroke={color1}
              {...shapeVariations}
              stroke-width='0.5'
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              cx='91.5'
              cy='79.5'
              r='3.5'
              fill={color2}
              stroke='black'
              {...shapeVariations}
              stroke-width='0.5'
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
            />
            <motion.circle
              cx='277.5'
              cy='79.5'
              r='3.5'
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
              cx='113.5'
              cy='79.5'
              r='3.5'
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
              {...shapeVariations}
              d='M117 80H184.5H252'
              stroke={color1}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M259 80H266.5H274'
              stroke={color1}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M95 80H102.5H110'
              stroke={color1}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M256 83L256 175'
              stroke={color1}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M92 83L92 175'
              stroke={color1}
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M246 268L240 274'
              stroke='#888888'
              stroke-width='0.5'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M269 268L263 274'
              stroke='#888888'
              stroke-width='0.5'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M261 268L255 274'
              stroke='#888888'
              stroke-width='0.5'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M253 268L247 274'
              stroke='#888888'
              stroke-width='0.5'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M82 268L76 274'
              stroke='#888888'
              stroke-width='0.5'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M105 268L99 274'
              stroke='#888888'
              stroke-width='0.5'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M97 268L91 274'
              stroke='#888888'
              stroke-width='0.5'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M89 268L83 274'
              stroke='#888888'
              stroke-width='0.5'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M113.5 83C113.5 142.2 113.5 83 113.5 112C113.5 149.5 92 148.6 92 181C92 213.4 92 253.833 92 267'
              stroke='black'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M277.5 83C277.5 142.2 277.5 83 277.5 112C277.5 149.5 256 148.6 256 181C256 213.4 256 253.833 256 267'
              stroke='black'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M117 80H274'
              stroke='black'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M80 80L75 77.1132V82.8868L80 80ZM50 80.5H75.5V79.5H50V80.5Z'
              fill='#4E4E4E'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M59.4098 72C59.2898 72 59.1938 71.964 59.1218 71.892C59.0498 71.82 59.0138 71.724 59.0138 71.604V63.684H57.4118C57.2918 63.684 57.1958 63.648 57.1238 63.576C57.0518 63.504 57.0158 63.408 57.0158 63.288V63.036C57.0158 62.916 57.0518 62.82 57.1238 62.748C57.1958 62.676 57.2918 62.64 57.4118 62.64H59.0138V61.614C59.0138 60.702 59.2118 59.988 59.6078 59.472C60.0038 58.944 60.7118 58.68 61.7318 58.68H62.6678C62.7878 58.68 62.8838 58.716 62.9558 58.788C63.0278 58.86 63.0638 58.956 63.0638 59.076V59.328C63.0638 59.448 63.0278 59.544 62.9558 59.616C62.8838 59.688 62.7878 59.724 62.6678 59.724H61.7318C61.1198 59.724 60.6938 59.886 60.4538 60.21C60.2258 60.522 60.1118 61.02 60.1118 61.704V62.64H62.4878C62.6078 62.64 62.7038 62.676 62.7758 62.748C62.8478 62.82 62.8838 62.916 62.8838 63.036V63.288C62.8838 63.408 62.8478 63.504 62.7758 63.576C62.7038 63.648 62.6078 63.684 62.4878 63.684H60.1118V71.604C60.1118 71.724 60.0758 71.82 60.0038 71.892C59.9318 71.964 59.8358 72 59.7158 72H59.4098ZM65.7882 75.06C65.6682 75.06 65.5722 75.024 65.5002 74.952C65.4282 74.88 65.3922 74.784 65.3922 74.664V70.146L64.2582 70.992C64.1982 71.04 64.1202 71.064 64.0242 71.064C63.9042 71.064 63.7962 71.01 63.7002 70.902L63.5742 70.722C63.5142 70.638 63.4842 70.554 63.4842 70.47C63.4842 70.35 63.5382 70.248 63.6462 70.164L65.3742 68.886C65.4942 68.802 65.6322 68.76 65.7882 68.76H66.0402C66.1602 68.76 66.2562 68.796 66.3282 68.868C66.4002 68.94 66.4362 69.036 66.4362 69.156V74.664C66.4362 74.784 66.4002 74.88 66.3282 74.952C66.2562 75.024 66.1602 75.06 66.0402 75.06H65.7882Z'
              fill='#4E4E4E'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M96.2011 22.2432C96.1065 22.054 96.0795 22 95.8904 22C95.6877 22 95.6607 22.054 95.5662 22.2432L91.054 31.3755C91.027 31.416 91 31.4971 91 31.5511C91 31.6322 91.0135 31.6457 91.2837 31.6457H100.484C100.754 31.6457 100.767 31.6322 100.767 31.5511C100.767 31.4971 100.74 31.416 100.713 31.3755L96.2011 22.2432ZM95.4716 23.2429L99.1596 30.7135H91.7971L95.4716 23.2429Z'
              fill='#252323'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M108.598 28.2503C108.688 27.8991 108.706 27.818 109.336 27.818C109.543 27.818 109.651 27.818 109.651 27.6469C109.651 27.6379 109.642 27.5208 109.498 27.5208C109.327 27.5208 109.111 27.5388 108.94 27.5478H108.373C107.508 27.5478 107.274 27.5208 107.211 27.5208C107.175 27.5208 107.031 27.5208 107.031 27.6919C107.031 27.818 107.148 27.818 107.292 27.818C107.589 27.818 107.85 27.818 107.85 27.9621C107.85 27.9981 107.841 28.0071 107.814 28.1242L107.274 30.3217H104.374L104.896 28.2233C104.977 27.8991 104.995 27.818 105.653 27.818C105.833 27.818 105.941 27.818 105.941 27.6469C105.941 27.6379 105.932 27.5208 105.788 27.5208C105.617 27.5208 105.4 27.5388 105.229 27.5478H104.662C103.797 27.5478 103.563 27.5208 103.5 27.5208C103.464 27.5208 103.32 27.5208 103.32 27.6919C103.32 27.818 103.437 27.818 103.581 27.818C103.878 27.818 104.14 27.818 104.14 27.9621C104.14 27.9981 104.131 28.0071 104.104 28.1242L102.897 32.9606C102.816 33.3028 102.798 33.3749 102.131 33.3749C101.96 33.3749 101.852 33.3749 101.852 33.546C101.852 33.582 101.879 33.6721 101.996 33.6721C102.167 33.6721 102.383 33.654 102.555 33.645H103.131C103.996 33.645 104.23 33.6721 104.293 33.6721C104.347 33.6721 104.473 33.6721 104.473 33.5009C104.473 33.3749 104.356 33.3749 104.203 33.3749C104.176 33.3749 104.014 33.3749 103.86 33.3568C103.671 33.3388 103.653 33.3118 103.653 33.2308C103.653 33.1857 103.671 33.1317 103.68 33.0867L104.293 30.6189H107.193C106.932 31.6817 106.58 33.0867 106.571 33.0867C106.49 33.3658 106.328 33.3658 105.788 33.3749C105.68 33.3749 105.563 33.3749 105.563 33.546C105.563 33.582 105.59 33.6721 105.707 33.6721C105.878 33.6721 106.094 33.654 106.265 33.645H106.841C107.706 33.645 107.94 33.6721 108.003 33.6721C108.057 33.6721 108.183 33.6721 108.183 33.5009C108.183 33.3749 108.066 33.3749 107.913 33.3749C107.886 33.3749 107.724 33.3749 107.571 33.3568C107.382 33.3388 107.364 33.3118 107.364 33.2308C107.364 33.1857 107.382 33.1317 107.391 33.0867L108.598 28.2503Z'
              fill='#252323'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M112.496 31.8348C112.64 31.6997 113.018 31.4025 113.162 31.2764C113.721 30.763 114.252 30.2677 114.252 29.4481C114.252 28.3764 113.351 27.6829 112.226 27.6829C111.145 27.6829 110.433 28.5025 110.433 29.304C110.433 29.7453 110.785 29.8084 110.911 29.8084C111.1 29.8084 111.379 29.6733 111.379 29.3311C111.379 28.8627 110.929 28.8627 110.821 28.8627C111.082 28.2053 111.685 27.9801 112.127 27.9801C112.964 27.9801 113.397 28.6916 113.397 29.4481C113.397 30.3848 112.739 31.0693 111.676 32.159L110.542 33.3298C110.433 33.4289 110.433 33.4469 110.433 33.6721H113.991L114.252 32.0599H113.973C113.946 32.2401 113.874 32.6904 113.766 32.8615C113.712 32.9335 113.027 32.9335 112.883 32.9335H111.28L112.496 31.8348Z'
              fill='#252323'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M261.201 22.2432C261.107 22.054 261.08 22 260.89 22C260.688 22 260.661 22.054 260.566 22.2432L256.054 31.3755C256.027 31.416 256 31.4971 256 31.5511C256 31.6322 256.014 31.6457 256.284 31.6457H265.484C265.754 31.6457 265.767 31.6322 265.767 31.5511C265.767 31.4971 265.74 31.416 265.713 31.3755L261.201 22.2432ZM260.472 23.2429L264.16 30.7135H256.797L260.472 23.2429Z'
              fill='#252323'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M273.598 28.2503C273.688 27.8991 273.706 27.818 274.336 27.818C274.543 27.818 274.651 27.818 274.651 27.6469C274.651 27.6379 274.642 27.5208 274.498 27.5208C274.327 27.5208 274.111 27.5388 273.94 27.5478H273.373C272.508 27.5478 272.274 27.5208 272.211 27.5208C272.175 27.5208 272.031 27.5208 272.031 27.6919C272.031 27.818 272.148 27.818 272.292 27.818C272.589 27.818 272.85 27.818 272.85 27.9621C272.85 27.9981 272.841 28.0071 272.814 28.1242L272.274 30.3217H269.374L269.896 28.2233C269.977 27.8991 269.995 27.818 270.653 27.818C270.833 27.818 270.941 27.818 270.941 27.6469C270.941 27.6379 270.932 27.5208 270.788 27.5208C270.617 27.5208 270.4 27.5388 270.229 27.5478H269.662C268.797 27.5478 268.563 27.5208 268.5 27.5208C268.464 27.5208 268.32 27.5208 268.32 27.6919C268.32 27.818 268.437 27.818 268.581 27.818C268.878 27.818 269.14 27.818 269.14 27.9621C269.14 27.9981 269.131 28.0071 269.104 28.1242L267.897 32.9606C267.816 33.3028 267.798 33.3749 267.131 33.3749C266.96 33.3749 266.852 33.3749 266.852 33.546C266.852 33.582 266.879 33.6721 266.996 33.6721C267.167 33.6721 267.383 33.654 267.555 33.645H268.131C268.996 33.645 269.23 33.6721 269.293 33.6721C269.347 33.6721 269.473 33.6721 269.473 33.5009C269.473 33.3749 269.356 33.3749 269.203 33.3749C269.176 33.3749 269.014 33.3749 268.86 33.3568C268.671 33.3388 268.653 33.3118 268.653 33.2308C268.653 33.1857 268.671 33.1317 268.68 33.0867L269.293 30.6189H272.193C271.932 31.6817 271.58 33.0867 271.571 33.0867C271.49 33.3658 271.328 33.3658 270.788 33.3749C270.68 33.3749 270.563 33.3749 270.563 33.546C270.563 33.582 270.59 33.6721 270.707 33.6721C270.878 33.6721 271.094 33.654 271.265 33.645H271.841C272.706 33.645 272.94 33.6721 273.003 33.6721C273.057 33.6721 273.183 33.6721 273.183 33.5009C273.183 33.3749 273.066 33.3749 272.913 33.3749C272.886 33.3749 272.724 33.3749 272.571 33.3568C272.382 33.3388 272.364 33.3118 272.364 33.2308C272.364 33.1857 272.382 33.1317 272.391 33.0867L273.598 28.2503Z'
              fill='#252323'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M277.235 30.664C277.946 30.664 278.397 31.1863 278.397 32.132C278.397 33.2578 277.757 33.591 277.28 33.591C276.784 33.591 276.109 33.4109 275.794 32.9335C276.118 32.9335 276.343 32.7264 276.343 32.4292C276.343 32.141 276.136 31.9339 275.848 31.9339C275.605 31.9339 275.352 32.087 275.352 32.4472C275.352 33.3028 276.271 33.8612 277.298 33.8612C278.496 33.8612 279.333 33.0326 279.333 32.132C279.333 31.3845 278.739 30.7 277.82 30.5019C278.532 30.2497 279.063 29.6373 279.063 28.9168C279.063 28.1963 278.252 27.6829 277.316 27.6829C276.352 27.6829 275.623 28.2053 275.623 28.8897C275.623 29.223 275.848 29.3671 276.082 29.3671C276.361 29.3671 276.541 29.1689 276.541 28.9078C276.541 28.5745 276.253 28.4484 276.055 28.4394C276.433 27.9441 277.127 27.9171 277.289 27.9171C277.523 27.9171 278.207 27.9891 278.207 28.9168C278.207 29.5472 277.946 29.9255 277.82 30.0696C277.55 30.3488 277.343 30.3668 276.793 30.4028C276.622 30.4118 276.55 30.4208 276.55 30.5379C276.55 30.664 276.631 30.664 276.784 30.664H277.235Z'
              fill='#252323'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M280.646 54.6464C280.451 54.8417 280.451 55.1583 280.646 55.3536L283.828 58.5355C284.024 58.7308 284.34 58.7308 284.536 58.5355C284.731 58.3403 284.731 58.0237 284.536 57.8284L281.707 55L284.536 52.1716C284.731 51.9763 284.731 51.6597 284.536 51.4645C284.34 51.2692 284.024 51.2692 283.828 51.4645L280.646 54.6464ZM295 54.5H281V55.5H295V54.5Z'
              fill='#4E4E4E'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M252.354 55.3536C252.549 55.1583 252.549 54.8417 252.354 54.6464L249.172 51.4645C248.976 51.2692 248.66 51.2692 248.464 51.4645C248.269 51.6597 248.269 51.9763 248.464 52.1716L251.293 55L248.464 57.8284C248.269 58.0237 248.269 58.3403 248.464 58.5355C248.66 58.7308 248.976 58.7308 249.172 58.5355L252.354 55.3536ZM252 54.5L238 54.5V55.5L252 55.5V54.5Z'
              fill='#4E4E4E'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M255 67L255 43'
              stroke='#4E4E4E'
              stroke-dasharray='5 5'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M278 67L278 43'
              stroke='#4E4E4E'
              stroke-dasharray='5 5'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M116.646 54.6464C116.451 54.8417 116.451 55.1583 116.646 55.3536L119.828 58.5355C120.024 58.7308 120.34 58.7308 120.536 58.5355C120.731 58.3403 120.731 58.0237 120.536 57.8284L117.707 55L120.536 52.1716C120.731 51.9763 120.731 51.6597 120.536 51.4645C120.34 51.2692 120.024 51.2692 119.828 51.4645L116.646 54.6464ZM131 54.5H117V55.5H131V54.5Z'
              fill='#4E4E4E'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M88.3536 55.3536C88.5488 55.1583 88.5488 54.8417 88.3536 54.6464L85.1716 51.4645C84.9763 51.2692 84.6597 51.2692 84.4645 51.4645C84.2692 51.6597 84.2692 51.9763 84.4645 52.1716L87.2929 55L84.4645 57.8284C84.2692 58.0237 84.2692 58.3403 84.4645 58.5355C84.6597 58.7308 84.9763 58.7308 85.1716 58.5355L88.3536 55.3536ZM88 54.5L74 54.5V55.5L88 55.5V54.5Z'
              fill='#4E4E4E'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M91 67L91 43'
              stroke='#4E4E4E'
              stroke-dasharray='5 5'
              animate='visible'
              initial='hidden'
            />
            <motion.path
              {...shapeVariations}
              d='M114 67L114 43'
              stroke='#4E4E4E'
              stroke-dasharray='5 5'
              animate='visible'
              initial='hidden'
            />
          </g>
        </svg>
      </div>
    </motion.div>
  )
}

export default Sidesway
