import * as React from 'react'
import * as yup from 'yup'
import { Formik, Form, Field } from 'formik'
import Forward from '@/components/buttons/Forward'
import { Selection } from '../components/Selection'
import { trussCheck } from '@/lib/utils/matrix/calculate'
import styles from '@/styles/components/Steps.module.scss'

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const stepOneSchema = yup.object({
    nodes: yup.number().required().min(1).max(50).label('Nodes'),
    members: yup.number().required().min(1).max(50).label('Members'),
    reactions: yup.number().required().min(0).max(20).label('Reactions'),
    units: yup.string().required().label('Units'),
  });

  console.log(props.step)

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

              {/* Header */}
              <h2 className={styles.label}>
                Step 1. <span className={styles.span}>Describe your truss</span>
              </h2>

              {/* Input no of members */}
              <div className='uk-width-1-2'>
                <h6 className={styles.field}>Number of members</h6>
              </div>
              <div className='uk-width-1-2'>
                <Field
                  id={styles.input}
                  name='members'
                  placeholder='members (m)'
                  className='uk-input'
                  type='number'
                  min='1'
                  max='50'
                  step='1'
                />
              </div>

              {/* Input number of nodes/connections */}
              <div className='uk-width-1-2'>
                <h6 className={styles.field}>Number of nodes</h6>
              </div>
              <div className='uk-width-1-2'>
                <Field
                  id={styles.input}
                  name='nodes'
                  placeholder='nodes (n)'
                  className='uk-input'
                  type='number'
                  min='1'
                  max='50'
                  step='1'
                />
              </div>

              {/* Define your supports and external forces */}
              <div className='uk-width-1-2'>
                <h6 className={styles.field}>
                  Number of reactions
                </h6>
              </div>
              <div className='uk-width-1-2'>
                <Field
                  id={styles.input}
                  name='reactions'
                  placeholder='reactions (r)'
                  className='uk-input'
                  type='number'
                  min='0'
                  max='20'
                  step='1'
                />
              </div>

              {/* Select your type of units */}
              <div className='uk-width-1-2'>
                <h6 className={styles.field}>Select your units</h6>
              </div>
              <div className='uk-width-1-2'>
                <Field
                  name='units'
                  id={styles.input}
                  className='uk-select'
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
