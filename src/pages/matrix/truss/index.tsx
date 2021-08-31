import * as React from 'react'
import Link from 'next/link'
import * as Yup from 'yup'
import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik'
import StepOne from '@/components/steps/StepOne'
import StepTwo from '@/components/steps/StepTwo'

import styles from '@/styles/pages/Matrix.module.scss'

const Truss: React.FC<{}> = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [data, setData] = React.useState({
    nodes: '',
    members: '',
    units: ''
  });

  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  console.log('data', data);

  // Since program begins at 0, add 1 to the 
  // currentStep for a better user-experience.
  const correctedStep = currentStep + 1;

  return (
    <>
      {/* Page parent container and header */}
      <div className={styles.parent}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Your structural system: <span className={styles.span}>Truss</span>
          </h2>
          <h3 className={styles.currentStep}>
            Currently on step: <span className={styles.span}>{correctedStep}</span>
          </h3>
          <Link href='/matrix/'>
            <button
              id={styles.back}
              className='uk-button uk-button-default uk-button-small'
            >
              back
            </button>
          </Link>
        </div>

        {/* Container - conditionally render the current form step */}
        <div className={styles.container}>
          <div id={styles.card}>

            {/* Step 1 */}
            {currentStep === 0 && (
              <StepOne next={handleNextStep} data={data} />
            )}

            {/* Step 2 */}
            {currentStep === 1 && (
              <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Truss
