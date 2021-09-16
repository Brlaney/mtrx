import React, { useEffect } from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { motion } from 'framer-motion';
import Forward from '@/components/buttons/matrix/Forward';
import { Dotnav } from '@/components/buttons/matrix/Dotnav';
import { Selection } from '@/components/forms/formik-components/Selection';
import { selectUnits } from '@/lib/config/forms/truss';
// import { trussCheck } from '@/lib/utils/matrix/calculate';
import styles from '@/styles/components/Steps.module.scss';

interface Values {
  nodes: number;
  members: number;
  reactions: number;
  units: string;
};

const StepOne = (props) => {
  const [m, setM] = React.useState('');
  const [n, setN] = React.useState('');
  const [r, setR] = React.useState('');

  const handleSubmit = (values) => {
    props.next(values);
  };

  console.log(props);

  useEffect(() => {
    console.log('UseEffect will run if values change');
  }, [m, n, r]);

  return (
    <>
      {/* Dotnav container for component render */}
      <div className={styles.dotnavContainer}>
        <Dotnav step={props.step} />
      </div>

      <Formik
        initialValues={{
          nodes: 2,
          members: 1,
          reactions: 0,
          units: '',
        }}
        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {(values) => (
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
                  id={styles.inputm}
                  name='members'
                  placeholder='members (m)'
                  className='uk-input'
                  type='number'
                  min='1'
                  max='50'
                  step='1'
                  value={m}
                  onChange={e => setM(e.target.value)}
                />
              </div>

              {/* Input number of nodes/connections */}
              <div className='uk-width-1-1'>
                <h6 className={styles.field}>
                  Number of nodes
                </h6>
                <Field
                  id={styles.inputn}
                  name='nodes'
                  placeholder='nodes (n)'
                  className='uk-input'
                  type='number'
                  min='2'
                  max='50'
                  step='1'
                  value={n}
                  onChange={e => setN(e.target.value)}
                />
              </div>

              {/* Define your supports and external forces */}
              <div className='uk-width-1-1'>
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
                  value={r}
                  onChange={e => setR(e.target.value)}
                />
              </div>

              {/* Select your type of units */}
              <div className='uk-width-1-1'>
                <h6 className={styles.field}>
                  Select your units
                </h6>
                <Field
                  id={styles.inputu}
                  name='units'
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
