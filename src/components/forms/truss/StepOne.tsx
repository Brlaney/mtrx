import * as React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { motion } from 'framer-motion';
import Forward from '@/components/buttons/Forward';
import { Dotnav } from '@/components/buttons/Dotnav';
import { Selection } from '../components/Selection';
import { selectUnits } from '@/lib/config/forms/truss';
// import { trussCheck } from '@/lib/utils/matrix/calculate';
import styles from '@/styles/components/Steps.module.scss';

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const stepOneSchema = yup.object({
    nodes: yup.number().defined().min(1).max(50),
    members: yup.number().defined().min(1).max(50),
    reactions: yup.number().defined().min(0).max(20),
    units: yup.string().default('').nullable(),
  });

  console.log(props);

  return (
    <>
      
      {/* Dotnav container for component render */}
      <div className={styles.dotnavContainer}>
        <Dotnav step={props.step} />
      </div>

      <Formik
        validationSchema={stepOneSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {() => (
          <div className={styles.form}>
            <Form className='uk-grid-small uk-align-center' uk-grid='true'>

              {/* Header */}
              <h2 className={styles.label}>
                Step 1. <span className={styles.span}>
                  Describe your truss
                </span>
              </h2>

              {/* Input no of members */}
              <div className='uk-width-1-1'>
                <h6 className={styles.field}>
                  Number of members
                </h6>
                <Field
                  id={styles.input}
                  name='members'
                  placeholder='members (m)'
                  className='uk-input'
                  type='number'
                  min='1'
                  max='50'
                  step='1'
                />
              </div>

              {/* Input number of nodes/connections */}
              <div className='uk-width-1-1'>
                <h6 className={styles.field}>
                  Number of nodes
                </h6>
                <Field
                  id={styles.input}
                  name='nodes'
                  placeholder='nodes (n)'
                  className='uk-input'
                  type='number'
                  min='1'
                  max='50'
                  step='1'
                />
              </div>

              {/* Define your supports and external forces */}
              <div className='uk-width-1-1'>
                <h6 className={styles.field}>
                  Number of reactions
                </h6>
                <Field
                  id={styles.input}
                  name='reactions'
                  placeholder='reactions (r)'
                  className='uk-input'
                  type='number'
                  min='0'
                  max='20'
                  step='1'
                />
              </div>

              {/* Select your type of units */}
              <div className='uk-width-1-1'>
                <h6 className={styles.field}>
                  Select your units
                </h6>
                <Field
                  name='units'
                  id={styles.input}
                  className='uk-select'
                  options={selectUnits}
                  component={Selection}
                />
              </div>

              <div className='formButton'>
                <motion.button
                  id={styles.iconButton}
                  type='submit'
                  className='uk-button uk-align-right'
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Forward props={props} />
                </motion.button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  )
};

export default StepOne;
