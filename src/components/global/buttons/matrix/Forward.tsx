import { IoArrowForward } from 'react-icons/io5';
import styles from '@/styles/components/Buttons.module.scss';

const Forward = () => {
  return (
    <>
      <IoArrowForward
        className={styles.forwardIcon}
        size='1.8rem'
      />
    </>
  )
};

export default Forward;
