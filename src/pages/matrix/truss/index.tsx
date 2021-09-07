import * as React from 'react'
import { step1 as st1 } from '@/lib/config/forms/truss'
import { step2 as st2 } from '@/lib/config/forms/truss'
import { step3 as st3 } from '@/lib/config/forms/truss'
import StepOne from '@/components/forms/truss/StepOne'
import StepTwo from '@/components/forms/truss/StepTwo'
import StepThree from '@/components/forms/truss/StepThree'
import GoBack from '@/components/buttons/GoBack'
import styles from '@/styles/pages/Form.module.scss'

const Truss: React.FC<{ props }> = () => {
  const endpoint = '/matrix';
  const [currentStep, setCurrentStep] = React.useState(0);
  const [data, setData] = React.useState({
    nodes: '',
    members: '',
    reactions: '',
    units: '',
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

            {/* Step 1 - System properties */}
            {currentStep === 0 && (
              <StepOne
                step={st1}
                data={data}
                next={handleNextStep}
              />
            )}

            {/* Step 2 - Specify Units */}
            {currentStep === 1 && (
              <StepTwo
                step={st2}
                data={data}
                next={handleNextStep}
                prev={handlePrevStep}
              />
            )}

            {/* Step 3 - Input node coordinates */}
            {currentStep === 2 && (
              <StepThree
                step={st3}
                data={data}
                next={handleNextStep}
                prev={handlePrevStep}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Truss
