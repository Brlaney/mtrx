import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Column1 from '@/components/homepage/Column1';
import Column2 from '@/components/homepage/Column2';
import Column3 from '@/components/homepage/Column3';
import styles from '@/styles/pages/Home.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.parent}>

        {/* Homepage header container */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span id={styles.next}> Mtrx</span>
          </h1>
          <h4 className={styles.subtitle}>
            A web application that implements the matrix displacement method
          </h4>
        </div>

        {/* Grid row I - children = columns/cards */}
        <div className={styles.grid}>

          {/* Link 1 - Matrix displacement solver */}
          <Link href='/matrix'>
            <motion.div
              id={styles.col}
              className='uk-width-1-3'
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: .25
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Column1 />
            </motion.div>
          </Link>
          
          {/* Link 2 - Matrix displacement theory/tutorials */}
          <Link href='/learn/matrix'>
            <motion.div
              id={styles.col}
              className='uk-width-1-3'
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: .25
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Column2 />
            </motion.div>
          </Link>
          
          {/* Link 3 - Bridge Design theory/tutorials */}
          <Link href='/learn/bridge-design'>
            <motion.div
              id={styles.col}
              className='uk-width-1-3'
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: .25
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Column3 />
            </motion.div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
};
