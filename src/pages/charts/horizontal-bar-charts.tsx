import HorizontalBarGraph from '@/components/graphs/HorizontalBarGraph'
import GoBack from '@/components/buttons/GoBack'
import styles from '@/styles/pages/Charts.module.scss'

export default function HorizontalBarCharts() {
  const endpoint = '/charts';
  
  return (
    <>
      <GoBack link={endpoint} />
      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Overall abortion stats
          </h1>
        </div>

        {/* Divider */}
        <div className='uk-heading-divider' />

        {/* This pages main content */}
        <div className={styles.content}>
          <div className={styles.chartContainerWide}>
            <HorizontalBarGraph />
          </div>
        </div>
      </div>
    </>
  )
}
