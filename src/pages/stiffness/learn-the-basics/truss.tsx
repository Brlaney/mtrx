import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp2, stagger } from '@/lib/config/animations/svgs/displacements';
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
import { nextMod, prevMod } from '@/lib/utils/matrix/calculate';
import styles from '@/styles/pages/Displacements.module.scss';

export default function Truss() {
  const [display, setDisplay] = React.useState('');
  const [graphic, setGraphic] = React.useState(1);
  const endpoint = '/stiffness';

  const handleBack = () => {
    let newStep = prevMod(graphic, 13);
    setGraphic(newStep);

    return newStep;
  };

  const handleFwd = () => {
    let newStep = nextMod(graphic, 13);
    setGraphic(newStep);

    return newStep;
  };

  useEffect(() => {
    let k = graphic - 1;
    setDisplay(data[k]);
  }, [graphic, display]);

  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >

      <GoBack link={endpoint} />

      {/* Main parent container */}
      <div className={styles.parent}>

        {/* Is this a switch case? */}
        <motion.div className={styles.wideDisplay}>
          {graphic === 1 && (<><Blank /><A /></>)}
          {graphic === 2 && (<><Elem1 /><State1 /></>)}
          {graphic === 3 && (<><Elem2 /><State2 /></>)}
          {graphic === 4 && (<><Elem3 /><State3 /></>)}
          {graphic === 5 && (<><Elem4 /><State4 /></>)}
          {graphic === 6 && (<><Elem5 /><State5 /></>)}
        </motion.div>

        {/* Information onClick */}
        <div className={styles.box}>
          <p className={styles.text}>
            {display}
          </p>
        </div>

        {/* Controls state - buttons */}
        <motion.div className={styles.controlSwitch}>
          {/* <motion.div className={styles.buttonRow} variants={stagger}> */}
            <motion.button
              id={styles.bckBtn}
              className='uk-button'
              onClick={handleBack}
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
              onClick={handleFwd}
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
          {/* </motion.div> */}
        </motion.div>
      </div>
    </motion.div>
  )
};
