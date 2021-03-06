import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/displacements';
import E from '@/components/stiffness/examples/beam/E';
import G from '@/components/stiffness/examples/beam/G';
import LF1 from '@/components/stiffness/examples/beam/LF1';
import LF2 from '@/components/stiffness/examples/beam/LF2';
import LF3 from '@/components/stiffness/examples/beam/LF3';
import Info from '@/components/stiffness/examples/beam/Info';
import { data, buttonTexts } from '@/lib/data/stiffness/examples/beam';
import { IDispl } from '@/lib/types';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Displacements.module.scss';

export default function Beam() {
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
        <motion.div className={styles.beamdisplay}>
          {graphic === 1 && (<>< E />< Info /></>)}
          {graphic === 2 && < G />}
          {graphic === 3 && < LF1 />}
          {graphic === 4 && < LF2 />}
          {graphic === 5 && < LF3 />}
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
              id={buttonText.id < 5 ? styles.gridbtn : styles.fullwidthbtn}
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
              {buttonText.text}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
};
