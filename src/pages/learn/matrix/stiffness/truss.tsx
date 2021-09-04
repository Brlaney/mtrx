import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'katex/dist/katex.min.css'
import GoBack from '@/components/buttons/GoBack'
import Forward from '@/components/buttons/Forward'
import Back from '@/components/buttons/Back'
import { Elem1 } from './components/trusses/Elem1'
import { Elem2 } from './components/trusses/Elem2'
import { Elem3 } from './components/trusses/Elem3'
import { motion } from 'framer-motion'
import styles from '@/styles/pages/Learning.module.scss'

const easing = [0.5, -0.03, 0.06, 1]

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: i + 20,
    },
  }),
  hidden: { opacity: 0 },
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}

const Truss: React.FC<{ props }> = ({ props }) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const endpoint = '/learn';

  return (
    <motion.div className={styles.container}>

      {/* Render the back button component */}
      <GoBack link={endpoint} />

      {/* Page parent container and header */}
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
          <motion.img
            className={styles.img}
            whileHover={{
              scale: 1.2,
              transition: {
                duration: .2
              }
            }}
            alt='bar-element'
            src='/bar-member.svg'
            width={326}
            height={73}
          />
        </motion.div>

        {/* 1st component */}
        {currentStep === 0 && (
          <div className={styles.card1}>
            <h2 className={styles.sectionTitle}>
              Stiffness method - theory
            </h2>
            <div className={styles.content}>
              <div className={styles.child}>
                <Elem1 />
              </div>
              <button
                id={styles.iconButton}

                className='uk-button uk-button-small'
                onClick={() => setCurrentStep(1)}
              >
                <Forward props={props} />
              </button>
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
                <Elem2 />
              </div>
              <button
                id={styles.iconButton}
                className='uk-button uk-button-small'
                onClick={() => setCurrentStep(0)}
              >
                <Back props={props} />
              </button>
              <button
                id={styles.iconButton}
                className='uk-button uk-button-small'
                onClick={() => setCurrentStep(2)}
              >
                <Forward props={props} />
              </button>
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
              <Elem3 />
              <button
                id={styles.iconButton}
                className='uk-button uk-button-small'
                onClick={() => setCurrentStep(1)}
              >
                <Back props={props} />
              </button>
              <button
                id={styles.iconButton}
                className='uk-button uk-button-small'
                onClick={() => setCurrentStep(3)}
              >
                <Forward props={props} />
              </button>
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
                  className='uk-button uk-button-primary uk-margin uk-width-1-2 uk-align-center'
                >
                  Learn more
                </button>
              </Link>
            </div>
            <div className={styles.content}>
              <Link href='/'>
                <button
                  id={styles.iconButton}
                  className='uk-button uk-button-primary uk-margin uk-width-1-2 uk-align-center'
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
}

export default Truss
