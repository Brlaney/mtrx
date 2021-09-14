import Link from 'next/link';
import { motion } from 'framer-motion';
import GoBack from '@/components/buttons/GoBack';
import styles from '@/styles/pages/Learn.module.scss';

export default function Matrix() {
  const endpoint = '/';

  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>

      {/* Render the back button component */}
      <GoBack link={endpoint} />

      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h3 className={styles.title}>
            Select a topic to learn
          </h3>
        </div>

        {/* Tutorials and lessons card 1 - theory */}
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

         {/* Tutorials and lessons card 2 - deformation graphs */}
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
      </div>
    </motion.div>
  )
};
