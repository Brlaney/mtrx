import * as React from 'react';
import { motion } from 'framer-motion';
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
    nodes: '', // Number of nodes in system
    members: '', // Number of members/elements in system
    reactions: '', // Number of support reactions in system
    units: 1, // 1 => imperial system & 0 => metric system
    uniformCheck: 1, // Are material props uniform or unique for each element?
    coordinates: [], // Input a m x 2 array of (x, y) coordinates for each element
    dof: [], // For each global dof have user define restrained (0) or unrestrained (1) 
    f: [], // For each global dof have user input the externally appl. load
    A: [], // If not uniform props, then prompt user for each element to input props
    E: [], // Same as above -- if they both are uniform, then auto fill with the input value
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
              <motion.div
                initial={{ x: 300, y: 0, opacity: 1 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  delay: 3,
                  x: { type: 'spring', stiffness: 60, velocity: 0.1 },
                  default: { duration: 1 },
                }}
                exit={{ opacity: 0, x: 200 }}
                layout
              >
                <StepOne
                  step={st1}
                  data={data}
                  next={handleNextStep}
                />
              </motion.div>
            )}

            {/* Step 2 - Nodal coordinates */}
            {currentStep === 1 && (
              <motion.div
                initial={{ x: 300, y: 0, opacity: 1 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  delay: 3,
                  x: { type: 'spring', stiffness: 80, velocity: 1 },
                  default: { duration: 1 },
                }}
                layout
              >
                <StepTwo
                  step={st2}
                  data={data}
                  next={handleNextStep}
                  prev={handlePrevStep}
                />
              </motion.div>
            )}

            {/* Step 3 - Boundary conditions: 
            reactions, given forces/displacements */}
            {currentStep === 2 && (
              <motion.div
                initial={{ x: 300, y: 0, opacity: 1 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  delay: 3,
                  x: { type: 'spring', stiffness: 80, velocity: 1 },
                  default: { duration: 1 },
                }}
                layout
              >
                <StepThree
                  step={st3}
                  data={data}
                  next={handleNextStep}
                  prev={handlePrevStep}
                />
              </motion.div>
            )}

            {/* Completed - display the results calculated*/}
            {currentStep === 3 && (
              <motion.div
                initial={{ x: 300, y: 0, opacity: 1 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  delay: 3,
                  x: { type: 'spring', stiffness: 80, velocity: 1 },
                  default: { duration: 1 },
                }}
                layout
              >
                <Results data={data} />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Truss;
