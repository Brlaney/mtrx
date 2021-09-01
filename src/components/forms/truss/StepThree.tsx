import * as React from 'react'
import * as yup from 'yup'
import Forward from '@/components/buttons/Forward'
import Back from '@/components/buttons/Back'
import {
  Formik,
  Form,
  Field,
} from 'formik'
import { Selection } from '../components/Selection'
import { SelectOne } from '../components/SelectOne'
import styles from '@/styles/components/Steps.module.scss'

const StepThree = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  const StepThreeSchema = yup.object({
    units: yup.string().required().label('Units'),
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
                Step 2. <span className={styles.span}>Node coordinates</span>
              </h2>
              <div className='uk-width-1-1'>
                <Field
                  name='units'
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
                <Field
                  name='length'
                  id={styles.input}
                  className='uk-margin'
                  options={[
                    { label: 'ft', value: 'feet' },
                    { label: 'in', value: 'inches' },
                    { label: 'm', value: 'meter' },
                    { label: 'cm', value: 'centimeter' },
                  ]}
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

export default StepThree
