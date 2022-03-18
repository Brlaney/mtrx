import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';


const Five = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg
        width='390'
        height='160'
        viewBox='0 0 390 160'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='bar_element' data-name='Bar element 5'>
          <motion.path
            {...mainPathVariant}
            d='M1.09419 154L390.742 11.4899'
            stroke='#4E4E4E'
            strokeDasharray='4 4'
          />
          <motion.path
            {...shapeVariations}
            d='M94.9476 119.597L197.209 82.5112L295.94 46.5762'
            stroke='#252323'
            strokeWidth='2.5'
          />
          <motion.path
            {...shapeVariations}
            d='M87.0914 120.853C87.0914 118.644 88.8823 116.853 91.0914 116.853C93.3006 116.853 95.0914 118.644 95.0914 120.853C95.0914 123.062 93.3006 124.853 91.0914 124.853C88.8823 124.853 87.0914 123.062 87.0914 120.853Z'
            fill='#CADEFC'
            stroke='#242121'
          />
          <motion.circle
            {...shapeVariations}
            cx='299.094'
            cy='45'
            r='4'
            transform='rotate(-180 299.094 45)'
            fill='#CADEFC'
            stroke='black'
          />
          <motion.path
            {...shapeVariations}
            d='M91.1345 120.292C90.7891 120.417 90.6103 120.798 90.7352 121.144C90.8601 121.489 91.2413 121.668 91.5867 121.543L91.1345 120.292ZM127.696 108.282C127.852 107.95 127.709 107.554 127.376 107.398L121.958 104.857C121.625 104.701 121.229 104.844 121.073 105.176C120.917 105.509 121.061 105.905 121.393 106.061L126.21 108.32L123.951 113.136C123.795 113.469 123.938 113.865 124.271 114.021C124.603 114.177 124.999 114.034 125.155 113.701L127.696 108.282ZM91.5867 121.543L127.32 108.625L126.868 107.375L91.1345 120.292L91.5867 121.543Z'
            fill='#1686D8'
          />
          <motion.path
            {...shapeVariations}
            d='M90.6517 120.961C90.7773 121.306 91.1589 121.484 91.5041 121.358C91.8492 121.233 92.0271 120.851 91.9015 120.506L90.6517 120.961ZM78.5609 84.4225C78.228 84.2673 77.8324 84.4113 77.6772 84.7442L75.1478 90.1684C74.9926 90.5013 75.1366 90.8969 75.4694 91.0521C75.8023 91.2074 76.198 91.0634 76.3532 90.7305L78.6015 85.9089L83.4231 88.1573C83.7559 88.3125 84.1516 88.1685 84.3068 87.8356C84.462 87.5028 84.318 87.1071 83.9851 86.9519L78.5609 84.4225ZM91.9015 120.506L78.9047 84.7978L77.6549 85.2526L90.6517 120.961L91.9015 120.506Z'
            fill='#1686D8'
          />
          <motion.path
            {...shapeVariations}
            d='M299.135 44.2922C298.789 44.417 298.61 44.7982 298.735 45.1436C298.86 45.489 299.241 45.6678 299.587 45.5429L299.135 44.2922ZM335.696 32.2824C335.852 31.9498 335.709 31.5539 335.377 31.3979L329.958 28.8567C329.625 28.7008 329.229 28.8439 329.073 29.1764C328.917 29.5089 329.061 29.9049 329.393 30.0609L334.21 32.3197L331.951 37.1364C331.795 37.4689 331.938 37.8648 332.271 38.0208C332.603 38.1767 332.999 38.0336 333.155 37.7011L335.696 32.2824ZM299.587 45.5429L335.32 32.6254L334.868 31.3746L299.135 44.2922L299.587 45.5429Z'
            fill='#1686D8'
          />
          <motion.path
            {...shapeVariations}
            d='M298.652 44.961C298.777 45.3061 299.159 45.484 299.504 45.3584C299.849 45.2328 300.027 44.8512 299.902 44.5061L298.652 44.961ZM286.561 8.42251C286.228 8.26729 285.832 8.4113 285.677 8.74416L283.148 14.1684C282.993 14.5013 283.137 14.8969 283.469 15.0521C283.802 15.2074 284.198 15.0634 284.353 14.7305L286.601 9.90894L291.423 12.1573C291.756 12.3125 292.152 12.1685 292.307 11.8356C292.462 11.5028 292.318 11.1071 291.985 10.9519L286.561 8.42251ZM299.902 44.5061L286.905 8.79776L285.655 9.25264L298.652 44.961L299.902 44.5061Z'
            fill='#1686D8'
          />
          <motion.path
            {...shapeVariations}
            d='M58.8464 85.6211C58.8464 85.2839 58.7278 85.1152 58.4906 85.1152C58.191 85.1152 57.8789 85.3108 57.5543 85.7021C57.2297 86.0933 56.9613 86.6936 56.749 87.5031C56.7366 87.5166 56.7241 87.5368 56.7116 87.5638C56.6991 87.5908 56.6929 87.611 56.6929 87.6245C56.6929 87.638 56.6804 87.6515 56.6554 87.665C56.6304 87.6785 56.6117 87.6852 56.5992 87.6852C56.5868 87.6852 56.5618 87.6852 56.5243 87.6852C56.4869 87.6852 56.4369 87.6852 56.3745 87.6852H56.1124C56.0375 87.6043 56 87.5436 56 87.5031C56 87.4087 56.0499 87.213 56.1498 86.9162C56.2497 86.6194 56.3995 86.2687 56.5992 85.864C56.799 85.4592 57.0736 85.1152 57.4232 84.8319C57.7727 84.5486 58.166 84.4002 58.6029 84.3867C59.1273 84.3867 59.533 84.5486 59.8201 84.8724C60.1073 85.1962 60.2571 85.5739 60.2696 86.0056C60.2696 86.235 60.2509 86.4103 60.2134 86.5318C60.2134 86.6127 60.1198 86.9095 59.9325 87.4221C59.7452 87.9348 59.5517 88.5351 59.352 89.2232C59.1522 89.9112 59.0399 90.5115 59.0149 91.0242C59.0149 91.3884 59.0461 91.6852 59.1086 91.9146C59.2708 92.4947 59.6641 92.7847 60.2883 92.7847C60.7502 92.7847 61.1809 92.5554 61.5804 92.0967C61.9799 91.638 62.292 91.1051 62.5167 90.498C62.7414 89.8909 62.9225 89.3311 63.0598 88.8184C63.1971 88.3058 63.2658 87.9348 63.2658 87.7054C63.2658 87.3952 63.2158 87.1253 63.116 86.896C63.0161 86.6667 62.9037 86.4913 62.7789 86.3699C62.654 86.2484 62.5417 86.127 62.4418 86.0056C62.3419 85.8842 62.292 85.7358 62.292 85.5604C62.292 85.2636 62.4106 84.9871 62.6478 84.7307C62.885 84.4744 63.1409 84.3463 63.4156 84.3463C63.6528 84.3463 63.865 84.4677 64.0523 84.7105C64.2395 84.9533 64.3394 85.3446 64.3519 85.8842C64.3519 86.2484 64.277 86.8083 64.1272 87.5638C63.9774 88.3193 63.7464 89.1624 63.4343 90.0933C63.1222 91.0242 62.679 91.8269 62.1047 92.5014C61.5305 93.1759 60.8688 93.52 60.1198 93.5334C59.3208 93.5334 58.6841 93.3109 58.2097 92.8657C57.7478 92.434 57.5168 91.7931 57.5168 90.9432C57.5168 90.525 57.5668 90.0933 57.6666 89.6481C57.7665 89.2029 58.0224 88.4137 58.4344 87.2805C58.7091 86.4171 58.8464 85.864 58.8464 85.6211Z'
            fill='#252323'
          />
          <motion.path
            {...shapeVariations}
            d='M67.509 88.0769L67.3369 88.1484C67.2133 88.1961 67.0368 88.2438 66.8073 88.2915C66.5778 88.3392 66.3218 88.3725 66.0394 88.3916H65.7878V87.7335H66.0394C66.4542 87.7144 66.8382 87.6429 67.1912 87.5189C67.5443 87.3949 67.7914 87.2804 67.9326 87.1755C68.0738 87.0706 68.1974 86.9657 68.3033 86.8608C68.321 86.8322 68.3739 86.8179 68.4622 86.8179C68.5416 86.8179 68.6167 86.8465 68.6873 86.9037V91.1815L68.7005 95.4735C68.7623 95.5403 68.8153 95.5832 68.8594 95.6023C68.9035 95.6214 69.0094 95.6404 69.1771 95.6595C69.3448 95.6786 69.6184 95.6881 69.998 95.6881H70.3422V96.3463H70.1966C70.0112 96.3176 69.3095 96.3033 68.0915 96.3033C66.8911 96.3033 66.1983 96.3176 66.0129 96.3463H65.854V95.6881H66.1983C66.3924 95.6881 66.5601 95.6881 66.7014 95.6881C66.8426 95.6881 66.9529 95.6834 67.0323 95.6738C67.1118 95.6643 67.1824 95.65 67.2442 95.6309C67.306 95.6118 67.3413 95.6023 67.3501 95.6023C67.3589 95.6023 67.3854 95.5784 67.4295 95.5308C67.4737 95.4831 67.5001 95.464 67.509 95.4735V88.0769Z'
            fill='#252323'
          />
          <motion.path
            {...shapeVariations}
            d='M264.05 8.62114C264.05 8.28387 263.931 8.11524 263.694 8.11524C263.394 8.11524 263.082 8.31085 262.757 8.70208C262.433 9.09331 262.164 9.69365 261.952 10.5031C261.94 10.5166 261.927 10.5368 261.915 10.5638C261.902 10.5908 261.896 10.611 261.896 10.6245C261.896 10.638 261.884 10.6515 261.859 10.665C261.834 10.6785 261.815 10.6852 261.802 10.6852C261.79 10.6852 261.765 10.6852 261.727 10.6852C261.69 10.6852 261.64 10.6852 261.578 10.6852H261.315C261.241 10.6043 261.203 10.5436 261.203 10.5031C261.203 10.4087 261.253 10.213 261.353 9.91625C261.453 9.61945 261.603 9.26869 261.802 8.86397C262.002 8.45925 262.277 8.11524 262.626 7.83193C262.976 7.54862 263.369 7.40023 263.806 7.38674C264.33 7.38674 264.736 7.54862 265.023 7.8724C265.31 8.19618 265.46 8.57392 265.473 9.00562C265.473 9.23497 265.454 9.41035 265.417 9.53176C265.417 9.61271 265.323 9.9095 265.136 10.4221C264.948 10.9348 264.755 11.5351 264.555 12.2232C264.355 12.9112 264.243 13.5115 264.218 14.0242C264.218 14.3884 264.249 14.6852 264.312 14.9146C264.474 15.4947 264.867 15.7847 265.491 15.7847C265.953 15.7847 266.384 15.5554 266.784 15.0967C267.183 14.638 267.495 14.1051 267.72 13.498C267.945 12.891 268.126 12.3311 268.263 11.8184C268.4 11.3058 268.469 10.9348 268.469 10.7055C268.469 10.3952 268.419 10.1254 268.319 9.89601C268.219 9.66667 268.107 9.49129 267.982 9.36987C267.857 9.24846 267.745 9.12704 267.645 9.00562C267.545 8.88421 267.495 8.73581 267.495 8.56043C267.495 8.26363 267.614 7.98707 267.851 7.73075C268.088 7.47443 268.344 7.34626 268.619 7.34626C268.856 7.34626 269.068 7.46768 269.255 7.71051C269.443 7.95335 269.543 8.34458 269.555 8.88421C269.555 9.24846 269.48 9.80832 269.33 10.5638C269.18 11.3193 268.95 12.1625 268.637 13.0933C268.325 14.0242 267.882 14.8269 267.308 15.5014C266.734 16.1759 266.072 16.52 265.323 16.5334C264.524 16.5334 263.887 16.3109 263.413 15.8657C262.951 15.434 262.72 14.7931 262.72 13.9432C262.72 13.525 262.77 13.0933 262.87 12.6481C262.97 12.2029 263.226 11.4137 263.638 10.2805C263.912 9.41709 264.05 8.86397 264.05 8.62114Z'
            fill='#252323'
          />
          <motion.path
            {...shapeVariations}
            d='M271.335 13.2086C271.097 13.2086 270.907 13.1227 270.766 12.9511C270.625 12.7794 270.554 12.5695 270.554 12.3216C270.554 11.6444 270.788 11.0578 271.256 10.5618C271.724 10.0658 272.306 9.81785 273.003 9.81785C273.807 9.81785 274.477 10.0849 275.016 10.619C275.554 11.1532 275.828 11.8447 275.837 12.6935C275.837 13.1037 275.748 13.4947 275.572 13.8667C275.395 14.2387 275.183 14.563 274.936 14.8396C274.689 15.1162 274.336 15.4691 273.877 15.8983C273.559 16.194 273.118 16.6327 272.553 17.2145L271.772 18.0157L272.778 18.03C274.164 18.03 274.901 18.0062 274.989 17.9585C275.051 17.9394 275.157 17.515 275.307 16.6852V16.6422H275.837V16.6852C275.828 16.7138 275.77 17.1478 275.664 17.9871C275.559 18.8264 275.492 19.2652 275.466 19.3033V19.3463H270.554V19.0744V18.9027C270.554 18.836 270.581 18.7644 270.634 18.6881C270.686 18.6118 270.819 18.4449 271.031 18.1874C271.287 17.8822 271.507 17.6151 271.693 17.3862C271.772 17.2908 271.922 17.1144 272.143 16.8568C272.363 16.5993 272.514 16.4229 272.593 16.3275C272.672 16.2321 272.8 16.0747 272.977 15.8554C273.153 15.636 273.277 15.4738 273.348 15.3689C273.418 15.264 273.52 15.1209 273.652 14.9397C273.784 14.7585 273.877 14.6059 273.93 14.4819C273.983 14.3579 274.049 14.2196 274.129 14.067C274.208 13.9144 274.266 13.7618 274.301 13.6092C274.336 13.4566 274.367 13.3135 274.394 13.18C274.42 13.0464 274.433 12.8891 274.433 12.7078C274.433 12.107 274.283 11.5871 273.983 11.1484C273.683 10.7096 273.255 10.4903 272.699 10.4903C272.408 10.4903 272.152 10.5713 271.931 10.7335C271.71 10.8956 271.556 11.053 271.468 11.2056C271.379 11.3582 271.335 11.4488 271.335 11.4774C271.335 11.487 271.357 11.4918 271.401 11.4918C271.56 11.4918 271.724 11.5585 271.891 11.6921C272.059 11.8256 272.143 12.045 272.143 12.3502C272.143 12.5886 272.072 12.7889 271.931 12.9511C271.79 13.1132 271.591 13.199 271.335 13.2086Z'
            fill='#252323'
          />
          <motion.path
            {...shapeVariations}
            d='M109.14 92.4656C109.14 92.3575 109.196 92.148 109.309 91.8372C109.421 91.5264 109.578 91.175 109.778 90.7831C109.978 90.3912 110.253 90.0534 110.603 89.7696C110.953 89.4858 111.322 89.3372 111.71 89.3237C112.285 89.3237 112.716 89.4926 113.004 89.8304C113.292 90.1683 113.435 90.5669 113.435 91.0264C113.435 91.2696 113.223 92.0264 112.798 93.2966C112.372 94.5669 112.16 95.5196 112.16 96.1548C112.16 96.7358 112.247 97.1412 112.423 97.371C112.598 97.6007 112.86 97.7223 113.21 97.7358C113.56 97.7493 113.892 97.6345 114.205 97.3912C114.517 97.148 114.748 96.9183 114.899 96.702L115.105 96.3575C115.13 96.3034 115.367 95.2764 115.818 93.2764C116.193 91.6548 116.418 90.7088 116.493 90.4385C116.568 90.1683 116.656 89.9723 116.756 89.8507C116.968 89.648 117.193 89.5466 117.431 89.5466C117.643 89.5466 117.8 89.6142 117.9 89.7493C118 89.8845 118.05 90.0129 118.05 90.1345L116.624 96.5804C116.612 96.648 116.606 96.7561 116.606 96.9048C116.606 97.2426 116.649 97.4656 116.737 97.5737C116.824 97.6818 116.956 97.7426 117.131 97.7561C117.406 97.7156 117.625 97.5061 117.787 97.1277C117.95 96.7493 118.137 96.1548 118.35 95.3439C118.375 95.2358 118.5 95.1818 118.725 95.1818C118.963 95.1818 119.082 95.2426 119.082 95.3642C119.069 95.4318 119.057 95.5264 119.044 95.648C119.032 95.7696 118.975 95.9858 118.875 96.2966C118.775 96.6075 118.669 96.898 118.556 97.1683C118.444 97.4385 118.287 97.6953 118.087 97.9385C117.887 98.1818 117.662 98.3507 117.412 98.4453C117.312 98.4723 117.162 98.4858 116.962 98.4858C116.137 98.4858 115.568 98.1075 115.255 97.3507C115.23 97.3642 115.161 97.4318 115.049 97.5534C114.936 97.675 114.824 97.7764 114.711 97.8575C114.598 97.9385 114.461 98.0399 114.298 98.1615C114.136 98.2831 113.954 98.3642 113.754 98.4048C113.554 98.4453 113.342 98.4791 113.117 98.5061C112.566 98.5061 112.079 98.3845 111.653 98.1412C111.003 97.7223 110.678 97.0061 110.678 95.9926C110.678 95.2223 110.897 94.2156 111.335 92.9723C111.772 91.7291 111.991 90.9385 111.991 90.6007C111.991 90.5872 111.991 90.5737 111.991 90.5602C111.991 90.4385 111.991 90.3575 111.991 90.3169C111.991 90.2764 111.966 90.2291 111.916 90.175C111.866 90.121 111.797 90.0939 111.71 90.0939H111.635C111.347 90.0939 111.084 90.2223 110.847 90.4791C110.609 90.7358 110.422 91.0129 110.284 91.3102C110.147 91.6075 110.04 91.8912 109.965 92.1615C109.89 92.4318 109.84 92.5804 109.815 92.6075C109.79 92.6345 109.69 92.648 109.515 92.648H109.252C109.177 92.5669 109.14 92.5061 109.14 92.4656Z'
            fill='#252323'
          />
          <motion.path
            {...shapeVariations}
            d='M122.3 93.0404L122.128 93.112C122.004 93.1598 121.827 93.2076 121.597 93.2553C121.367 93.3031 121.111 93.3365 120.828 93.3556H120.576V92.6964H120.828C121.244 92.6773 121.628 92.6056 121.982 92.4814C122.336 92.3572 122.583 92.2426 122.725 92.1375C122.866 92.0324 122.99 91.9273 123.096 91.8222C123.114 91.7936 123.167 91.7792 123.255 91.7792C123.335 91.7792 123.41 91.8079 123.481 91.8652V96.1502L123.494 100.45C123.556 100.516 123.609 100.559 123.653 100.579C123.697 100.598 123.803 100.617 123.971 100.636C124.139 100.655 124.413 100.665 124.793 100.665H125.138V101.324H124.992C124.807 101.295 124.104 101.281 122.884 101.281C121.681 101.281 120.987 101.295 120.802 101.324H120.642V100.665H120.987C121.182 100.665 121.35 100.665 121.491 100.665C121.633 100.665 121.743 100.66 121.823 100.65C121.902 100.641 121.973 100.626 122.035 100.607C122.097 100.588 122.132 100.579 122.141 100.579C122.15 100.579 122.176 100.555 122.221 100.507C122.265 100.459 122.291 100.44 122.3 100.45V93.0404Z'
            fill='#252323'
          />
          <motion.path
            {...shapeVariations}
            d='M315.226 16.0332C315.226 15.9251 315.282 15.7156 315.395 15.4048C315.508 15.094 315.664 14.7426 315.864 14.3508C316.064 13.9589 316.339 13.621 316.689 13.3372C317.039 13.0535 317.408 12.9048 317.796 12.8913C318.371 12.8913 318.803 13.0602 319.09 13.3981C319.378 13.7359 319.522 14.1345 319.522 14.594C319.522 14.8372 319.309 15.594 318.884 16.8643C318.459 18.1345 318.246 19.0872 318.246 19.7224C318.246 20.3035 318.334 20.7089 318.509 20.9386C318.684 21.1683 318.946 21.2899 319.297 21.3035C319.647 21.317 319.978 21.2021 320.291 20.9589C320.603 20.7156 320.835 20.4859 320.985 20.2697L321.191 19.9251C321.216 19.871 321.454 18.844 321.904 16.844C322.279 15.2224 322.504 14.2764 322.579 14.0062C322.654 13.7359 322.742 13.5399 322.842 13.4183C323.054 13.2156 323.28 13.1143 323.517 13.1143C323.73 13.1143 323.886 13.1818 323.986 13.317C324.086 13.4521 324.136 13.5805 324.136 13.7021L322.711 20.1481C322.698 20.2156 322.692 20.3237 322.692 20.4724C322.692 20.8102 322.736 21.0332 322.823 21.1413C322.911 21.2494 323.042 21.3102 323.217 21.3237C323.492 21.2832 323.711 21.0737 323.874 20.6954C324.036 20.317 324.224 19.7224 324.436 18.9116C324.461 18.8035 324.586 18.7494 324.811 18.7494C325.049 18.7494 325.168 18.8102 325.168 18.9318C325.155 18.9994 325.143 19.094 325.13 19.2156C325.118 19.3372 325.062 19.5535 324.962 19.8643C324.861 20.1751 324.755 20.4656 324.643 20.7359C324.53 21.0062 324.374 21.2629 324.174 21.5062C323.974 21.7494 323.748 21.9183 323.498 22.0129C323.398 22.0399 323.248 22.0535 323.048 22.0535C322.223 22.0535 321.654 21.6751 321.341 20.9183C321.316 20.9318 321.247 20.9994 321.135 21.121C321.022 21.2426 320.91 21.344 320.797 21.4251C320.685 21.5062 320.547 21.6075 320.385 21.7291C320.222 21.8508 320.041 21.9318 319.841 21.9724C319.641 22.0129 319.428 22.0467 319.203 22.0737C318.653 22.0737 318.165 21.9521 317.74 21.7089C317.089 21.2899 316.764 20.5737 316.764 19.5602C316.764 18.7899 316.983 17.7832 317.421 16.5399C317.859 15.2967 318.077 14.5062 318.077 14.1683C318.077 14.1548 318.077 14.1413 318.077 14.1278C318.077 14.0062 318.077 13.9251 318.077 13.8845C318.077 13.844 318.052 13.7967 318.002 13.7427C317.952 13.6886 317.884 13.6616 317.796 13.6616H317.721C317.433 13.6616 317.171 13.7899 316.933 14.0467C316.696 14.3035 316.508 14.5805 316.37 14.8778C316.233 15.1751 316.127 15.4589 316.052 15.7291C315.977 15.9994 315.926 16.1481 315.901 16.1751C315.876 16.2021 315.776 16.2156 315.601 16.2156H315.339C315.264 16.1345 315.226 16.0737 315.226 16.0332Z'
            fill='#252323'
          />
          <motion.path
            {...shapeVariations}
            d='M327.007 18.7433C326.769 18.7433 326.579 18.6573 326.437 18.4853C326.296 18.3133 326.225 18.1031 326.225 17.8547C326.225 17.1764 326.459 16.5888 326.928 16.092C327.396 15.5952 327.98 15.3468 328.678 15.3468C329.483 15.3468 330.155 15.6143 330.694 16.1493C331.233 16.6844 331.507 17.377 331.516 18.2273C331.516 18.6382 331.428 19.0299 331.251 19.4025C331.074 19.7751 330.862 20.0999 330.615 20.377C330.367 20.6541 330.013 21.0076 329.554 21.4375C329.235 21.7337 328.793 22.1732 328.227 22.756L327.445 23.5585L328.453 23.5728C329.841 23.5728 330.579 23.549 330.668 23.5012C330.729 23.4821 330.836 23.0569 330.986 22.2257V22.1827H331.516V22.2257C331.507 22.2544 331.45 22.6891 331.344 23.5298C331.238 24.3706 331.172 24.8101 331.145 24.8483V24.8913H326.225V24.619V24.447C326.225 24.3802 326.251 24.3085 326.304 24.2321C326.357 24.1556 326.49 23.9884 326.702 23.7305C326.959 23.4247 327.18 23.1572 327.365 22.9279C327.445 22.8324 327.595 22.6556 327.816 22.3977C328.037 22.1397 328.188 21.963 328.267 21.8674C328.347 21.7719 328.475 21.6143 328.652 21.3945C328.829 21.1748 328.952 21.0124 329.023 20.9073C329.094 20.8022 329.196 20.6589 329.328 20.4773C329.461 20.2958 329.554 20.1429 329.607 20.0187C329.66 19.8945 329.726 19.756 329.806 19.6031C329.885 19.4503 329.943 19.2974 329.978 19.1445C330.013 18.9917 330.044 18.8484 330.071 18.7146C330.097 18.5808 330.111 18.4232 330.111 18.2417C330.111 17.6398 329.96 17.1191 329.66 16.6796C329.359 16.2401 328.93 16.0204 328.373 16.0204C328.082 16.0204 327.825 16.1016 327.604 16.264C327.383 16.4264 327.228 16.584 327.14 16.7369C327.052 16.8898 327.007 16.9805 327.007 17.0092C327.007 17.0188 327.029 17.0235 327.074 17.0235C327.233 17.0235 327.396 17.0904 327.564 17.2242C327.732 17.3579 327.816 17.5777 327.816 17.8834C327.816 18.1222 327.746 18.3229 327.604 18.4853C327.463 18.6477 327.264 18.7337 327.007 18.7433Z'
            fill='#252323'
          />
          <motion.circle
            {...shapeVariations}
            cx='91'
            cy='142'
            r='8.5'
            fill='#E4E4E4'
            fillOpacity='0.85'
            stroke='#2F2F2F'
          />
          <motion.path
            {...shapeVariations}
            d='M90.8699 147C90.7765 147 90.6972 146.972 90.6319 146.916C90.5759 146.851 90.5479 146.771 90.5479 146.678V138.838L88.2239 140.63C88.1585 140.686 88.0885 140.714 88.0139 140.714C87.9299 140.714 87.8505 140.667 87.7759 140.574L87.4119 140.112C87.3652 140.047 87.3419 139.981 87.3419 139.916C87.3419 139.804 87.3885 139.715 87.4819 139.65L90.5339 137.298C90.6365 137.233 90.7579 137.2 90.8979 137.2H91.6119C91.7052 137.2 91.7799 137.233 91.8359 137.298C91.9012 137.354 91.9339 137.429 91.9339 137.522V146.678C91.9339 146.771 91.9012 146.851 91.8359 146.916C91.7799 146.972 91.7052 147 91.6119 147H90.8699Z'
            fill='#2F2F2F'
          />
          <motion.path
            {...shapeVariations}
            d='M299.015 73C303.71 73 307.515 69.1944 307.515 64.5C307.515 59.8056 303.71 56 299.015 56C294.321 56 290.515 59.8056 290.515 64.5C290.515 69.1944 294.321 73 299.015 73Z'
            fill='#E4E4E4'
            fillOpacity='0.85'
            stroke='#2F2F2F'
          />
          <motion.path
            {...shapeVariations}
            d='M295.9 69C295.806 69 295.727 68.972 295.662 68.916C295.606 68.8507 295.578 68.7713 295.578 68.678V68.23C295.578 68.0153 295.694 67.81 295.928 67.614L298.896 64.646C299.614 64.0487 300.109 63.5633 300.38 63.19C300.65 62.8073 300.786 62.406 300.786 61.986C300.786 61.4447 300.632 61.02 300.324 60.712C300.025 60.404 299.586 60.25 299.008 60.25C298.466 60.25 298.032 60.4133 297.706 60.74C297.379 61.0573 297.178 61.482 297.104 62.014C297.085 62.126 297.038 62.21 296.964 62.266C296.898 62.3127 296.824 62.336 296.74 62.336H296.012C295.928 62.336 295.858 62.3127 295.802 62.266C295.746 62.21 295.718 62.1447 295.718 62.07C295.736 61.566 295.872 61.0853 296.124 60.628C296.376 60.1613 296.744 59.7833 297.23 59.494C297.724 59.1953 298.317 59.046 299.008 59.046C300.062 59.046 300.856 59.3213 301.388 59.872C301.929 60.4133 302.2 61.104 302.2 61.944C302.2 62.532 302.05 63.064 301.752 63.54C301.462 64.0067 301.01 64.5107 300.394 65.052L297.706 67.782H302.074C302.176 67.782 302.256 67.8147 302.312 67.88C302.377 67.936 302.41 68.0107 302.41 68.104V68.678C302.41 68.7713 302.377 68.8507 302.312 68.916C302.246 68.972 302.167 69 302.074 69H295.9Z'
            fill='#2F2F2F'
          />
        </g>
      </svg>
    </motion.div>
  )
};

export default Five;