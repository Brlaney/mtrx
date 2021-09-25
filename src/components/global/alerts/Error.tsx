
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/config/animations/svgs/staggered';
import styles from '@/styles/components/Alerts.module.scss';


const Error = ({ props }) => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <motion.div
        id={styles.formErrorAlert}
        className='uk-alert-danger uk-width-1-2'
        uk-alert
        variants={fadeInUp}
        {...props}
      >
        <a className='uk-alert-close' uk-close />
        <p className={styles.errorMessage}>
          Your system is either unstable or determinant.
          Therefore, the matrix displacement method cannot be implemented.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Error;
