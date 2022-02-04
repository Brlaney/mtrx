import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/tests/svgs';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Tests.module.scss';

import One from '@/components/global/tests/One';
import Two from '@/components/global/tests/Two';
import Three from '@/components/global/tests/Three';
import Four from '@/components/global/tests/Four';
import Five from '@/components/global/tests/Five';
import Six from '@/components/global/tests/Six';

/*
import { elementLengths, localK } from '@/lib/utils/matrix/truss';
*/

const Tests = () => {
  const endpoint = '/';

  /*
  const A = [2, 2, 2, 2, 2];
  const test = [0, 0, 10, 10, 20, 10, 30, 0];
  const elemConn = [1, 2, 2, 3, 3, 4, 1, 3, 4, 2];
  const E = [29000000, 29000000, 29000000, 29000000, 29000000];

  const testOutput = elementLengths(test, elemConn);

  console.log('\n Each elements length in ft.:  \n' + testOutput[0]);

  console.log('\n Each elements orientation in radians: \n')
  console.log(testOutput[1]);

  console.log('\n Each elements orientation in degrees: \n')
  console.log(testOutput[2]);

  console.log("\n Index of global degrees of freedom: \n");
  console.log(testOutput[4]);

  console.log("\n Each n row maps local k_ij's to global degree of freedom: \n");
  console.log(testOutput[3]);

  const k = localK(5, testOutput[1], testOutput[0], E, A);
  console.log('\n These arrays contain a 4x4 local stiffness matrix ([k]) for each element in the system. \n');
  console.log(k);
  */

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

        <motion.div className={styles.box} variants={fadeInUp}>
          <One />
        </motion.div>

        <motion.div className={styles.box} variants={fadeInUp}>
          <Two />
        </motion.div>

        <motion.div className={styles.box} variants={fadeInUp}>
          <Three />
        </motion.div>

        <motion.div className={styles.box} variants={fadeInUp}>
          <Four />
        </motion.div>

        <motion.div className={styles.box} variants={fadeInUp}>
          <Five />
        </motion.div>

        <motion.div className={styles.box} variants={fadeInUp}>
          <Six />
        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export default Tests;
