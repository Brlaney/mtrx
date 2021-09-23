import * as React from 'react';
import * as yup from 'yup';
import Forward from '@/components/global/buttons/matrix/Forward';
import Back from '@/components/global/buttons/matrix/Back';
import { Formik, Form, Field } from 'formik';
import { Selection } from '../formik-components/Selection';
import styles from '@/styles/components/Steps.module.scss';

const StepThree = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const StepThreeSchema = yup.object({
    tests: yup.string().default('').nullable(),
  });

  return (
    <>
      <Formik
        validationSchema={StepThreeSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <div className={styles.form}>
            <Form className='uk-grid-small' uk-grid='true'>
              <h2 className={styles.label}>
                Step 3. <span className={styles.span}>Boundary conditions</span>
              </h2>
              <div className='uk-width-1-1'>
                <Field
                  name='tests'
                  id={styles.input}
                  placeholder='Select units'
                  className='uk-select uk-width-1-1'
                  options={[
                    { label: 'Imperial (US)', value: 'imperial' },
                    { label: 'Metric (SI)', value: 'metric' }
                  ]}
                  component={Selection}
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

export default StepThree;
