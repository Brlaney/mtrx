import Link from 'next/link'
import StackedBarGraph from '@/components/graphs/StackedBarGraph'
import styles from '@/styles/pages/Charts.module.scss'


export default function StackedBarCharts() {
  return (
    <>
      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Grouped comparison
          </h1>
          <Link href='/charts'>
            <button
              id={styles.back}
              className='uk-button uk-button-default uk-button-small'
            >
              back
            </button>
          </Link>
        </div>

        {/* This pages main content */}
        <div className={styles.content}>
          <div className={styles.chartContainerWide}>
            <StackedBarGraph />
          </div>
        </div>
      </div>
    </>
  )
}
