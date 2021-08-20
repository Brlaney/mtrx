import Link from 'next/link'
import styles from '@/styles/pages/Samples.module.scss'


export default function Texts() {
  return (
    <>
      
      <div className={styles.parent}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            United States
          </h1>
          <h2 className={styles.subtitle}>
            Abortion data visualized
          </h2>
        </div>
        <div id={styles.subheader} className='uk-flex uk-flex-middle uk-text-center'>
          <h2 className={styles.subtitle}>
            Select a state
          </h2>
        </div>

        {/* Link container */}
        <div
          id={styles.linkContainer}
          className='uk-grid-row uk-grid-row-large uk-child-width-1-3 uk-text-center'
          uk-grid
        >
          {/* Link 1 */}
          <div id={styles.card} className='uk-width-1-1'>
            <Link href='/samples/comparison'>
              <a
                id={styles.select}
                className='uk-display-block uk-card uk-card-body uk-card-default uk-link-toggle uk-width-1-1'
              >
                <span id={styles.text} className='uk-text-lead'>
                  Comparison Timeline
                </span>
              </a>
            </Link>
          </div>
          {/* Link 2 */}
          <div id={styles.card} className='uk-width-1-1'>
            <Link href='/samples/messages'>
              <a
                id={styles.select}
                className='uk-display-block uk-card uk-card-body uk-card-default uk-link-toggle uk-width-1-1'
              >
                <span id={styles.text} className='uk-text-lead'>
                  Combined Timeline
                </span>
              </a>
            </Link>
          </div>
          {/* Link 3 */}
          <div id={styles.card} className='uk-width-1-1'>
            <Link href='/samples/stats'>
              <a
                id={styles.select}
                className='uk-display-block uk-card uk-card-body uk-card-default uk-link-toggle uk-width-1-1'
              >
                <span id={styles.text} className='uk-text-lead'>
                  Stats Pie Chart
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
