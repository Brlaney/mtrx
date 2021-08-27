import Frames from '@/components/graphs/Frames'
import Link from 'next/link'
import styles from '@/styles/pages/Charts.module.scss'


export default function Beam() {
  return (
    <>
      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Frame example
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
            <Frames />
          </div>
        </div>
      </div>
    </>
  )
}
