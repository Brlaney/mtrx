import * as React from 'react'
import * as yup from 'yup'
import { imperialL, metricL, imperialF, metricF } from '@/lib/config/forms/truss'
import { Dotnav } from '@/components/buttons/Dotnav'
import { SelectOne } from '../components/SelectOne'
import { Formik, Form, Field } from 'formik'
import Back from '@/components/buttons/Back'
import Forward from '@/components/buttons/Forward'
import styles from '@/styles/components/Steps.module.scss'

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  const stepTwoSchema = yup.object({
    lengthUnits: yup.string().required(),
    forceUnits: yup.string().required(),
  });

  // Testing to see if exists
  // console.log(props.data.units);

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

              {/* Input units for length */}
              <div className='uk-width-1-3'>
                <h6 className={styles.field}>Length/coordinates</h6>
              </div>
              <div className='uk-width-2-3'>
                <Field
                  name='length'
                  id={styles.input}
                  className='uk-radio'
                  options={props.data.units === 'imperial' ? imperialL : metricL}
                  component={SelectOne}
                />
              </div>

              {/* Input units for length */}
              <div className='uk-width-1-3'>
                <h6 className={styles.field}>Forces</h6>
              </div>
              <div className='uk-width-2-3'>
                <Field
                  name='length'
                  id={styles.input}
                  className='uk-radio uk-margin'
                  options={props.data.units === 'imperial' ? imperialF : metricF}
                  component={SelectOne}
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
}

export default StepTwo
