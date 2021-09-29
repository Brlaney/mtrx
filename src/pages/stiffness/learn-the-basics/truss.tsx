import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInUp2, stagger } from '@/lib/config/animations/svgs/learn';
import Blank from '@/components/stiffness/examples/truss/solutions/Blank';
import A from '@/components/stiffness/examples/truss/solutions/A';
import Elem1 from '@/components/stiffness/examples/truss/solutions/Elem1';
import Elem2 from '@/components/stiffness/examples/truss/solutions/Elem2';
import Elem3 from '@/components/stiffness/examples/truss/solutions/Elem3';
import Elem4 from '@/components/stiffness/examples/truss/solutions/Elem4';
import Elem5 from '@/components/stiffness/examples/truss/solutions/Elem5';
import State1 from '@/components/stiffness/examples/truss/solutions/State1';
import State2 from '@/components/stiffness/examples/truss/solutions/State2';
import State3 from '@/components/stiffness/examples/truss/solutions/State3';
import State4 from '@/components/stiffness/examples/truss/solutions/State4';
import State5 from '@/components/stiffness/examples/truss/solutions/State5';
import { data } from '@/lib/data/stiffness/learn-the-basics/truss';
import GoBack from '@/components/global/buttons/GoBack';
import Back from '@/components/global/buttons/matrix/Back';
import Forward from '@/components/global/buttons/matrix/Forward';
import styles from '@/styles/pages/Displacements.module.scss';

export default function Truss() {
  const [display, setDisplay] = React.useState('');
  const [graphic, setGraphic] = React.useState(1);
  const endpoint = '/stiffness';

  let increment = () => {
    setGraphic(graphic + 1);
  };

  let decrement = () => {
    setGraphic(graphic - 1);
  };

  useEffect(() => {
    let k = graphic - 1;
    setDisplay(data[k]);
  }, [graphic, display]);

  if(graphic <= 0) {
    decrement = () => setGraphic(1);
  }

  if(graphic > 6) {
    increment = () => setGraphic(6);
  }

  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <GoBack link={endpoint} />

      {/* Render the correct svg's conditionally */}
      <div className={styles.parent}>
        <motion.div className={styles.wideDisplay} variants={stagger}>
          {graphic === 1 && (
            <motion.div
              className={styles.graphic}
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              exit={{ opacity: 0 }}
              layout
            >
              <Blank /><A />
            </motion.div>
          )}
          {graphic === 2 && (
            <motion.div
              className={styles.graphic}
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              exit={{ opacity: 0 }}
              layout
            >
              <State1 /><Elem1 />
            </motion.div>
          )}
          {graphic === 3 && (
            <motion.div
              className={styles.graphic}
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              exit={{ opacity: 0 }}
              layout
            >
              <State2 /><Elem2 />
            </motion.div>
          )}
          {graphic === 4 && (
            <motion.div
              className={styles.graphic}
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              exit={{ opacity: 0 }}
              layout
            >
              <State3 /><Elem3 />
            </motion.div>
          )}
          {graphic === 5 && (
            <motion.div
              className={styles.graphic}
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              exit={{ opacity: 0 }}
              layout
            >
              <State4 /><Elem4 />
            </motion.div>
          )}
          {graphic === 6 && (
            <motion.div
              className={styles.graphic}
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              exit={{ opacity: 0 }}
              layout
            >
              <State5 /><Elem5 />
            </motion.div>
          )}
        </motion.div>

        {/* Information onClick */}
        <div className={styles.tallBox}>
          <p className={styles.text}>
            {display}
          </p>
        </div>

        {/* Controls state - buttons */}
        <motion.div className={styles.controlSwitch}>
          <motion.button
            id={styles.bckBtn}
            className='uk-button'
            onClick={decrement}
            variants={fadeInUp2}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: .25
              }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Back />
          </motion.button>
          <motion.button
            id={styles.fwdBtn}
            className='uk-button'
            onClick={increment}
            variants={fadeInUp2}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: .25
              }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Forward />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
};
