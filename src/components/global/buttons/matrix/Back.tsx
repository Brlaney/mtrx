import { IoArrowBack } from 'react-icons/io5';
import styles from '@/styles/components/Buttons.module.scss';

const Back = () => {
  return (
    <>
      <IoArrowBack
        className={styles.backIcon}
        size='1.8rem'
        color='white'
      />
    </>
  )
};

export default Back;
