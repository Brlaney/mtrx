import Frames from '@/components/matrix/Frames'
import Link from 'next/link'
import styles from '@/styles/pages/Charts.module.scss'
import GoBack from '@/components/buttons/GoBack'

export default function Beam() {
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
