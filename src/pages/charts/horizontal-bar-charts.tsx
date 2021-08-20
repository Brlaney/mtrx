import TestBarGraph from '@/components/graphs/TestBarGraph'
import Link from 'next/link'
import styles from '@/styles/pages/Charts.module.scss'


export default function HorizontalBarCharts() {
  return (
    <>
      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Overall abortion stats
          </h1>
          <Link href='/charts'>
            <button className='uk-button uk-button-primary uk-button-small'>
              back
            </button>
          </Link>
        </div>

        {/* Divider */}
        <div className='uk-heading-divider' />

        {/* This pages main content */}
        <div className={styles.content}>
          <div className={styles.chartContainer}>
            <TestBarGraph />
          </div>
        </div>
      </div>
    </>
  )
}
