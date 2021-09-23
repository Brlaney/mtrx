import React, { useEffect } from 'react';
import * as yup from 'yup';
import {
  Formik,
  Form,
  Field,
  useField,
  FieldAttributes,
  FieldArray
} from 'formik';
import { motion } from 'framer-motion';
import Forward from '@/components/global/buttons/matrix/Forward';
import { Dotnav } from '@/components/global/buttons/matrix/Dotnav';
import { units } from '@/lib/config/forms/truss';
import styles from '@/styles/components/Steps.module.scss';

const StepOne = (props) => {
  // const [selectedUnits, setSelectedUnits] = React.useState(1);
  // const [label, setLabel] = React.useState('Imperial system (US)');
  const handleSubmit = (values) => {
    props.next(values);
  };

  const stepOneSchema = yup.object({
    nodes: yup.number().defined().min(1).max(50),
    members: yup.number().defined().min(1).max(50),
    reactions: yup.number().defined().min(0).max(20),
    units: yup.number().default(1).min(1).max(2),
  });

  console.log(props);

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
      <div className={styles.dotnavContainer}>
        <Dotnav step={props.step} />
      </div>

      <Formik
        validationSchema={stepOneSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form id={styles.form} className='uk-form-horizontal uk-margin-large'>
            <div className={styles.row}>

              {/* Input no of members */}
              <div className='uk-width-1-2'>
                <h6 className={styles.field}>
                  Number of members
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

              {/* Input number of nodes/connections */}
              <div className='uk-width-1-2'>
                <h6 className={styles.field}>
                  Number of nodes
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

            <div className={styles.row}>

              {/* Define your supports and external forces */}
              <div className='uk-width-1-2'>
                <h6 className={styles.field}>
                  Number of reactions
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

              {/* Select your type of units */}
              <div id={styles.radio} className='uk-width-1-2'>
                <h6 className={styles.field}>Units</h6>
                <div className={styles.col}>
                  <label className={styles.radiolabel}>
                    <input
                      id={styles.inputu}
                      className='uk-radio'
                      type='radio'
                      name='units'
                      value='imperial'
                      aria-label='Imperial (US)'
                    />
                    Imperial (US)
                  </label>
                </div>
                <div className={styles.col}>
                  <label>
                    <input
                      className='uk-radio'
                      type='radio'
                      name='units'
                      value='metric'
                      aria-label='Metric (SI)'
                    />
                    Metric (SI)
                  </label>
                </div>
              </div>
            </div>

            <div className='formButton'>
              <motion.button
                id={styles.iconButton}
                type='submit'
                className='uk-button uk-align-right'
                whileHover={{
                  scale: 1.08,
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
        )}
      </Formik>
    </>
  )
};

export default StepOne;
