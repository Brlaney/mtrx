import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/tests/svgs';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Tests.module.scss';
import combos from '@/lib/utils/math/combos';

import Full from '@/components/global/form-nav/Full';
import XL from '@/components/global/form-nav/XL';
import L from '@/components/global/form-nav/L';

const Combinations = () => {
  const endpoint = '/';

  const v = combos(['a', 'b']);
  console.log(v);

  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >

      <GoBack link={endpoint} />

      {/* Page parent container */}
      <motion.div className={styles.parent} variants={stagger}>

        <motion.h2 className={styles.header} variants={fadeInUp}>
          Welcome, to the test page
        </motion.h2>

        <motion.div className={styles.box} variants={fadeInUp}>
          <Full lhs={0} rhs={1} stage={2} />
          <XL lhs={0} rhs={1} stage={2} />
          <L lhs={0} rhs={1} stage={2} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export default Combinations;
