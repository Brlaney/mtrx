import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/svgs';
import GoBack from '@/components/buttons/GoBack';
import styles from '@/styles/pages/Learn.module.scss';

const Tests = () => {
  const endpoint = '/';

  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >

      {/* Render the back button component */}
      <GoBack link={endpoint} />

      {/* Page parent container */}
      <motion.div className={styles.container} variants={stagger}>

        {/* Header */}
        <div className={styles.header}>
          <h3 className={styles.title}>
            Bridge Design <span className={styles.span}> topics</span>
          </h3>
        </div>

        <motion.div className={styles.card} variants={stagger}>

          {/* Dynamic topic cards */}
          <motion.div className={styles.contents} variants={fadeInUp}>
            <div className={styles.content}>
              <div className={styles.child}>
                <Link href='/tests/test-one'>
                  <motion.button
                    id={styles.button}
                    className='uk-button uk-button-small'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Test page 1
                  </motion.button>
                </Link>
                <Link href='/tests/test-two'>
                  <motion.button
                    id={styles.button}
                    className='uk-button uk-button-small'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Test page 2
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export default Tests;
