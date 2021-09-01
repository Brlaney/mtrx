import * as React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Forward from '@/components/buttons/Forward'
import { SelectOne } from './components/SelectOne'
import * as yup from 'yup'
import styles from '@/styles/components/Steps.module.scss'

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const stepOneSchema = yup.object({
    nodes: yup.number().required().min(1).max(50).label('Nodes'),
    members: yup.number().required().min(1).max(50).label('Members'),
    units: yup.string().required().label('Units'),
  });

  return (
    <>
      <Formik
        validationSchema={stepOneSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {() => (
          <div className={styles.form}>
            <Form className='uk-grid-small' uk-grid='true'>
              <h2 className={styles.label}>
                Step 1. <span className={styles.span}>Describe your truss</span>
              </h2>
              <div className='uk-width-1-2'>
                <Field
                  id={styles.input}
                  name='members'
                  className='uk-input'
                  type='number'
                  min='1'
                  max='50'
                  step='1'
                  placeholder='Number of members'
                />
              </div>
              <div className='uk-width-1-2'>
                <Field
                  id={styles.input}
                  name='nodes'
                  className='uk-input'
                  type='number'
                  min='1'
                  max='50'
                  step='1'
                  placeholder='Number of nodes'
                />
              </div>
              <div className='uk-width-1-1'>
                <Field
                  name='units'
                  id={styles.input}
                  placeholder='Select units'
                  className='uk-width-1-2'
                  options={[
                    { label: 'Imperial (US)', value: 'imperial' },
                    { label: 'Metric (SI)', value: 'metric' }
                  ]}
                  component={SelectOne}
                />
              </div>
              <div className='uk-width-1-1'>
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
}

export default StepOne
