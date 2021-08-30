import * as React from 'react'
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

const names = [
  'Truss',
  'Beam',
  'Frame'
]

const Matrix: React.FC<Props> = ({ onSubmit, onClick }) => {
  const [selected, setSelected] = React.useState<Selected>({
    selection: ''
  })
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

  
  /* 
  Create an onChange function for the condition: the user has input 
  a number of nodes, members, supports, and any externally applied loads
  then verify the system is structurally stable based on the equations
  for frames, beams, and trusses.   
  */


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
          <h1 className={styles.title}>
            Matrix structural analysis
          </h1>
          <h2 className={styles.subtitle}>
            An app that solves trusses, beams,
            and frames using the stiffness method
          </h2>
        </div>

        {/* Link container */}
        <div
          id={styles.linkContainer}
          className='uk-grid-row uk-grid-row-large uk-child-width-1-1 uk-text-center'
        >
          <div id={styles.card} className='uk-width-1-1'>

            {/* Form begins */}
            <form
              id={styles.form}
              className='uk-grid uk-width-1-1'
              onSubmit={handleSubmit}
            >

              {/* User is prompted to select the type of system to solve */}
              <div id={styles.formSelect} className='uk-width-1-1'>
                <div id={styles.selectionTitle} className='uk-form-label'>
                  Select a system
                </div>

                {/* Maps each index of system options to select from */}
                <div id={styles.selectionControl} className='uk-form-controls'>
                  <select id={styles.select} className='uk-select'>
                    {values.systems.map((elements, index) => (
                      <option
                        key={index}
                        id={styles.selection}
                        value={names[index]}
                        // onClick={() => { () => toggleActive({names[index]}) }}
                      >
                        {names[index]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Input section I */}
              <div id={styles.formDiv} className='uk-width-1-2'>
                <div id={styles.controls} className='uk-form-controls'>

                  {/* User prompted to input the number of members, m */}
                  <input
                    id={styles.input}
                    name='m'
                    className='uk-input'
                    type='number'
                    min='1'
                    max='99'
                    step='1'
                    placeholder='members, m'
                    value={values.members}
                    onChange={handleChange2('members')}
                  />
                </div>
              </div>

              {/* Input section II */}
              <div id={styles.formDiv} className='uk-width-1-2'>
                <div id={styles.controls} className='uk-form-controls'>

                  {/* User prompted to input the number of nodes, n */}
                  <input
                    id={styles.input}
                    name='n'
                    className='uk-input'
                    type='number'
                    min='1'
                    max='99'
                    step='1'
                    placeholder='nodes, n'
                    value={values.nodes}
                    onChange={handleChange2('nodes')}
                  />
                </div>
              </div>

              {/* Bottom section with submit button */}
              <div id={styles.formDiv} className='uk-width-1-1'>
                <button
                  id={styles.submit}
                  className='uk-button uk-button-default'
                  type='submit'
                >
                  Submit
                </button>
              </div>
            </form> {/* Form ends */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Matrix
