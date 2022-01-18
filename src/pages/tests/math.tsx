import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/tests/svgs';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Math.module.scss';

import combos from '@/lib/utils/math/combos';
import permute from '@/lib/utils/math/permute';

const Math = () => {

  const input1 = ['a', 'b', 'c'];
  const output1 = combos(input1);

  const input2 = [1, 2, 3];
  const output2 = permute(input1);

  console.log("Combinations");
  console.log("\n", "Input: ", input1);
  console.log("\n", "Output: ", output1);

  console.log("Permuations");
  console.log("\n", "Input: ", input1);
  console.log("\n", "Output: ", output2);

  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >

      {/* Page parent container */}
      <motion.div className={styles.parent} variants={fadeInUp}>

        <motion.div className={styles.box} variants={stagger}>

          {/* Combinations */}
          <motion.div className={styles.content} variants={fadeInUp}>
            <h2 className={styles.label}>Input 1: </h2>
            <h2 className={styles.text}>{input1}</h2>
          </motion.div>
          <motion.div className={styles.content} variants={fadeInUp}>
            <h2 className={styles.label}>Output 1: </h2>
            <h2 className={styles.text}>{output1}</h2>
          </motion.div>

          {/* Permutations */}
          <motion.div className={styles.content} variants={fadeInUp}>
            <h2 className={styles.label}>Input 2: </h2>
            <h2 className={styles.text}>{input2}</h2>
          </motion.div>
          <motion.div className={styles.content} variants={fadeInUp}>
            <h2 className={styles.label}>Output 2: </h2>
            <h2 className={styles.text}>{output2}</h2>
          </motion.div>

        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export default Math;
