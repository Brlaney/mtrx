import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';

const color1 = '#CADEFC';
const color2 = '#4E4E4E';
const color3 = 'rgba(37, 35, 35, 0.3)';
const color4 = 'rgba(202, 222, 252, 0.7)';
const color5 = '#B8B8B8';

const Info = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg
        width='122'
        height='52'
        viewBox='0 0 122 52'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='discretized' data-name='discretized'>
          <motion.path
            d='M9.00098 31.576C8.64898 31.576 8.34498 31.452 8.08898 31.204C7.83298 30.948 7.70498 30.644 7.70498 30.292C7.70498 29.932 7.83298 29.628 8.08898 29.38C8.34498 29.124 8.64898 28.996 9.00098 28.996C9.35298 28.996 9.65298 29.124 9.90098 29.38C10.157 29.628 10.285 29.932 10.285 30.292C10.285 30.644 10.157 30.948 9.90098 31.204C9.65298 31.452 9.35298 31.576 9.00098 31.576ZM19.32 34C19.24 34 19.172 33.976 19.116 33.928C19.068 33.872 19.044 33.804 19.044 33.724V25.876C19.044 25.796 19.068 25.732 19.116 25.684C19.172 25.628 19.24 25.6 19.32 25.6H19.956C20.036 25.6 20.1 25.628 20.148 25.684C20.204 25.732 20.232 25.796 20.232 25.876V33.724C20.232 33.804 20.204 33.872 20.148 33.928C20.1 33.976 20.036 34 19.956 34H19.32ZM25.3507 29.368C25.2707 29.368 25.2067 29.344 25.1587 29.296C25.1107 29.248 25.0867 29.184 25.0867 29.104V28.696C25.0867 28.616 25.1107 28.552 25.1587 28.504C25.2067 28.448 25.2707 28.42 25.3507 28.42H29.9227C30.0027 28.42 30.0667 28.448 30.1147 28.504C30.1707 28.552 30.1987 28.616 30.1987 28.696V29.104C30.1987 29.184 30.1707 29.248 30.1147 29.296C30.0667 29.344 30.0027 29.368 29.9227 29.368H25.3507ZM25.3507 32.368C25.2707 32.368 25.2067 32.344 25.1587 32.296C25.1107 32.248 25.0867 32.184 25.0867 32.104V31.696C25.0867 31.616 25.1107 31.552 25.1587 31.504C25.2067 31.448 25.2707 31.42 25.3507 31.42H29.9227C30.0027 31.42 30.0667 31.448 30.1147 31.504C30.1707 31.552 30.1987 31.616 30.1987 31.696V32.104C30.1987 32.184 30.1707 32.248 30.1147 32.296C30.0667 32.344 30.0027 32.368 29.9227 32.368H25.3507ZM34.8718 34C34.7918 34 34.7238 33.976 34.6678 33.928C34.6198 33.872 34.5958 33.804 34.5958 33.724V33.34C34.5958 33.156 34.6958 32.98 34.8958 32.812L37.4398 30.268C38.0558 29.756 38.4798 29.34 38.7118 29.02C38.9438 28.692 39.0598 28.348 39.0598 27.988C39.0598 27.524 38.9278 27.16 38.6638 26.896C38.4078 26.632 38.0318 26.5 37.5358 26.5C37.0718 26.5 36.6998 26.64 36.4198 26.92C36.1398 27.192 35.9678 27.556 35.9038 28.012C35.8878 28.108 35.8478 28.18 35.7838 28.228C35.7278 28.268 35.6638 28.288 35.5918 28.288H34.9678C34.8958 28.288 34.8358 28.268 34.7878 28.228C34.7398 28.18 34.7158 28.124 34.7158 28.06C34.7318 27.628 34.8478 27.216 35.0638 26.824C35.2798 26.424 35.5958 26.1 36.0118 25.852C36.4358 25.596 36.9438 25.468 37.5358 25.468C38.4398 25.468 39.1198 25.704 39.5758 26.176C40.0398 26.64 40.2718 27.232 40.2718 27.952C40.2718 28.456 40.1438 28.912 39.8878 29.32C39.6398 29.72 39.2518 30.152 38.7238 30.616L36.4198 32.956H40.1638C40.2518 32.956 40.3198 32.984 40.3678 33.04C40.4238 33.088 40.4518 33.152 40.4518 33.232V33.724C40.4518 33.804 40.4238 33.872 40.3678 33.928C40.3118 33.976 40.2438 34 40.1638 34H34.8718ZM44.6268 34.12C43.9948 34.12 43.4468 34.02 42.9828 33.82C42.5268 33.612 42.1788 33.344 41.9388 33.016C41.7068 32.688 41.5828 32.344 41.5668 31.984C41.5668 31.912 41.5908 31.856 41.6388 31.816C41.6868 31.768 41.7468 31.744 41.8188 31.744H42.4068C42.5748 31.744 42.6868 31.832 42.7428 32.008C42.8468 32.408 43.0708 32.692 43.4148 32.86C43.7588 33.02 44.1628 33.1 44.6268 33.1C45.1948 33.1 45.6468 32.968 45.9828 32.704C46.3188 32.432 46.4868 32.044 46.4868 31.54C46.4868 30.572 45.8988 30.088 44.7228 30.088H43.5828C43.5028 30.088 43.4348 30.064 43.3788 30.016C43.3308 29.96 43.3068 29.892 43.3068 29.812V29.488C43.3068 29.376 43.3508 29.268 43.4388 29.164L45.7668 26.62H42.2268C42.1468 26.62 42.0788 26.596 42.0228 26.548C41.9748 26.492 41.9508 26.424 41.9508 26.344V25.888C41.9508 25.808 41.9748 25.74 42.0228 25.684C42.0788 25.628 42.1468 25.6 42.2268 25.6H47.0148C47.1028 25.6 47.1708 25.628 47.2188 25.684C47.2748 25.732 47.3028 25.8 47.3028 25.888V26.32C47.3028 26.416 47.2588 26.508 47.1708 26.596L44.8548 29.176L45.0468 29.188C45.8628 29.212 46.5068 29.424 46.9788 29.824C47.4508 30.224 47.6868 30.808 47.6868 31.576C47.6868 32.096 47.5548 32.548 47.2908 32.932C47.0268 33.316 46.6628 33.612 46.1988 33.82C45.7348 34.02 45.2108 34.12 44.6268 34.12ZM51.8338 34.12C51.2018 34.12 50.6538 34.02 50.1898 33.82C49.7338 33.612 49.3858 33.344 49.1458 33.016C48.9138 32.688 48.7898 32.344 48.7738 31.984C48.7738 31.912 48.7978 31.856 48.8458 31.816C48.8938 31.768 48.9538 31.744 49.0258 31.744H49.6138C49.7818 31.744 49.8938 31.832 49.9498 32.008C50.0538 32.408 50.2778 32.692 50.6218 32.86C50.9658 33.02 51.3698 33.1 51.8338 33.1C52.4018 33.1 52.8538 32.968 53.1898 32.704C53.5258 32.432 53.6938 32.044 53.6938 31.54C53.6938 30.572 53.1058 30.088 51.9298 30.088H50.7898C50.7098 30.088 50.6418 30.064 50.5858 30.016C50.5378 29.96 50.5138 29.892 50.5138 29.812V29.488C50.5138 29.376 50.5578 29.268 50.6458 29.164L52.9738 26.62H49.4338C49.3538 26.62 49.2858 26.596 49.2298 26.548C49.1818 26.492 49.1578 26.424 49.1578 26.344V25.888C49.1578 25.808 49.1818 25.74 49.2298 25.684C49.2858 25.628 49.3538 25.6 49.4338 25.6H54.2218C54.3098 25.6 54.3778 25.628 54.4258 25.684C54.4818 25.732 54.5098 25.8 54.5098 25.888V26.32C54.5098 26.416 54.4658 26.508 54.3778 26.596L52.0618 29.176L52.2538 29.188C53.0698 29.212 53.7138 29.424 54.1858 29.824C54.6578 30.224 54.8938 30.808 54.8938 31.576C54.8938 32.096 54.7618 32.548 54.4978 32.932C54.2338 33.316 53.8698 33.612 53.4058 33.82C52.9418 34.02 52.4178 34.12 51.8338 34.12ZM59.4743 26.596C59.3943 26.596 59.3263 26.572 59.2703 26.524C59.2223 26.468 59.1982 26.4 59.1982 26.32V25.672C59.1982 25.592 59.2223 25.524 59.2703 25.468C59.3263 25.412 59.3943 25.384 59.4743 25.384H60.2303C60.3103 25.384 60.3783 25.412 60.4343 25.468C60.4903 25.524 60.5183 25.592 60.5183 25.672V26.32C60.5183 26.4 60.4903 26.468 60.4343 26.524C60.3783 26.572 60.3103 26.596 60.2303 26.596H59.4743ZM59.5703 34C59.4903 34 59.4223 33.976 59.3663 33.928C59.3183 33.872 59.2943 33.804 59.2943 33.724V28.036C59.2943 27.956 59.3183 27.892 59.3663 27.844C59.4223 27.788 59.4903 27.76 59.5703 27.76H60.1463C60.2263 27.76 60.2903 27.788 60.3383 27.844C60.3943 27.892 60.4223 27.956 60.4223 28.036V33.724C60.4223 33.804 60.3943 33.872 60.3383 33.928C60.2903 33.976 60.2263 34 60.1463 34H59.5703ZM62.4765 34C62.3965 34 62.3285 33.976 62.2725 33.928C62.2245 33.872 62.2005 33.804 62.2005 33.724V28.036C62.2005 27.956 62.2245 27.892 62.2725 27.844C62.3285 27.788 62.3965 27.76 62.4765 27.76H63.0405C63.1205 27.76 63.1845 27.788 63.2325 27.844C63.2885 27.892 63.3165 27.956 63.3165 28.036V28.564C63.5485 28.268 63.8205 28.04 64.1325 27.88C64.4525 27.72 64.8485 27.64 65.3205 27.64C66.0885 27.64 66.6845 27.888 67.1085 28.384C67.5405 28.872 67.7565 29.524 67.7565 30.34V33.724C67.7565 33.804 67.7285 33.872 67.6725 33.928C67.6245 33.976 67.5605 34 67.4805 34H66.8805C66.8005 34 66.7325 33.976 66.6765 33.928C66.6285 33.872 66.6045 33.804 66.6045 33.724V30.4C66.6045 29.832 66.4645 29.392 66.1845 29.08C65.9125 28.768 65.5165 28.612 64.9965 28.612C64.4925 28.612 64.0925 28.772 63.7965 29.092C63.5005 29.404 63.3525 29.84 63.3525 30.4V33.724C63.3525 33.804 63.3245 33.872 63.2685 33.928C63.2205 33.976 63.1565 34 63.0765 34H62.4765ZM71.1458 29.8C71.0658 29.8 71.0018 29.776 70.9538 29.728C70.9058 29.68 70.8818 29.616 70.8818 29.536V28.96H69.1058C69.0258 28.96 68.9618 28.936 68.9138 28.888C68.8658 28.84 68.8418 28.776 68.8418 28.696V28.42C68.8418 28.308 68.8898 28.188 68.9858 28.06L70.6178 25.816C70.7218 25.672 70.8418 25.6 70.9778 25.6H71.4818C71.5618 25.6 71.6258 25.624 71.6738 25.672C71.7218 25.72 71.7458 25.784 71.7458 25.864V28.168H72.1658C72.2458 28.168 72.3098 28.192 72.3578 28.24C72.4058 28.288 72.4298 28.352 72.4298 28.432V28.696C72.4298 28.776 72.4058 28.84 72.3578 28.888C72.3098 28.936 72.2458 28.96 72.1658 28.96H71.7458V29.536C71.7458 29.616 71.7218 29.68 71.6738 29.728C71.6258 29.776 71.5618 29.8 71.4818 29.8H71.1458ZM70.8938 28.18V26.704L69.8618 28.18H70.8938ZM9.00098 45.576C8.64898 45.576 8.34498 45.452 8.08898 45.204C7.83298 44.948 7.70498 44.644 7.70498 44.292C7.70498 43.932 7.83298 43.628 8.08898 43.38C8.34498 43.124 8.64898 42.996 9.00098 42.996C9.35298 42.996 9.65298 43.124 9.90098 43.38C10.157 43.628 10.285 43.932 10.285 44.292C10.285 44.644 10.157 44.948 9.90098 45.204C9.65298 45.452 9.35298 45.576 9.00098 45.576ZM19.32 48C19.24 48 19.172 47.976 19.116 47.928C19.068 47.872 19.044 47.804 19.044 47.724V39.888C19.044 39.8 19.068 39.732 19.116 39.684C19.172 39.628 19.24 39.6 19.32 39.6H24.276C24.356 39.6 24.42 39.628 24.468 39.684C24.524 39.732 24.552 39.8 24.552 39.888V40.344C24.552 40.424 24.528 40.492 24.48 40.548C24.432 40.596 24.364 40.62 24.276 40.62H20.196V43.248H24.012C24.092 43.248 24.156 43.276 24.204 43.332C24.26 43.38 24.288 43.448 24.288 43.536V43.98C24.288 44.06 24.26 44.128 24.204 44.184C24.156 44.232 24.092 44.256 24.012 44.256H20.196V46.98H24.372C24.46 46.98 24.528 47.004 24.576 47.052C24.624 47.1 24.648 47.168 24.648 47.256V47.724C24.648 47.804 24.62 47.872 24.564 47.928C24.516 47.976 24.452 48 24.372 48H19.32ZM29.3468 43.368C29.2668 43.368 29.2028 43.344 29.1548 43.296C29.1068 43.248 29.0828 43.184 29.0828 43.104V42.696C29.0828 42.616 29.1068 42.552 29.1548 42.504C29.2028 42.448 29.2668 42.42 29.3468 42.42H33.9188C33.9988 42.42 34.0628 42.448 34.1108 42.504C34.1668 42.552 34.1948 42.616 34.1948 42.696V43.104C34.1948 43.184 34.1668 43.248 34.1108 43.296C34.0628 43.344 33.9988 43.368 33.9188 43.368H29.3468ZM29.3468 46.368C29.2668 46.368 29.2028 46.344 29.1548 46.296C29.1068 46.248 29.0828 46.184 29.0828 46.104V45.696C29.0828 45.616 29.1068 45.552 29.1548 45.504C29.2028 45.448 29.2668 45.42 29.3468 45.42H33.9188C33.9988 45.42 34.0628 45.448 34.1108 45.504C34.1668 45.552 34.1948 45.616 34.1948 45.696V46.104C34.1948 46.184 34.1668 46.248 34.1108 46.296C34.0628 46.344 33.9988 46.368 33.9188 46.368H29.3468ZM38.8679 48C38.7879 48 38.7199 47.976 38.6639 47.928C38.6159 47.872 38.5919 47.804 38.5919 47.724V47.34C38.5919 47.156 38.6919 46.98 38.8919 46.812L41.4359 44.268C42.0519 43.756 42.4759 43.34 42.7079 43.02C42.9399 42.692 43.0559 42.348 43.0559 41.988C43.0559 41.524 42.9239 41.16 42.6599 40.896C42.4039 40.632 42.0279 40.5 41.5319 40.5C41.0679 40.5 40.6959 40.64 40.4159 40.92C40.1359 41.192 39.9639 41.556 39.8999 42.012C39.8839 42.108 39.8439 42.18 39.7799 42.228C39.7239 42.268 39.6599 42.288 39.5879 42.288H38.9639C38.8919 42.288 38.8319 42.268 38.7839 42.228C38.7359 42.18 38.7119 42.124 38.7119 42.06C38.7279 41.628 38.8439 41.216 39.0599 40.824C39.2759 40.424 39.5919 40.1 40.0079 39.852C40.4319 39.596 40.9399 39.468 41.5319 39.468C42.4359 39.468 43.1159 39.704 43.5719 40.176C44.0359 40.64 44.2679 41.232 44.2679 41.952C44.2679 42.456 44.1399 42.912 43.8839 43.32C43.6359 43.72 43.2479 44.152 42.7199 44.616L40.4159 46.956H44.1599C44.2479 46.956 44.3159 46.984 44.3639 47.04C44.4199 47.088 44.4479 47.152 44.4479 47.232V47.724C44.4479 47.804 44.4199 47.872 44.3639 47.928C44.3079 47.976 44.2399 48 44.1599 48H38.8679ZM47.3629 48C47.2909 48 47.2309 47.976 47.1829 47.928C47.1429 47.872 47.1229 47.808 47.1229 47.736C47.1229 47.68 47.1389 47.628 47.1709 47.58L49.0069 45.024C48.8149 45.072 48.5989 45.096 48.3589 45.096C47.7909 45.088 47.2869 44.956 46.8469 44.7C46.4149 44.444 46.0829 44.104 45.8509 43.68C45.6189 43.256 45.5029 42.804 45.5029 42.324C45.5029 41.844 45.6149 41.388 45.8389 40.956C46.0709 40.516 46.4149 40.16 46.8709 39.888C47.3269 39.616 47.8789 39.48 48.5269 39.48C49.1749 39.48 49.7269 39.612 50.1829 39.876C50.6469 40.14 50.9949 40.488 51.2269 40.92C51.4589 41.352 51.5749 41.812 51.5749 42.3C51.5749 42.732 51.4989 43.116 51.3469 43.452C51.1949 43.78 50.9829 44.14 50.7109 44.532L48.3949 47.76C48.3389 47.832 48.2829 47.892 48.2269 47.94C48.1789 47.98 48.1069 48 48.0109 48H47.3629ZM48.5269 44.124C48.8629 44.124 49.1709 44.052 49.4509 43.908C49.7389 43.756 49.9669 43.544 50.1349 43.272C50.3029 42.992 50.3869 42.672 50.3869 42.312C50.3869 41.952 50.3029 41.636 50.1349 41.364C49.9669 41.084 49.7389 40.872 49.4509 40.728C49.1709 40.576 48.8629 40.5 48.5269 40.5C48.1909 40.5 47.8829 40.576 47.6029 40.728C47.3229 40.872 47.0989 41.084 46.9309 41.364C46.7709 41.636 46.6909 41.952 46.6909 42.312C46.6909 42.672 46.7709 42.992 46.9309 43.272C47.0989 43.544 47.3229 43.756 47.6029 43.908C47.8829 44.052 48.1909 44.124 48.5269 44.124ZM55.7016 48C55.6376 48 55.5776 47.976 55.5216 47.928C55.4736 47.88 55.4496 47.82 55.4496 47.748C55.4496 47.676 55.4776 47.604 55.5336 47.532L57.6216 44.808L55.6656 42.228C55.6096 42.164 55.5816 42.092 55.5816 42.012C55.5816 41.94 55.6056 41.88 55.6536 41.832C55.7016 41.784 55.7616 41.76 55.8336 41.76H56.4456C56.5656 41.76 56.6696 41.824 56.7576 41.952L58.3536 44.028L59.9496 41.964C59.9976 41.9 60.0416 41.852 60.0816 41.82C60.1296 41.78 60.1896 41.76 60.2616 41.76H60.8496C60.9216 41.76 60.9816 41.784 61.0296 41.832C61.0776 41.88 61.1016 41.94 61.1016 42.012C61.1016 42.092 61.0736 42.164 61.0176 42.228L59.0376 44.832L61.1256 47.532C61.1816 47.604 61.2096 47.676 61.2096 47.748C61.2096 47.82 61.1856 47.88 61.1376 47.928C61.0896 47.976 61.0296 48 60.9576 48H60.3216C60.2016 48 60.0976 47.94 60.0096 47.82L58.3296 45.624L56.6256 47.82C56.5776 47.876 56.5296 47.92 56.4816 47.952C56.4416 47.984 56.3856 48 56.3136 48H55.7016ZM67.8237 48C67.7437 48 67.6757 47.976 67.6197 47.928C67.5717 47.872 67.5477 47.804 67.5477 47.724V41.004L65.5557 42.54C65.4997 42.588 65.4397 42.612 65.3757 42.612C65.3037 42.612 65.2357 42.572 65.1717 42.492L64.8597 42.096C64.8197 42.04 64.7997 41.984 64.7997 41.928C64.7997 41.832 64.8397 41.756 64.9197 41.7L67.5357 39.684C67.6237 39.628 67.7277 39.6 67.8477 39.6H68.4597C68.5397 39.6 68.6037 39.628 68.6517 39.684C68.7077 39.732 68.7357 39.796 68.7357 39.876V47.724C68.7357 47.804 68.7077 47.872 68.6517 47.928C68.6037 47.976 68.5397 48 68.4597 48H67.8237ZM73.4485 48.12C72.4165 48.12 71.6605 47.82 71.1805 47.22C70.7005 46.62 70.4445 45.832 70.4125 44.856C70.4045 44.64 70.4005 44.292 70.4005 43.812C70.4005 43.316 70.4045 42.956 70.4125 42.732C70.4365 41.772 70.6925 40.992 71.1805 40.392C71.6685 39.784 72.4245 39.48 73.4485 39.48C74.4805 39.48 75.2405 39.784 75.7285 40.392C76.2165 40.992 76.4725 41.772 76.4965 42.732C76.5125 43.18 76.5205 43.54 76.5205 43.812C76.5205 44.076 76.5125 44.424 76.4965 44.856C76.4645 45.832 76.2085 46.62 75.7285 47.22C75.2485 47.82 74.4885 48.12 73.4485 48.12ZM73.4485 47.088C74.0485 47.088 74.5005 46.888 74.8045 46.488C75.1165 46.088 75.2805 45.524 75.2965 44.796C75.3125 44.332 75.3205 43.996 75.3205 43.788C75.3205 43.564 75.3125 43.236 75.2965 42.804C75.2805 42.084 75.1205 41.52 74.8165 41.112C74.5125 40.704 74.0565 40.5 73.4485 40.5C72.8485 40.5 72.3925 40.704 72.0805 41.112C71.7765 41.52 71.6165 42.084 71.6005 42.804L71.5885 43.788L71.6005 44.796C71.6165 45.524 71.7765 46.088 72.0805 46.488C72.3925 46.888 72.8485 47.088 73.4485 47.088ZM79.3617 43.86C78.8817 43.86 78.4777 43.728 78.1497 43.464C77.8217 43.2 77.6577 42.836 77.6577 42.372C77.6577 42.092 77.7057 41.856 77.8017 41.664C77.9057 41.472 78.0497 41.268 78.2337 41.052L79.2777 39.78C79.3817 39.66 79.4977 39.6 79.6257 39.6H79.9857C80.0497 39.6 80.1057 39.624 80.1537 39.672C80.2017 39.72 80.2257 39.776 80.2257 39.84C80.2257 39.896 80.1817 39.976 80.0937 40.08L79.3977 40.908C79.8457 40.892 80.2337 41.016 80.5617 41.28C80.8897 41.544 81.0537 41.908 81.0537 42.372C81.0537 42.828 80.8897 43.192 80.5617 43.464C80.2417 43.728 79.8417 43.86 79.3617 43.86ZM79.3617 43.092C79.6177 43.092 79.8217 43.028 79.9737 42.9C80.1257 42.764 80.2017 42.588 80.2017 42.372C80.2017 42.164 80.1257 41.992 79.9737 41.856C79.8217 41.72 79.6177 41.652 79.3617 41.652C79.1057 41.652 78.9017 41.72 78.7497 41.856C78.5977 41.992 78.5217 42.164 78.5217 42.372C78.5217 42.588 78.5977 42.764 78.7497 42.9C78.9017 43.028 79.1057 43.092 79.3617 43.092ZM85.469 50.28C85.389 50.28 85.321 50.252 85.265 50.196C85.217 50.148 85.193 50.084 85.193 50.004V42.036C85.193 41.956 85.217 41.892 85.265 41.844C85.321 41.788 85.389 41.76 85.469 41.76H86.021C86.101 41.76 86.165 41.788 86.213 41.844C86.269 41.892 86.297 41.956 86.297 42.036V42.564C86.745 41.948 87.401 41.64 88.265 41.64C89.105 41.64 89.733 41.904 90.149 42.432C90.573 42.96 90.801 43.64 90.833 44.472C90.841 44.56 90.845 44.696 90.845 44.88C90.845 45.064 90.841 45.2 90.833 45.288C90.801 46.112 90.573 46.792 90.149 47.328C89.725 47.856 89.097 48.12 88.265 48.12C87.433 48.12 86.785 47.82 86.321 47.22V50.004C86.321 50.084 86.297 50.148 86.249 50.196C86.201 50.252 86.137 50.28 86.057 50.28H85.469ZM88.013 47.148C88.581 47.148 88.993 46.972 89.249 46.62C89.513 46.268 89.657 45.804 89.681 45.228C89.689 45.148 89.693 45.032 89.693 44.88C89.693 43.368 89.133 42.612 88.013 42.612C87.461 42.612 87.045 42.796 86.765 43.164C86.493 43.524 86.345 43.956 86.321 44.46L86.309 44.916L86.321 45.384C86.337 45.856 86.489 46.268 86.777 46.62C87.065 46.972 87.477 47.148 88.013 47.148ZM94.4894 48.12C93.9294 48.12 93.4574 48.032 93.0734 47.856C92.6974 47.672 92.4134 47.464 92.2214 47.232C92.0374 47 91.9454 46.808 91.9454 46.656C91.9454 46.576 91.9734 46.516 92.0294 46.476C92.0934 46.428 92.1574 46.404 92.2214 46.404H92.7614C92.8414 46.404 92.9134 46.444 92.9774 46.524C93.1694 46.748 93.3774 46.924 93.6014 47.052C93.8254 47.18 94.1254 47.244 94.5014 47.244C94.9174 47.244 95.2534 47.164 95.5094 47.004C95.7734 46.836 95.9054 46.608 95.9054 46.32C95.9054 46.128 95.8494 45.972 95.7374 45.852C95.6334 45.724 95.4494 45.616 95.1854 45.528C94.9294 45.432 94.5454 45.328 94.0334 45.216C93.3374 45.064 92.8414 44.844 92.5454 44.556C92.2574 44.268 92.1134 43.896 92.1134 43.44C92.1134 43.136 92.2014 42.848 92.3774 42.576C92.5614 42.296 92.8254 42.072 93.1694 41.904C93.5214 41.728 93.9414 41.64 94.4294 41.64C94.9414 41.64 95.3774 41.724 95.7374 41.892C96.0974 42.06 96.3654 42.26 96.5414 42.492C96.7254 42.716 96.8174 42.904 96.8174 43.056C96.8174 43.128 96.7894 43.188 96.7334 43.236C96.6854 43.284 96.6254 43.308 96.5534 43.308H96.0494C95.9534 43.308 95.8734 43.268 95.8094 43.188C95.6814 43.036 95.5694 42.92 95.4734 42.84C95.3854 42.752 95.2534 42.676 95.0774 42.612C94.9094 42.548 94.6934 42.516 94.4294 42.516C94.0454 42.516 93.7494 42.6 93.5414 42.768C93.3334 42.928 93.2294 43.14 93.2294 43.404C93.2294 43.572 93.2734 43.716 93.3614 43.836C93.4494 43.948 93.6174 44.052 93.8654 44.148C94.1214 44.244 94.4894 44.344 94.9694 44.448C95.7294 44.608 96.2654 44.84 96.5774 45.144C96.8974 45.44 97.0574 45.82 97.0574 46.284C97.0574 46.628 96.9574 46.94 96.7574 47.22C96.5574 47.5 96.2614 47.72 95.8694 47.88C95.4854 48.04 95.0254 48.12 94.4894 48.12ZM98.6266 40.596C98.5466 40.596 98.4786 40.572 98.4226 40.524C98.3746 40.468 98.3506 40.4 98.3506 40.32V39.672C98.3506 39.592 98.3746 39.524 98.4226 39.468C98.4786 39.412 98.5466 39.384 98.6266 39.384H99.3826C99.4626 39.384 99.5306 39.412 99.5866 39.468C99.6426 39.524 99.6706 39.592 99.6706 39.672V40.32C99.6706 40.4 99.6426 40.468 99.5866 40.524C99.5306 40.572 99.4626 40.596 99.3826 40.596H98.6266ZM98.7226 48C98.6426 48 98.5746 47.976 98.5186 47.928C98.4706 47.872 98.4466 47.804 98.4466 47.724V42.036C98.4466 41.956 98.4706 41.892 98.5186 41.844C98.5746 41.788 98.6426 41.76 98.7226 41.76H99.2986C99.3786 41.76 99.4426 41.788 99.4906 41.844C99.5466 41.892 99.5746 41.956 99.5746 42.036V47.724C99.5746 47.804 99.5466 47.872 99.4906 47.928C99.4426 47.976 99.3786 48 99.2986 48H98.7226Z'
            fill='#4E4E4E'
          />
          <motion.path
            d='M6.56 13C6.48533 13 6.42 12.972 6.364 12.916C6.308 12.86 6.28 12.7947 6.28 12.72C6.28 12.6453 6.28467 12.594 6.294 12.566L9.766 3.508C9.84067 3.30267 9.99 3.2 10.214 3.2H11.166C11.39 3.2 11.5393 3.30267 11.614 3.508L15.072 12.566L15.1 12.72C15.1 12.7947 15.072 12.86 15.016 12.916C14.96 12.972 14.8947 13 14.82 13H14.106C14.0033 13 13.924 12.9767 13.868 12.93C13.812 12.874 13.7747 12.818 13.756 12.762L12.986 10.774H8.394L7.624 12.762C7.60533 12.818 7.56333 12.874 7.498 12.93C7.442 12.9767 7.36733 13 7.274 13H6.56ZM12.58 9.57L10.69 4.6L8.8 9.57H12.58ZM16.7509 13C16.6576 13 16.5782 12.972 16.5129 12.916C16.4569 12.8507 16.4289 12.7713 16.4289 12.678V3.382C16.4289 3.28867 16.4569 3.214 16.5129 3.158C16.5782 3.09267 16.6576 3.06 16.7509 3.06H17.4089C17.5022 3.06 17.5769 3.09267 17.6329 3.158C17.6982 3.214 17.7309 3.28867 17.7309 3.382V12.678C17.7309 12.7713 17.6982 12.8507 17.6329 12.916C17.5769 12.972 17.5022 13 17.4089 13H16.7509ZM20.1552 13C20.0619 13 19.9825 12.972 19.9172 12.916C19.8612 12.8507 19.8332 12.7713 19.8332 12.678V3.382C19.8332 3.28867 19.8612 3.214 19.9172 3.158C19.9825 3.09267 20.0619 3.06 20.1552 3.06H20.8132C20.9065 3.06 20.9812 3.09267 21.0372 3.158C21.1025 3.214 21.1352 3.28867 21.1352 3.382V12.678C21.1352 12.7713 21.1025 12.8507 21.0372 12.916C20.9812 12.972 20.9065 13 20.8132 13H20.1552ZM29.5671 13.14C28.6058 13.14 27.8358 12.846 27.2571 12.258C26.6878 11.6607 26.3751 10.8487 26.3191 9.822L26.3051 9.346L26.3191 8.884C26.3845 7.876 26.7018 7.07333 27.2711 6.476C27.8498 5.87867 28.6105 5.58 29.5531 5.58C30.5891 5.58 31.3918 5.91133 31.9611 6.574C32.5305 7.22733 32.8151 8.114 32.8151 9.234V9.472C32.8151 9.56533 32.7825 9.64467 32.7171 9.71C32.6611 9.766 32.5865 9.794 32.4931 9.794H27.6491V9.92C27.6771 10.5267 27.8591 11.0447 28.1951 11.474C28.5405 11.894 28.9931 12.104 29.5531 12.104C29.9825 12.104 30.3325 12.02 30.6031 11.852C30.8831 11.6747 31.0885 11.4927 31.2191 11.306C31.3031 11.194 31.3638 11.1287 31.4011 11.11C31.4478 11.082 31.5271 11.068 31.6391 11.068H32.3251C32.4091 11.068 32.4791 11.0913 32.5351 11.138C32.5911 11.1847 32.6191 11.25 32.6191 11.334C32.6191 11.5393 32.4885 11.7867 32.2271 12.076C31.9751 12.3653 31.6158 12.6173 31.1491 12.832C30.6918 13.0373 30.1645 13.14 29.5671 13.14ZM31.4851 8.828V8.786C31.4851 8.142 31.3078 7.61933 30.9531 7.218C30.6078 6.80733 30.1411 6.602 29.5531 6.602C28.9651 6.602 28.4985 6.80733 28.1531 7.218C27.8171 7.61933 27.6491 8.142 27.6491 8.786V8.828H31.4851ZM34.8251 13C34.7318 13 34.6525 12.972 34.5871 12.916C34.5311 12.8507 34.5031 12.7713 34.5031 12.678V3.382C34.5031 3.28867 34.5311 3.214 34.5871 3.158C34.6525 3.09267 34.7318 3.06 34.8251 3.06H35.4831C35.5765 3.06 35.6511 3.09267 35.7071 3.158C35.7725 3.214 35.8051 3.28867 35.8051 3.382V12.678C35.8051 12.7713 35.7725 12.8507 35.7071 12.916C35.6511 12.972 35.5765 13 35.4831 13H34.8251ZM40.8054 13.14C39.8441 13.14 39.0741 12.846 38.4954 12.258C37.9261 11.6607 37.6134 10.8487 37.5574 9.822L37.5434 9.346L37.5574 8.884C37.6228 7.876 37.9401 7.07333 38.5094 6.476C39.0881 5.87867 39.8488 5.58 40.7914 5.58C41.8274 5.58 42.6301 5.91133 43.1994 6.574C43.7688 7.22733 44.0534 8.114 44.0534 9.234V9.472C44.0534 9.56533 44.0208 9.64467 43.9554 9.71C43.8994 9.766 43.8248 9.794 43.7314 9.794H38.8874V9.92C38.9154 10.5267 39.0974 11.0447 39.4334 11.474C39.7788 11.894 40.2314 12.104 40.7914 12.104C41.2208 12.104 41.5708 12.02 41.8414 11.852C42.1214 11.6747 42.3268 11.4927 42.4574 11.306C42.5414 11.194 42.6021 11.1287 42.6394 11.11C42.6861 11.082 42.7654 11.068 42.8774 11.068H43.5634C43.6474 11.068 43.7174 11.0913 43.7734 11.138C43.8294 11.1847 43.8574 11.25 43.8574 11.334C43.8574 11.5393 43.7268 11.7867 43.4654 12.076C43.2134 12.3653 42.8541 12.6173 42.3874 12.832C41.9301 13.0373 41.4028 13.14 40.8054 13.14ZM42.7234 8.828V8.786C42.7234 8.142 42.5461 7.61933 42.1914 7.218C41.8461 6.80733 41.3794 6.602 40.7914 6.602C40.2034 6.602 39.7368 6.80733 39.3914 7.218C39.0554 7.61933 38.8874 8.142 38.8874 8.786V8.828H42.7234ZM46.0494 13C45.9561 13 45.8767 12.972 45.8114 12.916C45.7554 12.8507 45.7274 12.7713 45.7274 12.678V6.042C45.7274 5.94867 45.7554 5.874 45.8114 5.818C45.8767 5.75267 45.9561 5.72 46.0494 5.72H46.6794C46.7727 5.72 46.8474 5.75267 46.9034 5.818C46.9687 5.874 47.0014 5.94867 47.0014 6.042V6.532C47.4867 5.89733 48.1634 5.58 49.0314 5.58C50.0674 5.58 50.8001 6.00933 51.2294 6.868C51.4534 6.476 51.7707 6.16333 52.1814 5.93C52.5921 5.69667 53.0541 5.58 53.5674 5.58C54.3327 5.58 54.9581 5.84133 55.4434 6.364C55.9287 6.88667 56.1714 7.64267 56.1714 8.632V12.678C56.1714 12.7713 56.1387 12.8507 56.0734 12.916C56.0174 12.972 55.9427 13 55.8494 13H55.1914C55.0981 13 55.0187 12.972 54.9534 12.916C54.8974 12.8507 54.8694 12.7713 54.8694 12.678V8.758C54.8694 8.03 54.7154 7.50733 54.4074 7.19C54.1087 6.87267 53.7121 6.714 53.2174 6.714C52.7787 6.714 52.4007 6.87733 52.0834 7.204C51.7661 7.52133 51.6074 8.03933 51.6074 8.758V12.678C51.6074 12.7713 51.5747 12.8507 51.5094 12.916C51.4534 12.972 51.3787 13 51.2854 13H50.6274C50.5341 13 50.4547 12.972 50.3894 12.916C50.3334 12.8507 50.3054 12.7713 50.3054 12.678V8.758C50.3054 8.03 50.1467 7.50733 49.8294 7.19C49.5214 6.87267 49.1294 6.714 48.6534 6.714C48.2147 6.714 47.8367 6.87733 47.5194 7.204C47.2021 7.52133 47.0434 8.03467 47.0434 8.744V12.678C47.0434 12.7713 47.0107 12.8507 46.9454 12.916C46.8894 12.972 46.8147 13 46.7214 13H46.0494ZM61.0808 13.14C60.1195 13.14 59.3495 12.846 58.7708 12.258C58.2015 11.6607 57.8888 10.8487 57.8328 9.822L57.8188 9.346L57.8328 8.884C57.8981 7.876 58.2155 7.07333 58.7848 6.476C59.3635 5.87867 60.1241 5.58 61.0668 5.58C62.1028 5.58 62.9055 5.91133 63.4748 6.574C64.0441 7.22733 64.3288 8.114 64.3288 9.234V9.472C64.3288 9.56533 64.2961 9.64467 64.2308 9.71C64.1748 9.766 64.1001 9.794 64.0068 9.794H59.1628V9.92C59.1908 10.5267 59.3728 11.0447 59.7088 11.474C60.0541 11.894 60.5068 12.104 61.0668 12.104C61.4961 12.104 61.8461 12.02 62.1168 11.852C62.3968 11.6747 62.6021 11.4927 62.7328 11.306C62.8168 11.194 62.8775 11.1287 62.9148 11.11C62.9615 11.082 63.0408 11.068 63.1528 11.068H63.8388C63.9228 11.068 63.9928 11.0913 64.0488 11.138C64.1048 11.1847 64.1328 11.25 64.1328 11.334C64.1328 11.5393 64.0021 11.7867 63.7408 12.076C63.4888 12.3653 63.1295 12.6173 62.6628 12.832C62.2055 13.0373 61.6781 13.14 61.0808 13.14ZM62.9988 8.828V8.786C62.9988 8.142 62.8215 7.61933 62.4668 7.218C62.1215 6.80733 61.6548 6.602 61.0668 6.602C60.4788 6.602 60.0121 6.80733 59.6668 7.218C59.3308 7.61933 59.1628 8.142 59.1628 8.786V8.828H62.9988ZM66.3248 13C66.2315 13 66.1521 12.972 66.0868 12.916C66.0308 12.8507 66.0028 12.7713 66.0028 12.678V6.042C66.0028 5.94867 66.0308 5.874 66.0868 5.818C66.1521 5.75267 66.2315 5.72 66.3248 5.72H66.9828C67.0761 5.72 67.1508 5.75267 67.2068 5.818C67.2721 5.874 67.3048 5.94867 67.3048 6.042V6.658C67.5755 6.31267 67.8928 6.04667 68.2568 5.86C68.6301 5.67333 69.0921 5.58 69.6428 5.58C70.5388 5.58 71.2341 5.86933 71.7288 6.448C72.2328 7.01733 72.4848 7.778 72.4848 8.73V12.678C72.4848 12.7713 72.4521 12.8507 72.3868 12.916C72.3308 12.972 72.2561 13 72.1628 13H71.4628C71.3695 13 71.2901 12.972 71.2248 12.916C71.1688 12.8507 71.1408 12.7713 71.1408 12.678V8.8C71.1408 8.13733 70.9775 7.624 70.6508 7.26C70.3335 6.896 69.8715 6.714 69.2648 6.714C68.6768 6.714 68.2101 6.90067 67.8648 7.274C67.5195 7.638 67.3468 8.14667 67.3468 8.8V12.678C67.3468 12.7713 67.3141 12.8507 67.2488 12.916C67.1928 12.972 67.1181 13 67.0248 13H66.3248ZM77.2393 13C75.7647 13 75.0273 12.1787 75.0273 10.536V6.84H73.9353C73.842 6.84 73.7627 6.812 73.6973 6.756C73.6413 6.69067 73.6133 6.61133 73.6133 6.518V6.042C73.6133 5.94867 73.6413 5.874 73.6973 5.818C73.7627 5.75267 73.842 5.72 73.9353 5.72H75.0273V3.382C75.0273 3.28867 75.0553 3.214 75.1113 3.158C75.1767 3.09267 75.256 3.06 75.3493 3.06H76.0073C76.1007 3.06 76.1753 3.09267 76.2313 3.158C76.2967 3.214 76.3293 3.28867 76.3293 3.382V5.72H78.0653C78.1587 5.72 78.2333 5.75267 78.2893 5.818C78.3547 5.874 78.3873 5.94867 78.3873 6.042V6.518C78.3873 6.61133 78.3547 6.69067 78.2893 6.756C78.2333 6.812 78.1587 6.84 78.0653 6.84H76.3293V10.438C76.3293 10.9047 76.4087 11.2593 76.5673 11.502C76.726 11.7353 76.9873 11.852 77.3513 11.852H78.2053C78.2987 11.852 78.3733 11.8847 78.4293 11.95C78.4947 12.006 78.5273 12.0807 78.5273 12.174V12.678C78.5273 12.7713 78.4947 12.8507 78.4293 12.916C78.3733 12.972 78.2987 13 78.2053 13H77.2393ZM82.3861 13.14C81.7327 13.14 81.1821 13.0373 80.7341 12.832C80.2954 12.6173 79.9641 12.3747 79.7401 12.104C79.5254 11.8333 79.4181 11.6093 79.4181 11.432C79.4181 11.3387 79.4507 11.2687 79.5161 11.222C79.5907 11.166 79.6654 11.138 79.7401 11.138H80.3701C80.4634 11.138 80.5474 11.1847 80.6221 11.278C80.8461 11.5393 81.0887 11.7447 81.3501 11.894C81.6114 12.0433 81.9614 12.118 82.4001 12.118C82.8854 12.118 83.2774 12.0247 83.5761 11.838C83.8841 11.642 84.0381 11.376 84.0381 11.04C84.0381 10.816 83.9727 10.634 83.8421 10.494C83.7207 10.3447 83.5061 10.2187 83.1981 10.116C82.8994 10.004 82.4514 9.88267 81.8541 9.752C81.0421 9.57467 80.4634 9.318 80.1181 8.982C79.7821 8.646 79.6141 8.212 79.6141 7.68C79.6141 7.32533 79.7167 6.98933 79.9221 6.672C80.1367 6.34533 80.4447 6.084 80.8461 5.888C81.2567 5.68267 81.7467 5.58 82.3161 5.58C82.9134 5.58 83.4221 5.678 83.8421 5.874C84.2621 6.07 84.5747 6.30333 84.7801 6.574C84.9947 6.83533 85.1021 7.05467 85.1021 7.232C85.1021 7.316 85.0694 7.386 85.0041 7.442C84.9481 7.498 84.8781 7.526 84.7941 7.526H84.2061C84.0941 7.526 84.0007 7.47933 83.9261 7.386C83.7767 7.20867 83.6461 7.07333 83.5341 6.98C83.4314 6.87733 83.2774 6.78867 83.0721 6.714C82.8761 6.63933 82.6241 6.602 82.3161 6.602C81.8681 6.602 81.5227 6.7 81.2801 6.896C81.0374 7.08267 80.9161 7.33 80.9161 7.638C80.9161 7.834 80.9674 8.002 81.0701 8.142C81.1727 8.27267 81.3687 8.394 81.6581 8.506C81.9567 8.618 82.3861 8.73467 82.9461 8.856C83.8327 9.04267 84.4581 9.31333 84.8221 9.668C85.1954 10.0133 85.3821 10.4567 85.3821 10.998C85.3821 11.3993 85.2654 11.7633 85.0321 12.09C84.7987 12.4167 84.4534 12.6733 83.9961 12.86C83.5481 13.0467 83.0114 13.14 82.3861 13.14Z'
            fill='#4E4E4E'
          />
          <motion.path d='M0 17H111' stroke={color5} stroke-width='0.5' />
        </g>
      </svg>
    </motion.div>
  )
};

export default Info;
