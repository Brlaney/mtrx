import Link from 'next/link'
import styles from '@/styles/pages/Samples.module.scss'


const Matrix = () => {
  return (
    <>
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
          className='uk-grid-row uk-grid-row-large uk-child-width-1-3 uk-text-center'
          uk-grid
        >
          {/* Form - user inputs */}
          <div id={styles.card} className='uk-width-1-3'>
            <form
              className={styles.form}
              // onSubmit={}
            >
              <div className={styles.formDiv}>
                <label
                  id={styles.label}
                  className='uk-form-label'
                  htmlFor='form-horizontal-text'
                >
                  Number of members
                </label>
                <div id={styles.controls} className='uk-form-controls'>
                  <input
                    className='uk-input uk-form-width-medium uk-form-large'
                    type='text'
                    placeholder='members, m'
                  />
                </div>
              </div>
              <div className={styles.formDiv}>
                <label
                  id={styles.label}
                  className='uk-form-label'
                  htmlFor='form-horizontal-text'
                >
                  Number of nodes
                </label>
                <div id={styles.controls} className='uk-form-controls'>
                  <input
                    className='uk-input uk-form-width-medium uk-form-large'
                    type='text'
                    placeholder='nodes, n'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Matrix
