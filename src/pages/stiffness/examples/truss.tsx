import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/displacements';
import E from '@/components/stiffness/examples/truss/E';
import D from '@/components/stiffness/examples/truss/D';
import G from '@/components/stiffness/examples/truss/G';
import Un from '@/components/stiffness/examples/truss/Un';
import T1 from '@/components/stiffness/examples/truss/T1';
import T2 from '@/components/stiffness/examples/truss/T2';
import T3 from '@/components/stiffness/examples/truss/T3';
import T4 from '@/components/stiffness/examples/truss/T4';
import T5 from '@/components/stiffness/examples/truss/T5';
import { Button5 } from '@/components/stiffness/examples/truss/buttons/Button5';
import { Button6 } from '@/components/stiffness/examples/truss/buttons/Button6';
import { Button7 } from '@/components/stiffness/examples/truss/buttons/Button7';
import { Button8 } from '@/components/stiffness/examples/truss/buttons/Button8';
import { Button9 } from '@/components/stiffness/examples/truss/buttons/Button9';
import { data, buttonTexts } from '@/lib/data/stiffness/examples/truss';
import { IDispl } from '@/lib/types';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Displacements.module.scss';

export default function Truss() {
  const [display, setDisplay] = React.useState('');
  const [graphic, setGraphic] = React.useState(1);
  const endpoint = '/stiffness';

  useEffect(() => {
    let k = graphic - 1;
    setDisplay(data[k]);
  }, [graphic, display]);

  return (
    <motion.div className={styles.container}>

      <GoBack link={endpoint} />

      {/* Main parent container */}
      <div className={styles.parent}>

        {/* Is this a switch case? */}
        <motion.div className={styles.trussdisplay}>
          {graphic === 1 && <E />}
          {graphic === 2 && <D />}
          {graphic === 3 && <G />}
          {graphic === 4 && <Un />}
          {graphic === 5 && <T1 />}
          {graphic === 6 && <T2 />}
          {graphic === 7 && <T3 />}
          {graphic === 8 && <T4 />}
          {graphic === 9 && <T5 />}
        </motion.div>

        {/* Information onClick */}
        <div className={styles.box}>
          <p className={styles.text}>
            {display}
          </p>
        </div>

        {/* Controls state - buttons */}
        <motion.div className={styles.controls}>
          {buttonTexts.map((buttonText: IDispl) => (
            <motion.button
              id={buttonText.id < 9 ? styles.gridbtn : styles.fullwidthbtn}
              className='uk-button'
              onClick={() => { setGraphic(buttonText.id) }}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: .25
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {buttonText.id === 1 && buttonText.text}
              {buttonText.id === 2 && buttonText.text}
              {buttonText.id === 3 && buttonText.text}
              {buttonText.id === 4 && buttonText.text}
              {buttonText.id === 5 && <Button5 />}
              {buttonText.id === 6 && <Button6 />}
              {buttonText.id === 7 && <Button7 />}
              {buttonText.id === 8 && <Button8 />}
              {buttonText.id === 9 && <Button9 />}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
};
