import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';

const color1 = '#4E4E4E';

const Eqn2 = () => {
  return (
    <motion.div
      className="animationParent"
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <svg
        width='386'
        height='121'
        viewBox='0 0 386 121'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id="Eqn2" data-name="Eqn2">
          <motion.path
            {...mainPathVariant}
            d="M41.98 41C41.86 41 41.758 40.964 41.674 40.892C41.602 40.808 41.566 40.706 41.566 40.586V28.832C41.566 28.7 41.602 28.598 41.674 28.526C41.758 28.442 41.86 28.4 41.98 28.4H42.88C43.072 28.4 43.228 28.496 43.348 28.688L47.146 35.96L50.98 28.688C51.004 28.616 51.052 28.55 51.124 28.49C51.208 28.43 51.31 28.4 51.43 28.4H52.312C52.444 28.4 52.546 28.442 52.618 28.526C52.702 28.598 52.744 28.7 52.744 28.832V40.586C52.744 40.706 52.702 40.808 52.618 40.892C52.534 40.964 52.432 41 52.312 41H51.43C51.31 41 51.208 40.964 51.124 40.892C51.052 40.808 51.016 40.706 51.016 40.586V31.73L48.01 37.598C47.89 37.85 47.698 37.976 47.434 37.976H46.876C46.612 37.976 46.42 37.85 46.3 37.598L43.276 31.73V40.586C43.276 40.706 43.234 40.808 43.15 40.892C43.078 40.964 42.982 41 42.862 41H41.98ZM56.919 44.06C56.799 44.06 56.703 44.024 56.631 43.952C56.559 43.88 56.523 43.784 56.523 43.664V39.38L55.461 40.172C55.401 40.22 55.323 40.244 55.227 40.244C55.107 40.244 54.999 40.19 54.903 40.082L54.669 39.776C54.609 39.692 54.579 39.608 54.579 39.524C54.579 39.416 54.633 39.314 54.741 39.218L56.523 37.886C56.643 37.802 56.781 37.76 56.937 37.76H57.441C57.561 37.76 57.657 37.796 57.729 37.868C57.801 37.94 57.837 38.036 57.837 38.156V43.664C57.837 43.784 57.801 43.88 57.729 43.952C57.657 44.024 57.561 44.06 57.441 44.06H56.919ZM61.296 44.06C61.176 44.06 61.08 44.024 61.008 43.952C60.936 43.88 60.9 43.784 60.9 43.664V39.38L59.838 40.172C59.778 40.22 59.7 40.244 59.604 40.244C59.484 40.244 59.376 40.19 59.28 40.082L59.046 39.776C58.986 39.692 58.956 39.608 58.956 39.524C58.956 39.416 59.01 39.314 59.118 39.218L60.9 37.886C61.02 37.802 61.158 37.76 61.314 37.76H61.818C61.938 37.76 62.034 37.796 62.106 37.868C62.178 37.94 62.214 38.036 62.214 38.156V43.664C62.214 43.784 62.178 43.88 62.106 43.952C62.034 44.024 61.938 44.06 61.818 44.06H61.296ZM69.4495 33.872C69.3295 33.872 69.2335 33.836 69.1615 33.764C69.0895 33.692 69.0535 33.596 69.0535 33.476V33.224C69.0535 33.104 69.0895 33.008 69.1615 32.936C69.2335 32.864 69.3295 32.828 69.4495 32.828H76.1995C76.3195 32.828 76.4155 32.864 76.4875 32.936C76.5595 33.008 76.5955 33.104 76.5955 33.224V33.476C76.5955 33.596 76.5595 33.692 76.4875 33.764C76.4155 33.836 76.3195 33.872 76.1995 33.872H69.4495ZM69.4495 38.372C69.3295 38.372 69.2335 38.336 69.1615 38.264C69.0895 38.192 69.0535 38.096 69.0535 37.976V37.724C69.0535 37.604 69.0895 37.508 69.1615 37.436C69.2335 37.364 69.3295 37.328 69.4495 37.328H76.1995C76.3195 37.328 76.4155 37.364 76.4875 37.436C76.5595 37.508 76.5955 37.604 76.5955 37.724V37.976C76.5955 38.096 76.5595 38.192 76.4875 38.264C76.4155 38.336 76.3195 38.372 76.1995 38.372H69.4495ZM84.3374 36.122C84.2174 36.122 84.1214 36.086 84.0494 36.014C83.9774 35.942 83.9414 35.846 83.9414 35.726V35.474C83.9414 35.354 83.9774 35.258 84.0494 35.186C84.1214 35.114 84.2174 35.078 84.3374 35.078H89.6474C89.7674 35.078 89.8634 35.114 89.9354 35.186C90.0074 35.258 90.0434 35.354 90.0434 35.474V35.726C90.0434 35.846 90.0074 35.942 89.9354 36.014C89.8634 36.086 89.7674 36.122 89.6474 36.122H84.3374ZM93.3107 41C93.1907 41 93.0947 40.964 93.0227 40.892C92.9507 40.82 92.9147 40.724 92.9147 40.604V28.814C92.9147 28.694 92.9507 28.598 93.0227 28.526C93.0947 28.442 93.1907 28.4 93.3107 28.4H97.6847C98.9687 28.4 99.9767 28.724 100.709 29.372C101.453 30.008 101.825 30.926 101.825 32.126C101.825 33.326 101.453 34.25 100.709 34.898C99.9767 35.534 98.9687 35.852 97.6847 35.852H94.0487V40.604C94.0487 40.724 94.0067 40.82 93.9227 40.892C93.8507 40.964 93.7547 41 93.6347 41H93.3107ZM97.5947 34.772C98.6267 34.772 99.4007 34.55 99.9167 34.106C100.433 33.65 100.691 32.99 100.691 32.126C100.691 31.262 100.433 30.608 99.9167 30.164C99.4007 29.708 98.6267 29.48 97.5947 29.48H94.0487V34.772H97.5947ZM104.613 41C104.493 41 104.397 40.964 104.325 40.892C104.253 40.82 104.217 40.724 104.217 40.604V28.796C104.217 28.676 104.253 28.58 104.325 28.508C104.397 28.436 104.493 28.4 104.613 28.4H104.955C105.075 28.4 105.171 28.436 105.243 28.508C105.315 28.58 105.351 28.676 105.351 28.796V39.92H111.561C111.693 39.92 111.795 39.956 111.867 40.028C111.939 40.1 111.975 40.202 111.975 40.334V40.604C111.975 40.724 111.933 40.82 111.849 40.892C111.777 40.964 111.681 41 111.561 41H104.613ZM117.873 42.512C117.777 42.512 117.693 42.476 117.621 42.404C117.549 42.332 117.513 42.248 117.513 42.152C117.513 42.104 117.531 42.032 117.567 41.936L123.759 27.122C123.783 27.062 123.825 27.002 123.885 26.942C123.957 26.882 124.047 26.852 124.155 26.852H124.461C124.557 26.852 124.641 26.888 124.713 26.96C124.785 27.032 124.821 27.116 124.821 27.212C124.821 27.26 124.803 27.332 124.767 27.428L118.575 42.242C118.551 42.302 118.503 42.362 118.431 42.422C118.371 42.482 118.287 42.512 118.179 42.512H117.873ZM135.492 41.18C134.652 41.18 133.89 41.036 133.206 40.748C132.534 40.46 132 40.034 131.604 39.47C131.208 38.906 131.01 38.234 131.01 37.454C131.01 36.71 131.19 36.068 131.55 35.528C131.91 34.988 132.408 34.568 133.044 34.268C132.54 33.992 132.15 33.626 131.874 33.17C131.598 32.702 131.46 32.156 131.46 31.532C131.46 30.488 131.838 29.678 132.594 29.102C133.362 28.514 134.328 28.22 135.492 28.22C136.656 28.22 137.616 28.514 138.372 29.102C139.14 29.678 139.524 30.488 139.524 31.532C139.524 32.156 139.38 32.702 139.092 33.17C138.816 33.626 138.432 33.992 137.94 34.268C138.576 34.568 139.074 34.988 139.434 35.528C139.794 36.068 139.974 36.71 139.974 37.454C139.974 38.234 139.776 38.906 139.38 39.47C138.984 40.034 138.444 40.46 137.76 40.748C137.088 41.036 136.332 41.18 135.492 41.18ZM135.492 33.746C136.308 33.722 136.992 33.512 137.544 33.116C138.108 32.72 138.39 32.192 138.39 31.532C138.39 30.848 138.114 30.308 137.562 29.912C137.01 29.504 136.32 29.3 135.492 29.3C134.664 29.3 133.974 29.504 133.422 29.912C132.87 30.308 132.594 30.848 132.594 31.532C132.594 32.216 132.87 32.756 133.422 33.152C133.974 33.548 134.664 33.746 135.492 33.746ZM135.492 40.1C136.44 40.1 137.232 39.86 137.868 39.38C138.516 38.9 138.84 38.258 138.84 37.454C138.84 36.662 138.522 36.026 137.886 35.546C137.25 35.066 136.452 34.826 135.492 34.826C134.532 34.826 133.734 35.066 133.098 35.546C132.462 36.026 132.144 36.662 132.144 37.454C132.144 38.258 132.462 38.9 133.098 39.38C133.746 39.86 134.544 40.1 135.492 40.1Z"
            fill={color1}
            {...shapeVariations}
            animate="visible"
            initial="hidden"
          />
          <motion.path
            d="M234.98 41C234.86 41 234.758 40.964 234.674 40.892C234.602 40.808 234.566 40.706 234.566 40.586V28.832C234.566 28.7 234.602 28.598 234.674 28.526C234.758 28.442 234.86 28.4 234.98 28.4H235.88C236.072 28.4 236.228 28.496 236.348 28.688L240.146 35.96L243.98 28.688C244.004 28.616 244.052 28.55 244.124 28.49C244.208 28.43 244.31 28.4 244.43 28.4H245.312C245.444 28.4 245.546 28.442 245.618 28.526C245.702 28.598 245.744 28.7 245.744 28.832V40.586C245.744 40.706 245.702 40.808 245.618 40.892C245.534 40.964 245.432 41 245.312 41H244.43C244.31 41 244.208 40.964 244.124 40.892C244.052 40.808 244.016 40.706 244.016 40.586V31.73L241.01 37.598C240.89 37.85 240.698 37.976 240.434 37.976H239.876C239.612 37.976 239.42 37.85 239.3 37.598L236.276 31.73V40.586C236.276 40.706 236.234 40.808 236.15 40.892C236.078 40.964 235.982 41 235.862 41H234.98ZM248.227 44.06C248.107 44.06 248.011 44.024 247.939 43.952C247.867 43.88 247.831 43.784 247.831 43.664V43.268C247.831 43.172 247.861 43.076 247.921 42.98C247.981 42.896 248.095 42.794 248.263 42.674L249.199 41.99C249.799 41.57 250.237 41.246 250.513 41.018C250.789 40.802 250.993 40.592 251.125 40.388C251.269 40.172 251.341 39.938 251.341 39.686C251.341 39.422 251.245 39.212 251.053 39.056C250.861 38.888 250.621 38.804 250.333 38.804C250.009 38.804 249.775 38.864 249.631 38.984C249.487 39.104 249.391 39.212 249.343 39.308C249.295 39.416 249.265 39.482 249.253 39.506C249.181 39.638 249.115 39.728 249.055 39.776C248.995 39.812 248.917 39.83 248.821 39.83H248.317C248.101 39.83 247.993 39.728 247.993 39.524C247.993 39.212 248.101 38.912 248.317 38.624C248.533 38.336 248.815 38.108 249.163 37.94C249.523 37.76 249.913 37.67 250.333 37.67C251.029 37.67 251.587 37.862 252.007 38.246C252.427 38.63 252.637 39.104 252.637 39.668C252.637 40.088 252.541 40.46 252.349 40.784C252.169 41.096 251.899 41.402 251.539 41.702C251.191 42.002 250.657 42.398 249.937 42.89H252.511C252.631 42.89 252.727 42.926 252.799 42.998C252.871 43.07 252.907 43.166 252.907 43.286V43.664C252.907 43.784 252.871 43.88 252.799 43.952C252.727 44.024 252.631 44.06 252.511 44.06H248.227ZM256.054 44.06C255.934 44.06 255.838 44.024 255.766 43.952C255.694 43.88 255.658 43.784 255.658 43.664V39.38L254.596 40.172C254.536 40.22 254.458 40.244 254.362 40.244C254.242 40.244 254.134 40.19 254.038 40.082L253.804 39.776C253.744 39.692 253.714 39.608 253.714 39.524C253.714 39.416 253.768 39.314 253.876 39.218L255.658 37.886C255.778 37.802 255.916 37.76 256.072 37.76H256.576C256.696 37.76 256.792 37.796 256.864 37.868C256.936 37.94 256.972 38.036 256.972 38.156V43.664C256.972 43.784 256.936 43.88 256.864 43.952C256.792 44.024 256.696 44.06 256.576 44.06H256.054ZM264.207 33.872C264.087 33.872 263.991 33.836 263.919 33.764C263.847 33.692 263.811 33.596 263.811 33.476V33.224C263.811 33.104 263.847 33.008 263.919 32.936C263.991 32.864 264.087 32.828 264.207 32.828H270.957C271.077 32.828 271.173 32.864 271.245 32.936C271.317 33.008 271.353 33.104 271.353 33.224V33.476C271.353 33.596 271.317 33.692 271.245 33.764C271.173 33.836 271.077 33.872 270.957 33.872H264.207ZM264.207 38.372C264.087 38.372 263.991 38.336 263.919 38.264C263.847 38.192 263.811 38.096 263.811 37.976V37.724C263.811 37.604 263.847 37.508 263.919 37.436C263.991 37.364 264.087 37.328 264.207 37.328H270.957C271.077 37.328 271.173 37.364 271.245 37.436C271.317 37.508 271.353 37.604 271.353 37.724V37.976C271.353 38.096 271.317 38.192 271.245 38.264C271.173 38.336 271.077 38.372 270.957 38.372H264.207ZM279.455 41C279.335 41 279.239 40.964 279.167 40.892C279.095 40.82 279.059 40.724 279.059 40.604V28.814C279.059 28.694 279.095 28.598 279.167 28.526C279.239 28.442 279.335 28.4 279.455 28.4H283.829C285.113 28.4 286.121 28.724 286.853 29.372C287.597 30.008 287.969 30.926 287.969 32.126C287.969 33.326 287.597 34.25 286.853 34.898C286.121 35.534 285.113 35.852 283.829 35.852H280.193V40.604C280.193 40.724 280.151 40.82 280.067 40.892C279.995 40.964 279.899 41 279.779 41H279.455ZM283.739 34.772C284.771 34.772 285.545 34.55 286.061 34.106C286.577 33.65 286.835 32.99 286.835 32.126C286.835 31.262 286.577 30.608 286.061 30.164C285.545 29.708 284.771 29.48 283.739 29.48H280.193V34.772H283.739ZM290.758 41C290.638 41 290.542 40.964 290.47 40.892C290.398 40.82 290.362 40.724 290.362 40.604V28.796C290.362 28.676 290.398 28.58 290.47 28.508C290.542 28.436 290.638 28.4 290.758 28.4H291.1C291.22 28.4 291.316 28.436 291.388 28.508C291.46 28.58 291.496 28.676 291.496 28.796V39.92H297.706C297.838 39.92 297.94 39.956 298.012 40.028C298.084 40.1 298.12 40.202 298.12 40.334V40.604C298.12 40.724 298.078 40.82 297.994 40.892C297.922 40.964 297.826 41 297.706 41H290.758ZM303.526 42.512C303.43 42.512 303.346 42.476 303.274 42.404C303.202 42.332 303.166 42.248 303.166 42.152C303.166 42.104 303.184 42.032 303.22 41.936L309.412 27.122C309.436 27.062 309.478 27.002 309.538 26.942C309.61 26.882 309.7 26.852 309.808 26.852H310.114C310.21 26.852 310.294 26.888 310.366 26.96C310.438 27.032 310.474 27.116 310.474 27.212C310.474 27.26 310.456 27.332 310.42 27.428L304.228 42.242C304.204 42.302 304.156 42.362 304.084 42.422C304.024 42.482 303.94 42.512 303.832 42.512H303.526ZM321.144 41.18C320.304 41.18 319.542 41.036 318.858 40.748C318.186 40.46 317.652 40.034 317.256 39.47C316.86 38.906 316.662 38.234 316.662 37.454C316.662 36.71 316.842 36.068 317.202 35.528C317.562 34.988 318.06 34.568 318.696 34.268C318.192 33.992 317.802 33.626 317.526 33.17C317.25 32.702 317.112 32.156 317.112 31.532C317.112 30.488 317.49 29.678 318.246 29.102C319.014 28.514 319.98 28.22 321.144 28.22C322.308 28.22 323.268 28.514 324.024 29.102C324.792 29.678 325.176 30.488 325.176 31.532C325.176 32.156 325.032 32.702 324.744 33.17C324.468 33.626 324.084 33.992 323.592 34.268C324.228 34.568 324.726 34.988 325.086 35.528C325.446 36.068 325.626 36.71 325.626 37.454C325.626 38.234 325.428 38.906 325.032 39.47C324.636 40.034 324.096 40.46 323.412 40.748C322.74 41.036 321.984 41.18 321.144 41.18ZM321.144 33.746C321.96 33.722 322.644 33.512 323.196 33.116C323.76 32.72 324.042 32.192 324.042 31.532C324.042 30.848 323.766 30.308 323.214 29.912C322.662 29.504 321.972 29.3 321.144 29.3C320.316 29.3 319.626 29.504 319.074 29.912C318.522 30.308 318.246 30.848 318.246 31.532C318.246 32.216 318.522 32.756 319.074 33.152C319.626 33.548 320.316 33.746 321.144 33.746ZM321.144 40.1C322.092 40.1 322.884 39.86 323.52 39.38C324.168 38.9 324.492 38.258 324.492 37.454C324.492 36.662 324.174 36.026 323.538 35.546C322.902 35.066 322.104 34.826 321.144 34.826C320.184 34.826 319.386 35.066 318.75 35.546C318.114 36.026 317.796 36.662 317.796 37.454C317.796 38.258 318.114 38.9 318.75 39.38C319.398 39.86 320.196 40.1 321.144 40.1Z"
            fill={color1}
            {...shapeVariations}
            animate="visible"
            initial="hidden"
          />
          <motion.path
            d="M45.31 89C44.986 89 44.764 88.844 44.644 88.532L40.63 76.958L40.594 76.76C40.594 76.664 40.63 76.58 40.702 76.508C40.774 76.436 40.858 76.4 40.954 76.4H41.89C42.118 76.4 42.28 76.508 42.376 76.724L45.886 86.93L49.414 76.724C49.438 76.652 49.492 76.58 49.576 76.508C49.66 76.436 49.762 76.4 49.882 76.4H50.818C50.914 76.4 50.998 76.436 51.07 76.508C51.154 76.58 51.196 76.664 51.196 76.76L51.16 76.958L47.128 88.532C47.008 88.844 46.792 89 46.48 89H45.31ZM54.4229 92.06C54.3029 92.06 54.2069 92.024 54.1349 91.952C54.0629 91.88 54.0269 91.784 54.0269 91.664V87.38L52.9649 88.172C52.9049 88.22 52.8269 88.244 52.7309 88.244C52.6109 88.244 52.5029 88.19 52.4069 88.082L52.1729 87.776C52.1129 87.692 52.0829 87.608 52.0829 87.524C52.0829 87.416 52.1369 87.314 52.2449 87.218L54.0269 85.886C54.1469 85.802 54.2849 85.76 54.4409 85.76H54.9449C55.0649 85.76 55.1609 85.796 55.2329 85.868C55.3049 85.94 55.3409 86.036 55.3409 86.156V91.664C55.3409 91.784 55.3049 91.88 55.2329 91.952C55.1609 92.024 55.0649 92.06 54.9449 92.06H54.4229ZM57.1079 92.06C56.9879 92.06 56.8919 92.024 56.8199 91.952C56.7479 91.88 56.7119 91.784 56.7119 91.664V91.268C56.7119 91.172 56.7419 91.076 56.8019 90.98C56.8619 90.896 56.9759 90.794 57.1439 90.674L58.0799 89.99C58.6799 89.57 59.1179 89.246 59.3939 89.018C59.6699 88.802 59.8739 88.592 60.0059 88.388C60.1499 88.172 60.2219 87.938 60.2219 87.686C60.2219 87.422 60.1259 87.212 59.9339 87.056C59.7419 86.888 59.5019 86.804 59.2139 86.804C58.8899 86.804 58.6559 86.864 58.5119 86.984C58.3679 87.104 58.2719 87.212 58.2239 87.308C58.1759 87.416 58.1459 87.482 58.1339 87.506C58.0619 87.638 57.9959 87.728 57.9359 87.776C57.8759 87.812 57.7979 87.83 57.7019 87.83H57.1979C56.9819 87.83 56.8739 87.728 56.8739 87.524C56.8739 87.212 56.9819 86.912 57.1979 86.624C57.4139 86.336 57.6959 86.108 58.0439 85.94C58.4039 85.76 58.7939 85.67 59.2139 85.67C59.9099 85.67 60.4679 85.862 60.8879 86.246C61.3079 86.63 61.5179 87.104 61.5179 87.668C61.5179 88.088 61.4219 88.46 61.2299 88.784C61.0499 89.096 60.7799 89.402 60.4199 89.702C60.0719 90.002 59.5379 90.398 58.8179 90.89H61.3919C61.5119 90.89 61.6079 90.926 61.6799 90.998C61.7519 91.07 61.7879 91.166 61.7879 91.286V91.664C61.7879 91.784 61.7519 91.88 61.6799 91.952C61.6079 92.024 61.5119 92.06 61.3919 92.06H57.1079ZM68.4828 81.872C68.3628 81.872 68.2668 81.836 68.1948 81.764C68.1228 81.692 68.0868 81.596 68.0868 81.476V81.224C68.0868 81.104 68.1228 81.008 68.1948 80.936C68.2668 80.864 68.3628 80.828 68.4828 80.828H75.2328C75.3528 80.828 75.4488 80.864 75.5208 80.936C75.5928 81.008 75.6288 81.104 75.6288 81.224V81.476C75.6288 81.596 75.5928 81.692 75.5208 81.764C75.4488 81.836 75.3528 81.872 75.2328 81.872H68.4828ZM68.4828 86.372C68.3628 86.372 68.2668 86.336 68.1948 86.264C68.1228 86.192 68.0868 86.096 68.0868 85.976V85.724C68.0868 85.604 68.1228 85.508 68.1948 85.436C68.2668 85.364 68.3628 85.328 68.4828 85.328H75.2328C75.3528 85.328 75.4488 85.364 75.5208 85.436C75.5928 85.508 75.6288 85.604 75.6288 85.724V85.976C75.6288 86.096 75.5928 86.192 75.5208 86.264C75.4488 86.336 75.3528 86.372 75.2328 86.372H68.4828ZM83.7306 89C83.6106 89 83.5146 88.964 83.4426 88.892C83.3706 88.82 83.3346 88.724 83.3346 88.604V76.814C83.3346 76.694 83.3706 76.598 83.4426 76.526C83.5146 76.442 83.6106 76.4 83.7306 76.4H88.1046C89.3886 76.4 90.3966 76.724 91.1286 77.372C91.8726 78.008 92.2446 78.926 92.2446 80.126C92.2446 81.326 91.8726 82.25 91.1286 82.898C90.3966 83.534 89.3886 83.852 88.1046 83.852H84.4686V88.604C84.4686 88.724 84.4266 88.82 84.3426 88.892C84.2706 88.964 84.1746 89 84.0546 89H83.7306ZM88.0146 82.772C89.0466 82.772 89.8206 82.55 90.3366 82.106C90.8526 81.65 91.1106 80.99 91.1106 80.126C91.1106 79.262 90.8526 78.608 90.3366 78.164C89.8206 77.708 89.0466 77.48 88.0146 77.48H84.4686V82.772H88.0146ZM98.0101 90.512C97.9141 90.512 97.8301 90.476 97.7581 90.404C97.6861 90.332 97.6501 90.248 97.6501 90.152C97.6501 90.104 97.6681 90.032 97.7041 89.936L103.896 75.122C103.92 75.062 103.962 75.002 104.022 74.942C104.094 74.882 104.184 74.852 104.292 74.852H104.598C104.694 74.852 104.778 74.888 104.85 74.96C104.922 75.032 104.958 75.116 104.958 75.212C104.958 75.26 104.94 75.332 104.904 75.428L98.7121 90.242C98.6881 90.302 98.6401 90.362 98.5681 90.422C98.5081 90.482 98.4241 90.512 98.3161 90.512H98.0101ZM111.398 89C111.278 89 111.182 88.964 111.11 88.892C111.038 88.82 111.002 88.724 111.002 88.604V88.334C111.002 88.094 111.152 87.842 111.452 87.578L116.114 82.916C116.774 82.304 117.218 81.788 117.446 81.368C117.674 80.948 117.788 80.45 117.788 79.874C117.788 79.07 117.554 78.44 117.086 77.984C116.63 77.528 115.976 77.3 115.124 77.3C114.32 77.3 113.678 77.534 113.198 78.002C112.718 78.47 112.43 79.1 112.334 79.892C112.322 80.024 112.268 80.126 112.172 80.198C112.088 80.27 112.004 80.306 111.92 80.306H111.56C111.44 80.306 111.344 80.276 111.272 80.216C111.212 80.144 111.182 80.06 111.182 79.964C111.206 79.376 111.362 78.794 111.65 78.218C111.938 77.642 112.376 77.168 112.964 76.796C113.552 76.412 114.272 76.22 115.124 76.22C116.408 76.22 117.362 76.568 117.986 77.264C118.61 77.96 118.922 78.83 118.922 79.874C118.922 80.594 118.766 81.242 118.454 81.818C118.142 82.394 117.644 83 116.96 83.636L112.748 87.92H118.778C118.91 87.92 119.012 87.956 119.084 88.028C119.156 88.1 119.192 88.202 119.192 88.334V88.604C119.192 88.724 119.15 88.82 119.066 88.892C118.994 88.964 118.898 89 118.778 89H111.398Z"
            fill={color1}
            {...shapeVariations}
            animate="visible"
            initial="hidden"
          />
          <motion.path
            d="M238.31 89C237.986 89 237.764 88.844 237.644 88.532L233.63 76.958L233.594 76.76C233.594 76.664 233.63 76.58 233.702 76.508C233.774 76.436 233.858 76.4 233.954 76.4H234.89C235.118 76.4 235.28 76.508 235.376 76.724L238.886 86.93L242.414 76.724C242.438 76.652 242.492 76.58 242.576 76.508C242.66 76.436 242.762 76.4 242.882 76.4H243.818C243.914 76.4 243.998 76.436 244.07 76.508C244.154 76.58 244.196 76.664 244.196 76.76L244.16 76.958L240.128 88.532C240.008 88.844 239.792 89 239.48 89H238.31ZM245.731 92.06C245.611 92.06 245.515 92.024 245.443 91.952C245.371 91.88 245.335 91.784 245.335 91.664V91.268C245.335 91.172 245.365 91.076 245.425 90.98C245.485 90.896 245.599 90.794 245.767 90.674L246.703 89.99C247.303 89.57 247.741 89.246 248.017 89.018C248.293 88.802 248.497 88.592 248.629 88.388C248.773 88.172 248.845 87.938 248.845 87.686C248.845 87.422 248.749 87.212 248.557 87.056C248.365 86.888 248.125 86.804 247.837 86.804C247.513 86.804 247.279 86.864 247.135 86.984C246.991 87.104 246.895 87.212 246.847 87.308C246.799 87.416 246.769 87.482 246.757 87.506C246.685 87.638 246.619 87.728 246.559 87.776C246.499 87.812 246.421 87.83 246.325 87.83H245.821C245.605 87.83 245.497 87.728 245.497 87.524C245.497 87.212 245.605 86.912 245.821 86.624C246.037 86.336 246.319 86.108 246.667 85.94C247.027 85.76 247.417 85.67 247.837 85.67C248.533 85.67 249.091 85.862 249.511 86.246C249.931 86.63 250.141 87.104 250.141 87.668C250.141 88.088 250.045 88.46 249.853 88.784C249.673 89.096 249.403 89.402 249.043 89.702C248.695 90.002 248.161 90.398 247.441 90.89H250.015C250.135 90.89 250.231 90.926 250.303 90.998C250.375 91.07 250.411 91.166 250.411 91.286V91.664C250.411 91.784 250.375 91.88 250.303 91.952C250.231 92.024 250.135 92.06 250.015 92.06H245.731ZM251.866 92.06C251.746 92.06 251.65 92.024 251.578 91.952C251.506 91.88 251.47 91.784 251.47 91.664V91.268C251.47 91.172 251.5 91.076 251.56 90.98C251.62 90.896 251.734 90.794 251.902 90.674L252.838 89.99C253.438 89.57 253.876 89.246 254.152 89.018C254.428 88.802 254.632 88.592 254.764 88.388C254.908 88.172 254.98 87.938 254.98 87.686C254.98 87.422 254.884 87.212 254.692 87.056C254.5 86.888 254.26 86.804 253.972 86.804C253.648 86.804 253.414 86.864 253.27 86.984C253.126 87.104 253.03 87.212 252.982 87.308C252.934 87.416 252.904 87.482 252.892 87.506C252.82 87.638 252.754 87.728 252.694 87.776C252.634 87.812 252.556 87.83 252.46 87.83H251.956C251.74 87.83 251.632 87.728 251.632 87.524C251.632 87.212 251.74 86.912 251.956 86.624C252.172 86.336 252.454 86.108 252.802 85.94C253.162 85.76 253.552 85.67 253.972 85.67C254.668 85.67 255.226 85.862 255.646 86.246C256.066 86.63 256.276 87.104 256.276 87.668C256.276 88.088 256.18 88.46 255.988 88.784C255.808 89.096 255.538 89.402 255.178 89.702C254.83 90.002 254.296 90.398 253.576 90.89H256.15C256.27 90.89 256.366 90.926 256.438 90.998C256.51 91.07 256.546 91.166 256.546 91.286V91.664C256.546 91.784 256.51 91.88 256.438 91.952C256.366 92.024 256.27 92.06 256.15 92.06H251.866ZM263.241 81.872C263.121 81.872 263.025 81.836 262.953 81.764C262.881 81.692 262.845 81.596 262.845 81.476V81.224C262.845 81.104 262.881 81.008 262.953 80.936C263.025 80.864 263.121 80.828 263.241 80.828H269.991C270.111 80.828 270.207 80.864 270.279 80.936C270.351 81.008 270.387 81.104 270.387 81.224V81.476C270.387 81.596 270.351 81.692 270.279 81.764C270.207 81.836 270.111 81.872 269.991 81.872H263.241ZM263.241 86.372C263.121 86.372 263.025 86.336 262.953 86.264C262.881 86.192 262.845 86.096 262.845 85.976V85.724C262.845 85.604 262.881 85.508 262.953 85.436C263.025 85.364 263.121 85.328 263.241 85.328H269.991C270.111 85.328 270.207 85.364 270.279 85.436C270.351 85.508 270.387 85.604 270.387 85.724V85.976C270.387 86.096 270.351 86.192 270.279 86.264C270.207 86.336 270.111 86.372 269.991 86.372H263.241ZM278.488 89C278.368 89 278.272 88.964 278.2 88.892C278.128 88.82 278.092 88.724 278.092 88.604V76.814C278.092 76.694 278.128 76.598 278.2 76.526C278.272 76.442 278.368 76.4 278.488 76.4H282.862C284.146 76.4 285.154 76.724 285.886 77.372C286.63 78.008 287.002 78.926 287.002 80.126C287.002 81.326 286.63 82.25 285.886 82.898C285.154 83.534 284.146 83.852 282.862 83.852H279.226V88.604C279.226 88.724 279.184 88.82 279.1 88.892C279.028 88.964 278.932 89 278.812 89H278.488ZM282.772 82.772C283.804 82.772 284.578 82.55 285.094 82.106C285.61 81.65 285.868 80.99 285.868 80.126C285.868 79.262 285.61 78.608 285.094 78.164C284.578 77.708 283.804 77.48 282.772 77.48H279.226V82.772H282.772ZM292.768 90.512C292.672 90.512 292.588 90.476 292.516 90.404C292.444 90.332 292.408 90.248 292.408 90.152C292.408 90.104 292.426 90.032 292.462 89.936L298.654 75.122C298.678 75.062 298.72 75.002 298.78 74.942C298.852 74.882 298.942 74.852 299.05 74.852H299.356C299.452 74.852 299.536 74.888 299.608 74.96C299.68 75.032 299.716 75.116 299.716 75.212C299.716 75.26 299.698 75.332 299.662 75.428L293.47 90.242C293.446 90.302 293.398 90.362 293.326 90.422C293.266 90.482 293.182 90.512 293.074 90.512H292.768ZM306.156 89C306.036 89 305.94 88.964 305.868 88.892C305.796 88.82 305.76 88.724 305.76 88.604V88.334C305.76 88.094 305.91 87.842 306.21 87.578L310.872 82.916C311.532 82.304 311.976 81.788 312.204 81.368C312.432 80.948 312.546 80.45 312.546 79.874C312.546 79.07 312.312 78.44 311.844 77.984C311.388 77.528 310.734 77.3 309.882 77.3C309.078 77.3 308.436 77.534 307.956 78.002C307.476 78.47 307.188 79.1 307.092 79.892C307.08 80.024 307.026 80.126 306.93 80.198C306.846 80.27 306.762 80.306 306.678 80.306H306.318C306.198 80.306 306.102 80.276 306.03 80.216C305.97 80.144 305.94 80.06 305.94 79.964C305.964 79.376 306.12 78.794 306.408 78.218C306.696 77.642 307.134 77.168 307.722 76.796C308.31 76.412 309.03 76.22 309.882 76.22C311.166 76.22 312.12 76.568 312.744 77.264C313.368 77.96 313.68 78.83 313.68 79.874C313.68 80.594 313.524 81.242 313.212 81.818C312.9 82.394 312.402 83 311.718 83.636L307.506 87.92H313.536C313.668 87.92 313.77 87.956 313.842 88.028C313.914 88.1 313.95 88.202 313.95 88.334V88.604C313.95 88.724 313.908 88.82 313.824 88.892C313.752 88.964 313.656 89 313.536 89H306.156Z"
            fill={color1}
            {...shapeVariations}
            animate="visible"
            initial="hidden"
          />
        </g>
      </svg>
    </motion.div>
  )
};

export default Eqn2;
