import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Learn.module.scss';

export default function BridgeDesign() {
  return (
    <motion.div className={styles.container}>
      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h3 className={styles.title}>
            Select a <span className={styles.span}> Bridge Design</span> topic to learn
          </h3>
        </div>

        {/* Tutorials and lessons card */}
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
