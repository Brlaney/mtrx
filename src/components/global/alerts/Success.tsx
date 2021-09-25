import React from 'react';
import { motion } from 'framer-motion';
import { popUp } from '@/lib/config/animations/alert';
import styles from '@/styles/components/Alerts.module.scss';

const Success = ({ props }) => {
  return (
    <motion.div
    initial='initial'
    animate='animate'
    exit={{ opacity: 0 }}
    layout
  >
      <motion.div
        id={styles.formSuccessAlert}
        className='uk-alert-success uk-width-1-2'
        uk-alert
        variants={popUp}
        {...props}
        >
        <a className='uk-alert-close' uk-close='true' />
        <p className={styles.successMessage}>
          Your system is able to be solved by the matrix displacement method.
          The degree of indeterminancy is.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Success;
