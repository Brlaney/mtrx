import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/staggered';
import Col1 from '@/components/homepage/Col1';
import Col2 from '@/components/homepage/Col2';
import Col3 from '@/components/homepage/Col3';
import Footer from '@/components/global/Footer';
import styles from '@/styles/pages/Home.module.scss';

export default function Home() {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <motion.div className={styles.container} variants={stagger}>
        {/* Homepage header container */}
        <motion.div className={styles.header} variants={fadeInUp}>
          <h1 className={styles.title}>
            [<span id={styles.span}>Mtrx</span>]
          </h1>
          <h4 className={styles.subtitle}>
            A web application that implements the matrix displacement method
          </h4>
        </motion.div>

        {/* Grid row I - children = columns/cards */}
        <motion.div className={styles.grid} variants={fadeInUp}>

          {/* Link 1 - Matrix displacement solver */}
          <Link href='/solver'>
            <motion.div
              id={styles.col1}
              variants={fadeInUp}
              className='uk-width-1-3'
              whileHover={{
                position: 'relative',
                zIndex: 1,
                scale: 1.06,
                transition: { duration: 0.2 }
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
          <Link href='/stiffness'>
            <motion.div
              id={styles.col2}
              variants={fadeInUp}
              className='uk-width-1-3'
              whileHover={{
                position: 'relative',
                zIndex: 1,
                scale: 1.06,
                transition: { duration: 0.2 }
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
          <Link href='/bridge-design'>
            <motion.div
              id={styles.col3}
              variants={fadeInUp}
              className='uk-width-1-3'
              whileHover={{
                position: 'relative',
                zIndex: 1,
                scale: 1.06,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Col3 />
              <p className={styles.cta}>
                Bridge Design
              </p>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
      <Footer />
    </motion.div>
  )
};
