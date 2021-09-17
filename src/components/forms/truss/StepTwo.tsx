import * as React from 'react';
import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Dotnav } from '@/components/buttons/matrix/Dotnav';
import { Formik, Form, Field } from 'formik';
import { forces, lengths } from '@/lib/config/forms/truss';
import { NodeCoordinates } from '@/lib/types'
import { trussCheck } from '@/lib/utils/matrix/calculate';
import Success from '@/components/alerts/Success';
import Error from '@/components/alerts/Error';
import Back from '@/components/buttons/matrix/Back';
import Forward from '@/components/buttons/matrix/Forward';
import styles from '@/styles/components/Steps.module.scss';

let nodeMatrix = [];

const StepTwo = (props) => {
  const [displayAlert, setDisplayAlert] = React.useState(0);
  const [btnState, setBtnState] = React.useState(0);
  const [unitIndex] = React.useState(props.data.units - 1);
  const [m] = React.useState(props.data.members);
  const [n] = React.useState(props.data.nodes);
  const [r] = React.useState(props.data.reactions);
  const [forceUnits, setForceUnits] = React.useState('');
  const [lengthUnits, setLengthUnits] = React.useState('');

  const check = trussCheck(m, n, r);
  // const degreeOfIndeterminancy = check[2];

  /* The following useEffect hook will set the display alert state variable
  to truthy if the system is indeterminate and falsey if else. */
  useEffect(() => {
    if (check[0] > check[1]) {
      setDisplayAlert(1);
      const degree = check[2];
      return degree;
    } else {
      setDisplayAlert(0);
      setBtnState(1);
    };
  });

  // UseEffect hook to assemble node coordinate matrix
  // useEffect(() => {
  // for (let i = 0; i < n; i++) {
  // let j = i + 1;
  // let addNum1 = j.toString();
  // let c1 = 'x' + addNum1;
  // let c2 = 'y' + addNum1;
  // 
  // nodeMatrix[i] = [j, c1, c2];
  // }
  // }, []);

  // UseEffect hook to map the proper units selected
  useEffect(() => {
    if (unitIndex) {
      setForceUnits(forces[unitIndex]);
      setLengthUnits(lengths[unitIndex]);
    };
  }, [forceUnits, lengthUnits]);

  // Handle next form step
  const handleSubmit = (values) => {
    props.next(values);
  };

  const stepTwoSchema = yup.object({
    x1: yup.number().defined(),
    y1: yup.number().defined(),
    x2: yup.number().defined(),
    y2: yup.number().defined(),
  });

  // Testing the output
  // console.log(currentUnits);
  // console.log(forceUnits);
  // console.log(lengthUnits);
  // console.log(numNodes);
  // console.log(nodeMatrix);

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

              {displayAlert != 0 && (
                <Success props={props} />
              )}

              {displayAlert == 0 && (
                <Error props={props} />
              )}

              {/* Header */}
              <h2 className={styles.label}>
                Step 2. <span className={styles.span}>Specify units</span>
              </h2>

              {/* Iterate n times (where n = {number of nodes})
              and display xn, yn coordinate inputs for the user */}
              {nodeMatrix.map((index: number) => (
                <>
                  <div
                    key={`nodeMatrix[index]`}
                    className='uk-width-1-3'
                  >
                    <h6 className={styles.field}>
                      Node {nodeMatrix[index]} coordinates</h6>
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
                </>
              ))}

              {/* Navigation buttons - back & forward */}
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
                {btnState == 1
                  ?
                  <motion.button
                    id={styles.disabledBtn}
                    type='submit'
                    className='uk-button uk-align-right'
                    whileHover={{
                      scale: 0.90,
                      transition: {
                        duration: .9
                      }
                    }}
                  >
                    <Forward props={props} />
                  </motion.button>
                  :
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
                }
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  )
};

export default StepTwo;
