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
            <span id={styles.next}> Mtrx</span>
          </h1>
          <h4 className={styles.subtitle}>
            A web application that implements the matrix displacement method
          </h4>
        </div>

        {/* Grid row I - children = columns/cards */}
        <div className={styles.grid}>

          {/* Grid column I */}
          <div
            id={styles.image}
            className='uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-dark'
          >
            <Image
              src='/brands/Uikit.png'
              width={140}
              height={140}
              layout='intrinsic'
              quality='100'
            />
          </div>

          {/* Grid column II */}
          <div
            id={styles.image}
            className='uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-dark'
          >
            <Image
              src='/brands/chartjs.png'
              width={140}
              height={140}
              layout='intrinsic'
              quality='100'
            />
          </div>

          {/* Grid column III */}
          <div
            id={styles.image}
            className='uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-dark'
          >
            <Image
              src='/brands/React.png'
              width={140}
              height={140}
              layout='intrinsic'
              quality='100'
            />
          </div>
        </div>

        {/* Grid row II - children = columns/cards caption text */}
        <div className={styles.grid}>

          {/* Grid column I */}
          <div
            id={styles.image}
            className='uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-dark'
          >
            <h4 className={styles.uikit}>
              UiKit
            </h4>
          </div>

          {/* Grid column II */}
          <div
            id={styles.image}
            className='uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-dark'
          >
            <h4 className={styles.chartjs}>
              Chart.js
            </h4>
          </div>

          {/* Grid column III */}
          <div
            id={styles.image}
            className='uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-dark'
          >
            <h4 className={styles.react}>
              React/Next
            </h4>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
