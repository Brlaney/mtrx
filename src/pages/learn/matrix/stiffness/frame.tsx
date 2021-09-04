import 'katex/dist/katex.min.css'
import TeX from '@matejmazur/react-katex'
import GoBack from '@/components/buttons/GoBack'
import styles from '@/styles/pages/Learning.module.scss'

export default function Frame() {
  const endpoint = '/learn';

  const Elem1 = <TeX
    className={styles.inlineMath}
    math='\sum ( All \ losses) = H = H_\epsilon + H_f'
  />
  const Elem2 = <TeX
    className={styles.inlineMath}
    math='\implies \ H = [  1 + K_e + \frac{29n^2L}{R^{1.33}} ]\frac{ V^2}{ 2g}'
  />
  const Elem3 = <TeX
    className={styles.blockMath}
    math=' HW_o + \frac{V_1^2}{2g} = TW_o + \frac{V_1^2}{2g} + H'
  />

  return (
    <>

      {/* Render the back button component */}
      <GoBack link={endpoint} />

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

        <h2 className={styles.section}>Select the desired system to solve</h2>

        {/* 1 Grid row (parent) & 2 grid columns (children)  */}
        <div
          id={styles.grid}
          className='uk-grid-row uk-grid-row-large uk-child-width-1-1 uk-text-center'
        >
          <div className={styles.element}>
            {Elem1}
          </div>
          <div className={styles.element}>
            {Elem2}
          </div>
        </div>

        {/* 2 Grid row (parent) & 1 grid columns (children)  */}
        <div
          id={styles.grid}
          className='uk-grid-row uk-grid-row-large uk-child-width-1-1 uk-text-center'
        >
          <div className={styles.element}>
            {Elem3}
          </div>
        </div>
      </div>
    </>
  )
}
