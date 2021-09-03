import Beams from '@/components/matrix/Beams'
import GoBack from '@/components/buttons/GoBack'
import styles from '@/styles/pages/Charts.module.scss'

export default function Beam() {
  const endpoint = '/learn';
  return (
    <>
      {/* Render the back button component */}
      <GoBack link={endpoint} />

      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Continuous beam graph
          </h1>
        </div>

        {/* Divider */}
        <div className='uk-heading-divider' />

        {/* This pages main content */}
        <div className={styles.content}>
          <div className={styles.chartContainer}>
            <Beams />
          </div>
        </div>
      </div>
    </>
  )
}
