import { IoReturnUpBackOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '@/styles/components/Buttons.module.scss';

const GoBack = ({ link }) => {
  return (
    <motion.div layout>
      <Link href={link}>
        <motion.button
          id={styles.goback}
          whileHover={{
            zIndex: 1,
            scale: 1.06,
            transition: { duration: 0.2, easing: 'ease'}
          }}
          whileTap={{ scale: 0.9 }}
          className='uk-button uk-button-small uk-align-left'
        >
          <IoReturnUpBackOutline
            className={styles.backIcon}
            size='2rem'
            color='white'
          />
        </motion.button>
      </Link>
    </motion.div>
  )
};

export default GoBack;
