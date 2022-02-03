import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/tests/svgs';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Tests.module.scss';
import { elementLengths, localK } from '@/lib/utils/matrix/truss';
import Full from '@/components/global/form-nav/Full';
import XL from '@/components/global/form-nav/XL';
import L from '@/components/global/form-nav/L';


const Tests = () => {
  const endpoint = '/';
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

        {/* Header */}
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

export default Tests;
