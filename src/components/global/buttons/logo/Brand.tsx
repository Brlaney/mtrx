import { IoGridOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import styles from '@/styles/components/Buttons.module.scss';

const GoBack = () => {
  return (
    <motion.div
      className={styles.brandDiv}
      whileHover={{
        scale: 1.2,
        transition: {
          duration: .25
        }
      }}
      whileTap={{ scale: 0.9 }}
    >
      <IoGridOutline
        className={styles.brandIcon}
        size='2rem'
        color='#ffffff'
      />
    </motion.div>
  )
};

export default GoBack;
