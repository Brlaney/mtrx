import * as React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import styles from '@/styles/components/Steps.module.scss'

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const stepOneSchema = yup.object({
    nodes: yup.number().required().min(1).max(50).label('Nodes'),
    members: yup.number().required().min(1).max(50).label('Members'),
  });

  return (
    <>
      <Formik
        validationSchema={stepOneSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <h2 className={styles.label}>
              Step 1. <span className={styles.span}>System properties</span>  
            </h2>
            <div className='formDiv'>
              <div className='controls'>
                <Field
                  id={styles.input}
                  name='m'
                  className='uk-input uk-width-1-1 uk-margin-small'
                  type='number'
                  min='1'
                  max='50'
                  step='1'
                  placeholder='Number of members'
                />
                <ErrorMessage name='members' />
              </div>
            </div>
            <div className='formDiv'>
              <div className='controls'>
                <Field
                  id={styles.input}
                  name='n'
                  className='uk-input uk-width-1-1 uk-margin-small'
                  type='number'
                  min='1'
                  max='50'
                  step='1'
                  placeholder='Number of nodes'
                />
                <ErrorMessage name='nodes' />
              </div>
            </div>
            <div className='formDiv'>
              <button
                id={styles.submit}
                type='submit'
                className='uk-button uk-button-primary uk-width-1-1 uk-margin-small'
              >
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default StepOne
