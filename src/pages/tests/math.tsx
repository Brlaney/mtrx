import React, { useState, useEffect } from 'react';
import styles from '@/styles/pages/Math.module.scss';
import { IVials } from '@/lib/types';
import { vials } from '@/lib/data/game';

import combos from '@/lib/utils/math/combos';
import permute from '@/lib/utils/math/permute';

const colors = ['#FFFFFF', '#00568D', '#51BA5D'];

const Math = () => {
  const [selected, setSelected] = useState(0);

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

  useEffect(() => {
    console.log('Currently selected: ', selected)
  }, [selected]);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>

        {vials.map((vial: IVials) => (
          <div
            key={vial.id}
            className={styles.vial}
            onClick={() => { setSelected(vial.id) }}
          >
            {vial.slots.map((slot, i) => (
              <div
                key={i}
                className={styles.box}
                style={{
                  backgroundColor: colors[slot]
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
};

export default Math;
