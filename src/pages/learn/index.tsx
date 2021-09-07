import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Learn.module.scss';

export default function Learn() {
  return (
    <motion.div className={styles.container}>
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} 
                  id={styles.button}
                  className='uk-button'
                >
                  Truss
                </motion.button>
              </Link>
              <Link href='/learn/matrix/stiffness/beam'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} 
                  id={styles.button}
                  className='uk-button'
                >
                  Beam
                </motion.button>
              </Link>
              <Link href='/learn/matrix/stiffness/frame'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} 
                  id={styles.button}
                  className='uk-button'
                >
                  Frame
                </motion.button>
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} 
                  id={styles.button}
                  className='uk-button uk-width-1-1'
                >
                  Truss graph
                </motion.button>
              </Link>
              <Link href='/learn/matrix/deformations/beam'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} 
                  id={styles.button}
                  className='uk-button uk-width-1-1'
                >
                  Beam graph
                </motion.button>
              </Link>
              <Link href='/learn/matrix/deformations/frame'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} 
                  id={styles.button}
                  className='uk-button uk-width-1-1'
                >
                  Frame graph
                </motion.button>
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} 
                  id={styles.button}
                  className='uk-button uk-width-1-1'
                >
                  components
                </motion.button>
              </Link>
              <Link href='/learn/bridge/deck-design'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} 
                  id={styles.button}
                  className='uk-button uk-width-1-1'
                >
                  Deck design
                </motion.button>
              </Link>
              <Link href='/learn/bridge/parapets'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} 
                  id={styles.button}
                  className='uk-button uk-width-1-1'
                >
                  Parapets
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
};
