import React from 'react';
import styles from '@/styles/components/Alerts.module.scss';

const Success = ({ props }) => {
  return (
    <>
      <div
        id={styles.formSuccessAlert}
        className='uk-alert-success'
        uk-alert
        {...props}
        >
        <a className='uk-alert-close' uk-close />
        <p className={styles.successMessage}>
          Your system is able to be solved by the matrix displacement method.
          The degree of indeterminancy is.
        </p>
      </div>
    </>
  )
}

export default Success;
