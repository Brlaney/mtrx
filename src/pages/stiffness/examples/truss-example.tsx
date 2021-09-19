import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/displacements';
import E from '@/components/stiffness/examples/E';
import D from '@/components/stiffness/examples/D';
import T1 from '@/components/stiffness/examples/T1';
import T2 from '@/components/stiffness/examples/T2';
import T3 from '@/components/stiffness/examples/T3';
import T4 from '@/components/stiffness/examples/T4';
import T5 from '@/components/stiffness/examples/T5';
import { data, buttonTexts } from '@/lib/data/stiffness/examples/truss-example';
import { IDispl } from '@/lib/types';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Displacements.module.scss';

export default function TrussExample() {
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
        <motion.div className={styles.display}>
          {graphic === 1 && < E />}
          {graphic === 2 && < D />}
          {graphic === 3 && < T1 />}
          {graphic === 4 && < T2 />}
          {graphic === 5 && < T3 />}
          {graphic === 6 && < T4 />}
          {graphic === 7 && < T5 />}
        </motion.div>

        {/* Information onClick */}
        <motion.div
          className={styles.box}
          variants={stagger}
        >
          <motion.p
            id={styles.text}
            className='uk-text uk-text-justify uk-text-center'
            animate='visible'
            initial='hidden'
            variants={fadeInUp}
          >
            {display}
          </motion.p>
        </motion.div>

        {/* Controls state - buttons */}
        <motion.div className={styles.controls}>
          {buttonTexts.map((buttonText: IDispl) => (
            <motion.button
              id={styles.state1}
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
