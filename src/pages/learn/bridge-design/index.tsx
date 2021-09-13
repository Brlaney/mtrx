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
            <span className={styles.span}> Bridge Design</span> topics
          </h3>
        </div>

        {/* Bridge design topics card 1 */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>
            Bridge Details
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
            </div>
          </div>
        </div>

        {/* Bridge design topics card 2 */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>
            Desk design
          </h2>
          <div className={styles.content}>
            <div className={styles.child}>
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
            </div>
          </div>
        </div>

        {/* Bridge design topics card 3 */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>
            Parapets
          </h2>
          <div className={styles.content}>
            <div className={styles.child}>
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

        {/* Bridge design topics card 4 */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>
            Live Load Distribution Factor
          </h2>
          <div className={styles.content}>
            <div className={styles.child}>
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

        {/* Bridge design topics card 5 */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>
            Parapets
          </h2>
          <div className={styles.content}>
            <div className={styles.child}>
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

        {/* Bridge design topics card 6 */}
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>
            Parapets
          </h2>
          <div className={styles.content}>
            <div className={styles.child}>
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
