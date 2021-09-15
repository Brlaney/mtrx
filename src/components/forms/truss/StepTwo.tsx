import * as React from 'react';
import { useEffect } from 'react';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { Dotnav } from '@/components/buttons/matrix/Dotnav';
// import { SelectOne } from '../components/SelectOne';
import { Formik, Form, Field } from 'formik';
import Back from '@/components/buttons/matrix/Back';
import Forward from '@/components/buttons/matrix/Forward';
import styles from '@/styles/components/Steps.module.scss';

const StepTwo = (props) => {
  const [currentUnits] = React.useState(props.data.units);
  const [numNodes, setNumNodes] = React.useState(props.data.nodes);
  const [forceUnits, setForceUnits] = React.useState('');
  const [lengthUnits, setLengthUnits] = React.useState('');

  useEffect(() => {
    if (currentUnits === 'imperial1') {
      setForceUnits('lbs');
      setLengthUnits('in');
    };

    if (currentUnits === 'imperial2') {
      setForceUnits('lbs');
      setLengthUnits('ft');
    };

    if (currentUnits === 'imperial3') {
      setForceUnits('kips');
      setLengthUnits('in');
    };

    if (currentUnits === 'imperial4') {
      setForceUnits('kips');
      setLengthUnits('ft');
    };

    if (currentUnits === 'metric1') {
      setForceUnits('N');
      setLengthUnits('cm');
    };

    if (currentUnits === 'metric2') {
      setForceUnits('N');
      setLengthUnits('m');
    };

    if (currentUnits === 'metric3') {
      setForceUnits('KN');
      setLengthUnits('cm');
    };

    if (currentUnits === 'metric4') {
      setForceUnits('KN');
      setLengthUnits('m');
    };
  }, [forceUnits, lengthUnits]);

  const handleSubmit = (values) => {
    props.next(values);
  };

  const stepTwoSchema = yup.object({
    x1: yup.number().defined().min(0),
    y1: yup.number().defined().min(0),
    x2: yup.number().defined().min(0),
    y2: yup.number().defined().min(0)
  });

  // Testing the output
  // console.log(forceUnits);
  // console.log(lengthUnits);
  console.log(numNodes);

  return (
    <>

      {/* Dotnav container for component render */}
      <div className={styles.dotnavContainer}>
        <Dotnav step={props.step} />
      </div>

      {/* Form parent container */}
      <Formik
        validationSchema={stepTwoSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <div className={styles.form}>
            <Form className='uk-grid-small' uk-grid='true'>

              {/* Header */}
              <h2 className={styles.label}>
                Step 2. <span className={styles.span}>Specify units</span>
              </h2>

              {/* User inputs the members coordinates for node 1 */}
              <div className='uk-width-1-3'>
                <h6 className={styles.field}>Node 1 coordinates</h6>
              </div>
              <div className='uk-width-1-3'>
                <Field
                  name='x1'
                  id={styles.input}
                  className='uk-input'
                  type='text'
                  placeholder='x1'
                />
              </div>
              <div className='uk-width-1-3'>
                <Field
                  name='y1'
                  id={styles.input}
                  className='uk-input'
                  type='text'
                  placeholder='y1'
                />
              </div>

              {/* User inputs the members coordinates for node 2 */}
              <div className='uk-width-1-3'>
                <h6 className={styles.field}>Node 2 coordinates</h6>
              </div>
              <div className='uk-width-1-3'>
                <Field
                  name='x2'
                  id={styles.input}
                  className='uk-input'
                  type='text'
                  placeholder='x2'
                />
              </div>
              <div className='uk-width-1-3'>
                <Field
                  name='y2'
                  id={styles.input}
                  className='uk-input'
                  type='text'
                  placeholder='y2'
                />
              </div>

              <div className='uk-width-1-1'>
                <motion.button
                  id={styles.iconButton}
                  type='button'
                  className='uk-button uk-align-left'
                  onClick={() => props.prev(values)}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Back props={props} />
                </motion.button>
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

export default StepTwo;
