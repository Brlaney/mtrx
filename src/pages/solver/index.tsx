import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Truss from '@/components/solver/Truss';
import Beam from '@/components/solver/Beam';
import Frame from '@/components/solver/Frame';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Solver.module.scss';

const Solver = () => {
  const [name, setName] = React.useState('');
  const endpoint = '/';

  return (
    <motion.div className={styles.container}>
      <GoBack link={endpoint} />
      <div id={styles.space} className='uk-height-small uk-flex uk-flex-center' />
      <div className={styles.parent}>

        {/* Header - conditionally render */}
        {name && (
          <>
            <h2 className={styles.pageTitle}>
              Select a system to solve
              <span className={styles.conditional}>{name}</span>
            </h2>
          </>
        )}
        {!name && (
          <>
            <h2 className={styles.pageTitle}>
              Select a system to solve
            </h2>
          </>
        )}

        {/* Row of content - 3 child columns */}
        <div id={styles.grid} className='uk-flex uk-flex-center uk-flex-middle'>
          <Link href='/solver/truss' as='/solver/truss'>
            <motion.div
              className={styles.column}
              onMouseEnter={() => setName('Truss')}
              onMouseLeave={() => setName('')}
              whileHover={{
                zIndex: 1,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.97 }}
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
                zIndex: 1,
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.97 }}
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
                zIndex: 1,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.97 }}
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
