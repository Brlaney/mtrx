import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '@/styles/components/Steps.module.scss';

const Results = (props) => {
  return (
    <>
      <div className={styles.card}>

        {/* Header */}
        <h2 className={styles.label}>
          Your system has <span className={styles.span}>
            successfully
          </span> been solved
        </h2>

        <div className='uk-width-1-1'>

          {/* Link to select another system to solve */}
          <div className='formButton'>
            <Link href='/matrix/'>
              <motion.button
                id={styles.iconButton}
                className='uk-button uk-margin-small uk-button-primary uk-width-1-2 uk-align-right'
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Solve more
              </motion.button>
            </Link>
          </div>

          {/* Link to learning page */}
          <div className='formButton'>
            <Link href='/learn/'>
              <motion.button
                id={styles.iconButton}
                className='uk-button uk-margin-small uk-button-primary uk-width-1-2 uk-align-right'
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Study
              </motion.button>
            </Link>
          </div>

          {/* Link to homepage */}
          <div className='formButton'>
            <Link href='/'>
              <motion.button
                id={styles.iconButton}
                className='uk-button uk-margin-small uk-button-primary uk-width-1-2 uk-align-right'
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Homepage
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
};

export default Results;
