import * as React from 'react'
import StepOne from '@/components/forms/truss/StepOne'
import StepTwo from '@/components/forms/truss/StepTwo'
import GoBack from '@/components/buttons/GoBack'
import styles from '@/styles/pages/Matrix.module.scss'

const Truss: React.FC<{props}> = () => {
  const endpoint = '/matrix';
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

  // Console the data to test the output
  // console.log('data', data);

  return (
    <>
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
