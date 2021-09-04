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
            Select a topic to learn
          </h3>
        </div>

        {/* Card 1 */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>
            Stiffness method - theory
          </h2>
          <div className={styles.content}>
            <div className={styles.child}>
              <Link href='/learn/matrix/stiffness/truss'>
                <button
                  id={styles.button}
                  className='uk-button'
                >
                  Truss
                </button>
              </Link>
              <Link href='/learn/matrix/stiffness/beam'>
                <button
                  id={styles.button}
                  className='uk-button'
                >
                  Beam
                </button>
              </Link>
              <Link href='/learn/matrix/stiffness/frame'>
                <button
                  id={styles.button}
                  className='uk-button'
                >
                  Frame
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>
            Deformation graphs
          </h2>
          <div className={styles.content}>
            <div className={styles.child}>
              <Link href='/learn/matrix/deformations/truss'>
                <button
                  id={styles.button}
                  className='uk-button uk-width-1-1'
                >
                  Truss graph
                </button>
              </Link>
              <Link href='/learn/matrix/deformations/beam'>
                <button
                  id={styles.button}
                  className='uk-button uk-width-1-1'
                >
                  Beam graph
                </button>
              </Link>
              <Link href='/learn/matrix/deformations/frame'>
                <button
                  id={styles.button}
                  className='uk-button uk-width-1-1'
                >
                  Frame graph
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>
            Bridge Design
          </h2>
          <div className={styles.content}>
            <div className={styles.child}>
              <Link href='/learn/bridge/components'>
                <button
                  id={styles.button}
                  className='uk-button uk-width-1-1'
                >
                  components
                </button>
              </Link>
              <Link href='/learn/bridge/deck-design'>
                <button
                  id={styles.button}
                  className='uk-button uk-width-1-1'
                >
                  Deck design
                </button>
              </Link>
              <Link href='/learn/bridge/parapets'>
                <button
                  id={styles.button}
                  className='uk-button uk-width-1-1'
                >
                  Parapets
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
