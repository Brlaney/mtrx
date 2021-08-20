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
            <button className='uk-button uk-button-primary uk-button-small'>
              back
            </button>
          </Link>
        </div>

        {/* Divider */}
        <div className='uk-heading-divider uk-margin-large-bottom'></div>

        {/* This pages main content */}
        <div className={styles.content}>
          <div className={styles.chartContainer}>
            <StackedBarGraph />
          </div>
        </div>
      </div>
    </>
  )
}
