import React from 'react';
import { useEffect } from 'react';
import * as yup from 'yup';
import {
  Formik,
  Form,
  Field,
} from 'formik';
import { motion } from 'framer-motion';
import Forward from '@/components/global/buttons/matrix/Forward';
// import Dotnav from '@/components/global/buttons/matrix/Dotnav';
import styles from '@/styles/components/Steps.module.scss';

const StepOne = (props) => {
  const [radioState, setRadioState] = React.useState(1);
  const handleSubmit = (values) => {
    props.next(values);
  };

  const stepOneSchema = yup.object({
    nodes: yup.number().defined().min(1).max(50),
    members: yup.number().defined().min(1).max(50),
    reactions: yup.number().defined().min(0).max(20),
    units: yup.number().default(1).min(1).max(2),
  });

  useEffect(() => {
    console.log('UseEffect will run if values change');

  }, [props.members, props.nodes, props.reactions, props.units]);

  return (
    <>

      {/* Header */}
      <h2 className={styles.label}>
        Step 1. <span className={styles.span}>
          Describe your truss
        </span>
      </h2>

      {/* Dotnav container for component render */}
      {/* <div className={styles.dotnavContainer}>
        <Dotnav props={props} />
      </div> */}

      {/* Form | Step 1 */}
      <Formik
        validationSchema={stepOneSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form id={styles.form} className='uk-form-horizontal uk-margin-large'>

            {/* Row 1 | Number of elements & nodes */}
            <div className={styles.row}>
              <div className='uk-width-1-2'>
                <h6 className={styles.field}>
                  No. of members
                </h6>
                <Field
                  id={styles.inputm}
                  name='members'
                  placeholder='members (m)'
                  className='uk-input'
                  type='number'
                  min='1'
                  max='50'
                  step='1'
                />
              </div>
              <div className='uk-width-1-2'>
                <h6 className={styles.field}>
                  No. of nodes
                </h6>
                <Field
                  id={styles.inputn}
                  name='nodes'
                  placeholder='nodes (n)'
                  className='uk-input'
                  type='number'
                  min='1'
                  max='50'
                  step='1'
                />
              </div>
            </div>

            {/* Row 2 | Support reactions & units */}
            <div className={styles.row}>
              <div id={styles.buttonColStep1} className='uk-width-1-2'>
                <h6 className={styles.field}>
                  No. of support reactions
                </h6>
                <Field
                  id={styles.inputr}
                  name='reactions'
                  placeholder='reactions (r)'
                  className='uk-input'
                  type='number'
                  min='0'
                  max='20'
                  step='1'
                />
              </div>
              <div id={styles.radio} className='uk-width-1-2'>
                <div className={styles.col}>
                  <h6 className={styles.field}>Units</h6>
                </div>
                <div className={styles.row}>
                  <label className={styles.radiolabel}>
                    <input
                      id={styles.imperial}
                      className='uk-radio'
                      name='units'
                      type='radio'
                      value='1'
                      aria-label='Imperial (US)'
                      checked
                    /> Imperial
                  </label>
                  <label className={styles.radiolabel}>
                    <input
                      id={styles.metric}
                      className='uk-radio'
                      name='units'
                      type='radio'
                      value='2'
                      aria-label='Metric (SI)'
                    />  Metric
                  </label>
                </div>
              </div>
            </div>

            {/* Fordward button if valid inputs */}
            <div id={styles.btnrow} className={styles.row}>
              <div className={styles.buttonRight}>
                <motion.button
                  id={styles.iconButton}
                  type='submit'
                  className='uk-button uk-align-right'
                  whileHover={{
                    zIndex: 1,
                    scale: 1.05,
                    transition: {
                      duration: .3
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Forward />
                </motion.button>
              </div>
            </div>
          </Form>
        )}
    </Formik>
    </>
  )
};

export default StepOne;
