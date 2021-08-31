import * as React from 'react'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from '@/styles/pages/Matrix.module.scss'


interface Values {
  activeSystem: object | number;
  systems: object[];
  nodes: number;
  members: number;
}

interface Selected {
  selection: string;
}

interface Props {
  onSubmit: (values: Values) => void;
  onClick: (selected: Selected) => void;
}

const Truss: React.FC<Props> = ({ onSubmit, onClick }) => {
  const [step, setStep] = React.useState(0);

  const completeStep = () => {
    setStep(cur => cur + 1)
  };

  const [values, setValues] = React.useState<Values>({
    activeSystem: null,
    systems: [
      { id: '1' },
      { id: '2' },
      { id: '3' }
    ],
    nodes: null,
    members: null
  })

  // The following should allow only one selection at a time
  const toggleActive = (fieldName: keyof Values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues({ ...values, [fieldName]: e.currentTarget.value })
  }

  // Handle value changes --> change state values
  const handleChange2 = (fieldName: keyof Values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [fieldName]: e.currentTarget.value })
  }

  // When the form is submitted - the user clicks the submit button
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('submit', values);
  }

  return (
    <>
      {/* Page parent container and header */}
      <div className={styles.parent}>
        <div className={styles.header}>
          <h2 className={styles.title}>
          Your structural system: <span className={styles.span}>Truss</span>
          </h2>
          <Link href='/matrix/'>
            <button
              id={styles.back}
              className='uk-button uk-button-default uk-button-small'
            >
              back
            </button>
          </Link>
        </div>

        {/* Link container */}
        <div
          id={styles.linkContainer}
          className='uk-grid-row uk-grid-row-large uk-child-width-1-1 uk-text-center'
        >
          <div id={styles.card}>

            {/* Form begins */}
            <form
              className='form'
              onSubmit={handleSubmit}
            >

              {/* Input section I */}
              <div id={styles.formDiv} className='uk-width-1-1'>
                <div id={styles.controls} className='uk-form-controls'>

                  {/* User prompted to input the number of members, m */}
                  <input
                    id={styles.input}
                    name='m'
                    className='uk-input uk-width-1-1'
                    type='number'
                    min='1'
                    max='99'
                    step='1'
                    placeholder='members, m'
                  // value={values.members}
                  // onChange={handleChange2('members')}
                  />
                </div>
              </div>

              {/* Input section II */}
              <div id={styles.formDiv} className='uk-width-1-1'>
                <div id={styles.controls} className='uk-form-controls'>

                  {/* User prompted to input the number of nodes, n */}
                  <input
                    id={styles.input}
                    name='n'
                    className='uk-input uk-width-1-1'
                    type='number'
                    min='1'
                    max='99'
                    step='1'
                    placeholder='nodes, n'
                  // value={values.nodes}
                  // onChange={handleChange2('nodes')}
                  />
                </div>
              </div>

              {/* Bottom section with submit button */}
              <div id={styles.formDiv} className='uk-width-1-1'>
                <button
                  id={styles.submit}
                  className='uk-button uk-button-default'
                  type='submit'
                  onClick={completeStep}
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Truss
