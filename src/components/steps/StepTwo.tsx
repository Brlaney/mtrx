import * as React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import styles from '@/styles/components/Steps.module.scss'

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const stepTwoSchema = yup.object({
    units: yup.string().required().label('Units'),
  });

  return (
    <>
      <Formik
        validationSchema={stepTwoSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className={styles.form}>
            <div className='formDiv'>
              <div className='controls'>
                <Field
                  name='units'
                  id={styles.input}
                  placeholder='Select units'
                  className='uk-select uk-width-1-1'
                  options={[
                    { label: 'Imperial (US)', value: 'imperial' },
                    { label: 'Metrix (SI)', value: 'metric' }
                  ]}
                />
                <ErrorMessage name='units' />
              </div>
            </div>
            <button
              type='button'
              className='uk-button uk-button-primary uk-margin-small'
              onClick={() => props.prev(values)}
            >
              Back
            </button>
            <button
              type='submit'
              className='uk-button uk-button-primary uk-margin-small'
            >
              Continue
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default StepTwo
