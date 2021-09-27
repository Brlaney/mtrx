import * as React from 'react';
import Link from 'next/link';
import GoBack from '@/components/global/buttons/GoBack';
import Forward from '@/components/global/buttons/matrix/Forward';
import Back from '@/components/global/buttons/matrix/Back';
import Bar from '@/components/stiffness/Bar';
import { motion } from 'framer-motion';
import { variants } from '@/lib/config/animations/trussComponents';
import styles from '@/styles/pages/Learning.module.scss';

const Truss: React.FC<{ props }> = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const endpoint = '/stiffness';

  return (
    <motion.div className={styles.container}>
      <GoBack link={endpoint} />
      <div className={styles.parent}>
        <div className={styles.topRow} />
        <div className={styles.header}>
          <h1 className={styles.title}>
            Discretize your truss
          </h1>
          <h2 className={styles.subtitle}>
            Consistantly label local and global degrees of freedom
          </h2>
        </div>
        <motion.div variants={variants} className={styles.imagecard}>
          <Bar />
        </motion.div>
        {currentStep === 0 && (
          <div className={styles.card1}>
            <h2 className={styles.sectionTitle}>
              Stiffness method - theory
            </h2>
            <div className={styles.content}>
              <div className={styles.child}>
              </div>
              <motion.button
                id={styles.iconButton}
                className='uk-button uk-button-small'
                onClick={() => setCurrentStep(1)}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Forward />
              </motion.button>
            </div>
          </div>
        )}

        {/* 2nd component */}
        {currentStep === 1 && (
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>
              Stiffness method - theory
            </h2>
            <div className={styles.content}>
              <div className={styles.child}>
                {/* component here */}
              </div>
              <motion.button
                id={styles.iconButton}
                className='uk-button uk-button-small'
                onClick={() => setCurrentStep(0)}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Back />
              </motion.button>
              <motion.button
                id={styles.iconButton}
                className='uk-button uk-button-small'
                onClick={() => setCurrentStep(2)}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Forward />
              </motion.button>
            </div>
          </div>
        )}

        {/* 3rd component */}
        {currentStep === 2 && (
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>
              Stiffness method - theory
            </h2>
            <div className={styles.content}>
              <motion.button
                id={styles.iconButton}
                className='uk-button uk-button-small'
                onClick={() => setCurrentStep(1)}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Back />
              </motion.button>
              <motion.button
                id={styles.iconButton}
                className='uk-button uk-button-small'
                onClick={() => setCurrentStep(3)}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Forward />
              </motion.button>
            </div>
          </div>
        )}

        {/* 4th component */}
        {currentStep === 3 && (
          <div className={styles.card}>
            <h2 className={styles.title}>
              Congratulations!
            </h2>
            <h3 className={styles.sectionTitle}>
              You have completed the truss portion of the stiffness method tutorial
            </h3>
            <div className={styles.content}>
              <Link href='/learn'>
                <button
                  id={styles.iconButton}
                  className='uk-button uk-margin uk-width-1-2 uk-align-center'
                >
                  Learn more
                </button>
              </Link>
            </div>
            <div className={styles.content}>
              <Link href='/'>
                <button
                  id={styles.iconButton}
                  className='uk-button uk-margin uk-width-1-2 uk-align-center'
                >
                  Back to homepage
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
};

export default Truss;
