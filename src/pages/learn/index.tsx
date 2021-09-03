import Link from 'next/link'
import styles from '@/styles/pages/Learn.module.scss'

export default function Learn() {

  return (
    <>
      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h3 className={styles.title}>
            Select a subject to learn
          </h3>
        </div>

        <h2 className={styles.subtitle}>
          Matrix structural analysis
        </h2>

        {/* This pages main content */}
        <div className={styles.content}>
          <div className={styles.child}>

            {/* Trusses deformation/stresses link */}
            <Link href='/learn/matrix/truss'>
              <button
                id={styles.button}
                className='uk-button uk-button-primary uk-button uk-width-1-1'
              >
                Truss graph
              </button>
            </Link>

            {/* Beams deformation/stresses link */}
            <Link href='/learn/matrix/beam'>
              <button
                id={styles.button}
                className='uk-button uk-button-primary uk-button uk-width-1-1'
              >
                Beam graph
              </button>
            </Link>

            {/* Frames deformation/stresses link */}
            <Link href='/learn/matrix/frame'>
              <button
                id={styles.button}
                className='uk-button uk-button-primary uk-button uk-width-1-1'
              >
                Frame graph
              </button>
            </Link>
          </div>
        </div>

        <h2 className={styles.subtitle}>
          Bridge Design
        </h2>

        {/* This pages main content */}
        <div className={styles.content}>
          <div className={styles.child}>

            {/* Trusses deformation/stresses link */}
            <Link href='/learn/bridge/components'>
              <button
                id={styles.button}
                className='uk-button uk-button-primary uk-button uk-width-1-1'
              >
                Bridge components
              </button>
            </Link>

            {/* Beams deformation/stresses link */}
            <Link href='/learn/bridge/deck-design'>
              <button
                id={styles.button}
                className='uk-button uk-button-primary uk-button uk-width-1-1'
              >
                Deck design
              </button>
            </Link>

            {/* Frames deformation/stresses link */}
            <Link href='/learn/bridge/parapets'>
              <button
                id={styles.button}
                className='uk-button uk-button-primary uk-button uk-width-1-1'
              >
                Parapets
              </button>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}
