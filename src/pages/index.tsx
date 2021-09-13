import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Col1 from '@/components/animations/homepage/Col1';
import Col2 from '@/components/animations/homepage/Col2';
import Col3 from '@/components/animations/homepage/Col3';
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
                transition: { duration: 0.25, ease: [0.6, 0.4, 0.8, 0.7] }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Col1 />
              <p className={styles.cta}>
                Solver
              </p>
            </motion.div>
          </Link>
          
          {/* Link 2 - Matrix displacement theory/tutorials */}
          <Link href='/learn/matrix'>
            <motion.div
              id={styles.col}
              className='uk-width-1-3'
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.25, ease: [0.6, 0.4, 0.8, 0.7] }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Col2 />
              <p className={styles.cta}>
                Stiffness Theory
              </p>
            </motion.div>
          </Link>
          
          {/* Link 3 - Bridge Design theory/tutorials */}
          <Link href='/learn/bridge-design'>
            <motion.div
              id={styles.col}
              className='uk-width-1-3'
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.25, ease: [0.6, 0.4, 0.8, 0.7] }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Col3 />
              <p className={styles.cta}>
                Bridge Design Theory
              </p>
            </motion.div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
};
