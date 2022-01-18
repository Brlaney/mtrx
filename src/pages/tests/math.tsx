import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/tests/svgs';
import styles from '@/styles/pages/Math.module.scss';

import combos from '@/lib/utils/math/combos';
import permute from '@/lib/utils/math/permute';

const Math = () => {

  const input1 = ['a', 'b', 'c'];
  const output1 = combos(input1);

  const input2 = [1, 2, 3];
  const output2 = permute(input1);

  console.log("Combinations");
  console.log("Input: ", input1);
  console.log("\n", "Output: ", output1);

  console.log("Permuations");
  console.log("Input: ", input1);
  console.log("\n", "Output: ", output2);

  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <motion.div className={styles.box} variants={stagger}>

        {/* Combinations */}
        <motion.div className={styles.contenta} variants={fadeInUp}>
          <h2 className={styles.label}>Input 1: </h2>
          <h2 className={styles.text}>{input1}</h2>
        </motion.div>
        <motion.div className={styles.contentb} variants={fadeInUp}>
          <h2 className={styles.label}>Output 1: </h2>
          <h2 className={styles.text}>{output1}</h2>
        </motion.div>

        {/* Permutations */}
        <motion.div className={styles.contentc} variants={fadeInUp}>
          <h2 className={styles.label}>Input 2: </h2>
          <h2 className={styles.text}>{input2}</h2>
        </motion.div>
        <motion.div className={styles.contentd} variants={fadeInUp}>
          <h2 className={styles.label}>Output 2: </h2>
          <h2 className={styles.text}>{output2}</h2>
        </motion.div>

      </motion.div>
    </motion.div>
  )
};

export default Math;
