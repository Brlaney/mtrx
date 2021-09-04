import 'katex/dist/katex.min.css'
import GoBack from '@/components/buttons/GoBack'
import Elem1 from './components/trusses/Elem1'
import Elem2 from './components/trusses/Elem2'
import styles from '@/styles/pages/Learning.module.scss'

export default function Truss() {
  const endpoint = '/learn';

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
            Consistantly label local and global degrees of freedom
          </h2>
        </div>

        {/* 1st Grid row (parent) */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>
            Stiffness method - theory
          </h2>
          <div className={styles.content}>
            <div className={styles.child}>
              <Elem1 />
            </div>
          </div>
        </div>

        {/* 2nd Grid row (parent) */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>
            Stiffness method - theory
          </h2>
          <div className={styles.content}>
            <div className={styles.child}>
              <Elem2 />
            </div>
          </div>
        </div>

        {/* 3rd Grid row (parent) */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>
            Stiffness method - theory
          </h2>
          <div className={styles.content}>
            <div className={styles.child}>
              Element goes here
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
