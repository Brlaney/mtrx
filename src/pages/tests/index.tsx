import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/tests/svgs';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Tests.module.scss';
import { elementLengths, localK } from '@/lib/utils/matrix/truss';

const Tests = () => {
  const endpoint = '/';

  const test = [0, 0, 10, 10, 20, 10, 30, 0];
  const elemConn = [1, 2, 2, 3, 3, 4, 1, 3, 4, 2];
  const A = [2, 2, 2, 2, 2];
  const E = [29000000, 29000000, 29000000, 29000000, 29000000];

  const testOutput = elementLengths(test, elemConn);

  console.log('Each elements length in ft.: ' + testOutput[0]);
  // console.log(testOutput[0]);

  console.log('Each elements orientation in radians:')
  console.log(testOutput[1]);

  console.log('Each elements orientation in degrees:')
  console.log(testOutput[2]);

  console.log("Index of global degrees of freedom:");
  console.log(testOutput[4]);

  console.log("Each n row maps local k_ij's to global degree of freedom:");
  console.log(testOutput[3]);

  const k = localK(5, testOutput[1], testOutput[0], E, A);
  console.log('These arrays contain a 4 x 4 local stiffness matrix ([k]) for each element in the system.');
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
          Box
        </motion.div>

      </motion.div>
    </motion.div>
  )
};

export default Tests;
