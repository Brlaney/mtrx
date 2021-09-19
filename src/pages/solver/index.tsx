import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Truss from '@/components/solver/Truss';
import Beam from '@/components/solver/Beam';
import Frame from '@/components/solver/Frame';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Matrix.module.scss';

const Solver = () => {
  const [name, setName] = React.useState('');
  const endpoint = '/';

  return (
    <motion.div className={styles.container}>
      
      <GoBack link={endpoint} />

      <div className={styles.parent}>

        {/* Header - conditionally render */}
        {name && (
          <h2 className={styles.heading}>
            Select a system <span className={styles.conditional}> {name}</span>
          </h2>
        )}
        {!name && (
          <h2 className={styles.heading}>
            Select a system
          </h2>
        )}

        {/* Row of content - 3 child columns */}
        <div id={styles.grid} className='uk-flex uk-flex-center uk-flex-middle'>
          <Link href='/solver/truss' as='/solver/truss'>
            <motion.div
              className={styles.column}
              onMouseEnter={() => setName('Truss')}
              onMouseLeave={() => setName('')}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: [0.5, -0.1, 0.01, 0.45] }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Truss />
            </motion.div>
          </Link>
          <Link href='/solver/beam' as='/solver/beam'>
            <motion.div
              className={styles.column}
              onMouseEnter={() => setName('Beam')}
              onMouseLeave={() => setName('')}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: [0.5, -0.1, 0.01, 0.45] }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Beam />
            </motion.div>
          </Link>
          <Link href='/solver/frame' as='/solver/frame'>
            <motion.div
              className={styles.column}
              onMouseEnter={() => setName('Frame')}
              onMouseLeave={() => setName('')}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: [0.5, -0.1, 0.01, 0.45] }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Frame />
            </motion.div>
          </Link>
        </div>
      </div >
    </motion.div >
  )
};

export default Solver;
