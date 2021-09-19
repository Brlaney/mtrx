import { IoArrowBack } from 'react-icons/io5';
import styles from '@/styles/components/Buttons.module.scss';

const Back = ({ props }) => {
  return (
    <>
      <IoArrowBack
        className={styles.backIcon}
        size='1.8rem'
        {...props}
      />
    </>
  )
};

export default Back;
