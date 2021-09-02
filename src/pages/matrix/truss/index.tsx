import * as React from 'react'
import { step1 as st1 } from '@/lib/config/forms/truss'
import { step2 as st2 } from '@/lib/config/forms/truss'
import { step3 as st3 } from '@/lib/config/forms/truss'
import StepOne from '@/components/forms/truss/StepOne'
import StepTwo from '@/components/forms/truss/StepTwo'
import StepThree from '@/components/forms/truss/StepThree'
import GoBack from '@/components/buttons/GoBack'
import styles from '@/styles/pages/Matrix.module.scss'

const Truss: React.FC<{ props }> = () => {
  const endpoint = '/matrix';
  const [currentStep, setCurrentStep] = React.useState(0);
  const [data, setData] = React.useState({
    nodes: '',
    members: '',
    reactions: '',
    units: '',
    lengthUnits: '',
    forceUnits: ''
  });

  const makeRequest = (formData) => {
    console.log('Form Submitted', formData);
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

  // Console the data to test the output
  // console.log('data', data);

  return (
    <>
      {/* Go back a page - component */}
      <GoBack link={endpoint} />

      {/* Page parent container and header */}
      <div className={styles.parent}>
        <div className={styles.header}>
        </div>

        {/* Container - conditionally render the current form step */}
        <div className={styles.grid}>
          <div id={styles.card}>

            {/* Step 1 */}
            {currentStep === 0 && (
              <StepOne
                step={st1}
                next={handleNextStep}
                data={data}
              />
            )}

            {/* Step 2 */}
            {currentStep === 1 && (
              <StepTwo
                step={st2}
                next={handleNextStep}
                prev={handlePrevStep}
                data={data}
              />
            )}

            {/* Step 3 */}
            {currentStep === 2 && (
              <StepThree
                step={st3}
                next={handleNextStep}
                prev={handlePrevStep}
                data={data}
              />
            )}

          </div>
        </div>
      </div>
    </>
  )
}

export default Truss
