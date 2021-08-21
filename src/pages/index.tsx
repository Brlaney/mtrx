import Image from 'next/image'
import Footer from '@/components/Footer'
import styles from '@/styles/pages/Home.module.scss'


export default function Home() {
  return (
    <>
      {/* Main parent container */}
      <div className={styles.parent}>

        {/* Homepage header container */}
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome, to
            <span id={styles.next}> Next Charts</span>
          </h1>
          <h4 className={styles.subtitle}>A sample Next app that features stunning Charts</h4>
        </div>

        <div className={styles.section}>
          <h2 className='uk-header-small uk-text-lead uk-text-center'>
            Featuring the following tech
          </h2>
        </div>

        {/* Grid row I - children = columns/cards */}
        <div className={styles.grid}>

          {/* Grid column I */}
          <div id={styles.image} className='uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-dark'>
            <Image src='/brands/Uikit.png' width={200} height={200} />
          </div>

          {/* Grid column II */}
          <div id={styles.image} className='uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-dark'>
            <Image src='/brands/chartjs.png' width={200} height={200} />
          </div>

          {/* Grid column III */}
          <div id={styles.image} className='uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-dark'>
            <Image src='/brands/React.png' width={200} height={200} />
          </div>
        </div>

        {/* Grid row II - children = columns/cards caption text */}
        <div className={styles.grid}>

          {/* Card/column I caption */}
          <h4 className={styles.uikit}>
            <span className={styles.company}>Styled with </span>
            UiKit
          </h4>

          {/* Card/column II caption */}
          <h4 className={styles.chartjs}>
            <span className={styles.company}>Visualizations designed using </span>
            Chart.js
          </h4>

          {/* Card/column III caption */}
          <h4 className={styles.react}>
            <span className={styles.company}>Developed with </span>
            React/Next
          </h4>
        </div>
      </div>
      <Footer />
    </>
  )
}
