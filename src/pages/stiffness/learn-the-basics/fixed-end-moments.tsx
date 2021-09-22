import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/displacements';
import Distributed from '@/components/stiffness/learn-the-basics/fem/Distributed';
import Eqn1 from '@/components/stiffness/learn-the-basics/fem/Eqn1';
import Point from '@/components/stiffness/learn-the-basics/fem/Point';
import Eqn2 from '@/components/stiffness/learn-the-basics/fem/Eqn2';
import { data, buttonTexts } from '@/lib/data/stiffness/learn-the-basics/fixed-end-moments';
import { IDispl } from '@/lib/types';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Displacements.module.scss';

export default function FixedEndMoments() {
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
          {graphic === 1 && <Distributed />}
          {graphic === 2 && <Eqn1 />}
          {graphic === 3 && <Point />}
          {graphic === 4 && <Eqn2 />}
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
