import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IVials } from '@/lib/types';
import { vials } from '@/lib/data/game';
import styles from '@/styles/pages/Math.module.scss';

// import combos from '@/lib/utils/math/combos';
// import permute from '@/lib/utils/math/permute';

const colors = ['#FFFFFF', '#00568D', '#51BA5D'];

const Math = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const vialVariants = {
    opened: { translateY: 40, scale: 1.1 },
    closed: { translateY: 120, scale: 0.9 }
  };

  /*
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
  */

  const updateState = (prev, vial) => {
    if (prev != 0) {
      setSelected(0);
      setIsOpen(false);
    } else {
      setSelected(vial);
      setIsOpen(true)
    }
  }

  useEffect(() => {
    console.log('Currently selected: ', selected)
  }, [selected]);

  return (
    <motion.div className={styles.container}>
      <motion.div className={styles.grid}>

        {vials.map((vial: IVials) => (
          <motion.div
            key={vial.id}
            className={styles.vial}
            initial={false}
            animate={vial.id == selected  ? 'opened' : 'closed'}
            variants={vialVariants}
            onClick={() => { updateState(selected, vial.id) }}
          >
            {vial.slots.map((slot, i) => (
              <motion.div
                key={i}
                className={styles.box}
                style={{
                  backgroundColor: colors[slot]
                }}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
};

export default Math;
