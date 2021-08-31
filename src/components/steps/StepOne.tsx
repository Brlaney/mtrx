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
            <div className='formDiv'>
              <div className='controls'>
                <Field
                  id={styles.input}
                  name='m'
                  className='uk-input uk-width-1-1'
                  type='number'
                  min='1'
                  max='50'
                  step='1'
                  placeholder='members, m'
                />
                <ErrorMessage name='members' />
              </div>
            </div>
            <div className='formDiv'>
              <div className='controls'>
                <Field
                  id={styles.input}
                  name='n'
                  className='uk-input uk-width-1-1'
                  type='number'
                  min='1'
                  max='50'
                  step='1'
                  placeholder='nodes, n'
                />
                <ErrorMessage name='nodes' />
              </div>
            </div>
            <button
              type='submit'
              className='uk-button uk-button-primary'
            >
              Continue
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default StepOne
