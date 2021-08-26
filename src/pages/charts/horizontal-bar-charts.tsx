import HorizontalBarGraph from '@/components/graphs/HorizontalBarGraph'
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
            <button
              id={styles.back}
              className='uk-button uk-button-default uk-button-small'
            >
              back
            </button>
          </Link>
        </div>

        {/* Divider */}
        <div className='uk-heading-divider' />

        {/* This pages main content */}
        <div className={styles.content}>
          <div className={styles.chartContainer}>
            <HorizontalBarGraph />
          </div>
        </div>
      </div>
    </>
  )
}
