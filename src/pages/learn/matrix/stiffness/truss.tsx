import 'katex/dist/katex.min.css'
import TeX from '@matejmazur/react-katex'
import GoBack from '@/components/buttons/GoBack'
import styles from '@/styles/pages/Learning.module.scss'

export default function Truss() {
  const endpoint = '/learn';

  const Elem1 = <TeX
    className={styles.math}
    math='c \le 0.62(s)'
  />

  const Elem2 = <TeX
    className={styles.math}
    math='2c + (n-1)s = w'
  />

  const Elem3 = <TeX
    className={styles.math}
    math='\frac{EA}{L}
      \begin{bmatrix}
      1 & -1 \\
      -1 & 1
      \end{bmatrix}
        \begin{bmatrix}
        \Delta_{x1} \\
        \Delta_{x2}
        \end{bmatrix} = \begin{bmatrix}
          F_{x1} \\
          F_{x2}
          \end{bmatrix}'
  />

  const Elem4 = <TeX
    className={styles.math}
    math='\begin{bmatrix}
      \cos^{2}(\theta) & \cos(\theta)sin(\theta) & -\cos^{2}(\theta) & -\cos(\theta)sin(\theta) \\
      \cos(\theta)sin(\theta) & \sin^{2}(\theta) & -\cos(\theta)sin(\theta) & -\sin^{2}(\theta) \\
      -\cos^{2}(\theta) & -\cos(\theta)sin(\theta) & \cos^{2}(\theta) & \cos(\theta)sin(\theta) \\
      -\cos(\theta)sin(\theta) & -\sin^{2}(\theta) & \cos(\theta)sin(\theta) & \sin^{2}(\theta) 
    \end{bmatrix}'
  />

  return (
    <>

      {/* Render the back button component */}
      <GoBack link={endpoint} />

      {/* Page parent container and header */}
      <div className={styles.parent}>

        <div className={styles.topRow} />

        <div className={styles.header}>
          <h1 className={styles.title}>
            Discretize your truss
          </h1>
          <h2 className={styles.subtitle}>
            An app that solves trusses, beams,
            and frames using the stiffness method
          </h2>
        </div>

        <h2 className={styles.section}>Select the desired system to solve</h2>

        {/* 1st Grid row (parent) & 2 grid columns (children)  */}
        <div
          id={styles.grid}
          className='uk-grid-row uk-grid-row-large uk-width-1-1 uk-text-center'
        >
          <div className={styles.element}>
            {Elem1}
          </div>
          <div className={styles.element}>
            {Elem2}
          </div>
        </div>

        {/* 2nd Grid row (parent) & 1 grid columns (children)  */}
        <div
          id={styles.grid}
          className='uk-flex-row uk-flex-middle uk-flex-center uk-width-1-1 uk-text-center'
        >
          <div className={styles.element}>
            {Elem3}
          </div>
        </div>

        {/* 3rd Grid row (parent) & 1 grid columns (children)  */}
        <div
          id={styles.grid}
          className='uk-grid-row uk-grid-row-large uk-width-1-1 uk-text-center'
        >
          <div className={styles.element}>
            {Elem4}
          </div>
        </div>

      </div>
    </>
  )
}
