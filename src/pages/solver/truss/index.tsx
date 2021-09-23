import * as React from 'react';
import { step1 as st1 } from '@/lib/config/forms/truss';
import { step2 as st2 } from '@/lib/config/forms/truss';
import { step3 as st3 } from '@/lib/config/forms/truss';
import StepOne from '@/components/solver/forms/truss/StepOne';
import StepTwo from '@/components/solver/forms/truss/StepTwo';
import StepThree from '@/components/solver/forms/truss/StepThree';
import Results from '@/components/solver/forms/truss/Results';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Form.module.scss';

const Truss: React.FC<{ props }> = () => {
  const endpoint = '/solver';
  const [currentStep, setCurrentStep] = React.useState(0);
  const [data, setData] = React.useState({
    nodes: '',
    members: '',
    reactions: '',
    units: 1,
    x1: '',
    y1: '',
    x2: '',
    y2: '',
    // coordinates: [],
    tests: '',
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
    <div className={styles.container}>
  
      <GoBack link={endpoint} />

      <div id={styles.space} className='uk-height-small uk-flex uk-flex-center' />

      {/* Page parent container and header */}
      <div className={styles.parent}>
        {/* <div className={styles.header}> */}
        {/* </div> */}

        {/* Container - conditionally render the current form step */}
        <div className={styles.grid}>
          <div id={styles.card}>

            {/* Step 1 - System: Nodes, members, units */}
            {currentStep === 0 && (
              <StepOne
                step={st1}
                data={data}
                next={handleNextStep}
              />
            )}

            {/* Step 2 - Nodal coordinates */}
            {currentStep === 1 && (
              <StepTwo
                step={st2}
                data={data}
                next={handleNextStep}
                prev={handlePrevStep}
              />
            )}

            {/* Step 3 - Boundary conditions: 
            reactions, given forces/displacements */}
            {currentStep === 2 && (
              <StepThree
                step={st3}
                data={data}
                next={handleNextStep}
                prev={handlePrevStep}
              />
            )}

            {/* Completed - display the results calculated*/}
            {currentStep === 3 &&  <Results data={data} /> }
          </div>
        </div>
      </div>
    </div>
  )
};

export default Truss;
