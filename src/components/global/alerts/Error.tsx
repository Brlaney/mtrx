import React from 'react';
import styles from '@/styles/components/Alerts.module.scss';

const Error = ({ props }) => {
  return (
    <>
      <div
        id={styles.formErrorAlert}
        className='uk-alert-danger'
        uk-alert
        {...props}
      >
        <a className='uk-alert-close' uk-close />
        <p className={styles.errorMessage}>
          Your system is either unstable or determinant.
          Therefore, the matrix displacement method cannot be implemented.
        </p>
      </div>
    </>
  )
}

export default Error;
