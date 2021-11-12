import * as React from 'react';
import * as yup from 'yup';
import Forward from '@/components/global/buttons/matrix/Forward';
import Back from '@/components/global/buttons/matrix/Back';
import { Formik, Form, Field } from 'formik';
import { Selection } from '../form-components/Selection';
import styles from '@/styles/components/Steps.module.scss';

const StepThree = (props) => {
  const [unif] = React.useState(props.data.uniform);
  const [m] = React.useState(props.data.members);
  const [n] = React.useState(props.data.nodes);

  const handleSubmit = (values) => {
    props.next(values);
  };

  const StepThreeSchema = yup.object({
    dof: yup.number().defined(),
    f: yup.number().defined(),
    A: yup.number().defined(),
    E: yup.number().defined(),
  });

  return (
    <>

      {/* Form | Step 3 */}
      <Formik
        validationSchema={StepThreeSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <div className={styles.form}>
            <Form className='uk-grid-small' uk-grid='true'>
       
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
                  <Back />
                </button>
                <button
                  id={styles.iconButton}
                  type='submit'
                  className='uk-button uk-align-right'
                >
                  <Forward />
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
