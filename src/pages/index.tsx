// import Image from 'next/image'
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
          <div className='uk-text-center uk-width-expand uk-text-lead'>
            Landing page content
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
