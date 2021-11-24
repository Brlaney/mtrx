import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StepOne from '@/components/solver/forms/truss/StepOne';
import StepTwo from '@/components/solver/forms/truss/StepTwo';
import StepThree from '@/components/solver/forms/truss/StepThree';
import Results from '@/components/solver/forms/truss/Results';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Form.module.scss';

import FormNav from '@/components/FormNav';

const Truss: React.FC<{ props }> = () => {
  const endpoint = '/solver';
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({
    nodes: '', // Number of nodes in system
    members: '', // Number of members/elements in system
    reactions: '', // Number of support reactions in system
    units: 1, // 1 => imperial system & 0 => metric system
    uniformCheck: 1, // Are material props uniform or unique for each element?
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

      {/* GoBack button */}
      <GoBack link={endpoint} />

      <div
        id={styles.space}
        className='uk-height-small uk-flex uk-flex-center'
      />

      {/* FormNav component */}
      <FormNav />

      {/* Page parent container and header */}
      <div className={styles.parent}>
        <div className={styles.grid}>
          <div id={styles.card}>

            {/* Step 1 - System: Nodes, members, units */}
            {currentStep === 0 && (
              <motion.div
                initial={{ x: 300, y: 0, opacity: 1 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  x: { type: 'spring', stiffness: 60, velocity: 0.1 },
                  default: { duration: 1 },
                }}
                exit={{ opacity: 0, x: 200 }}
                layout
              >
                <StepOne
                  step={1}
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
                  delay: 0.3,
                  x: { type: 'spring', stiffness: 80, velocity: 1 },
                  default: { duration: 1 },
                }}
                layout
              >
                <StepTwo
                  step={2}
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
                  step={3}
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
