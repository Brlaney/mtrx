import * as React from 'react';
import { useEffect } from 'react';
import * as yup from 'yup';
import { Dotnav } from '@/components/buttons/Dotnav';
// import { SelectOne } from '../components/SelectOne';
import { Formik, Form, Field } from 'formik';
import Back from '@/components/buttons/Back';
import Forward from '@/components/buttons/Forward';
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
    props.next(values, true);
  };

  const stepTwoSchema = yup.object({
    lengthUnits: yup.string().required(),
    forceUnits: yup.string().required(),
  });

  // Testing the output
  console.log(forceUnits);
  console.log(lengthUnits);

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

              {/* Input coordinates for each node */}
              {props.data.nodes.map((key, i) => (
                <>
                  <div key={i} className='uk-width-1-1'>
                    <h6 className={styles.field}>Coordinates for member {i}</h6>
                    <Field
                      name='length'
                      id={styles.input}
                      className='uk-radio'
                    // component={SelectOne}
                    />
                  </div>
                </>
              ))}

              {/* Input units for length */}
              <div className='uk-width-1-3'>
                <h6 className={styles.field}>Forces</h6>
              </div>
              <div className='uk-width-2-3'>
                <Field
                  name='length'
                  id={styles.input}
                  className='uk-radio uk-margin'
                // component={SelectOne}
                />
              </div>

              <div className='uk-width-1-1'>
                <button
                  id={styles.iconButton}
                  type='button'
                  className='uk-button uk-align-left'
                  onClick={() => props.prev(values)}
                >
                  <Back props={props} />
                </button>
                <button
                  id={styles.iconButton}
                  type='submit'
                  className='uk-button uk-align-right'
                >
                  <Forward props={props} />
                </button>
              </div>

            </Form>
          </div>
        )}
      </Formik>
    </>
  )
};

export default StepTwo;
