import Link from 'next/link'
import styles from '@/styles/pages/Matrix.module.scss'

export default function Truss() {
  return (
    <>
      {/* Page parent container and header */}
      <div className={styles.parent}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Matrix structural analysis
          </h1>
          <h2 className={styles.subtitle}>
            You selected a Truss system
          </h2>
          <Link href='/matrix'>
            <button
              id={styles.back}
              className='uk-button uk-button-default uk-button-small'
            >
              back
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
