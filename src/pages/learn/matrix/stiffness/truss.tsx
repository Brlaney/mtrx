import * as React from 'react'
import Link from 'next/link'
import 'katex/dist/katex.min.css'
import GoBack from '@/components/buttons/GoBack'
import Forward from '@/components/buttons/Forward'
import Back from '@/components/buttons/Back'
import { Elem1 } from './components/trusses/Elem1'
import { Elem2 } from './components/trusses/Elem2'
import { Elem3 } from './components/trusses/Elem3'
import styles from '@/styles/pages/Learning.module.scss'

const Truss: React.FC<{ props }> = ({ props }) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const endpoint = '/learn';

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    handleNextStep();
  };

  console.log(currentStep)

  return (
    <>

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

        {/* 1st Grid row (parent) */}
        {currentStep === 0 && (
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>
              Stiffness method - theory
            </h2>
            <div className={styles.content}>
              <div className={styles.child}>
                <Elem1 />
              </div>
              <button
                className='uk-button uk-button-small'
                onClick={() => setCurrentStep(1)}
              >
                <Forward props={props} />
              </button>
            </div>
          </div>
        )}

        {/* 2nd Grid row (parent) */}
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
                className='uk-button uk-button-small'
                onClick={() => setCurrentStep(0)}
              >
                <Back props={props} />
              </button>
              <button
                className='uk-button uk-button-small'
                onClick={() => setCurrentStep(2)}
              >
                <Forward props={props} />
              </button>
            </div>
          </div>
        )}

        {/* 3rd Grid row (parent) */}
        {currentStep === 2 && (
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>
              Stiffness method - theory
            </h2>
            <div className={styles.content}>
              <Elem3 />
              <button
                className='uk-button uk-button-small'
                onClick={() => setCurrentStep(1)}
              >
                <Back props={props} />
              </button>
              <button
                className='uk-button uk-button-small'
                onClick={() => setCurrentStep(3)}
              >
                <Forward props={props} />
              </button>
            </div>
          </div>
        )}

        {/* 3rd Grid row (parent) */}
        {currentStep === 3 && (
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>
              The tutorial is finished
            </h2>
            <div className={styles.content}>
              <Link href='/'>
                <button
                  className='uk-button uk-button-large uk-button-primary'>
                  Back to homepage
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Truss