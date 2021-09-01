import StackedBarGraph from '@/components/graphs/StackedBarGraph'
import GoBack from '@/components/buttons/GoBack'
import styles from '@/styles/pages/Charts.module.scss'


export default function StackedBarCharts() {
  const endpoint = '/charts';

  return (
    <>
      {/* Render the back button component */}
      <GoBack link={endpoint} />

      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Grouped comparison
          </h1>
        </div>

        {/* Render the chart component */}
        <div className={styles.content}>
          <div className={styles.chartContainerWide}>
            <StackedBarGraph />
          </div>
        </div>
      </div>
    </>
  )
}
