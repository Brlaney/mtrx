import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/tests/svgs';
import GoBack from '@/components/global/buttons/GoBack';
import Truss from '@/components/global/tests/Truss';
import { IPhase } from '@/lib/types';
import { phases } from '@/lib/data/tests'
import styles from '@/styles/pages/Tests.module.scss';

const Graphics = () => {
  const [phaseNum, setPhaseNum] = useState(1);
  const endpoint = '/tests';

  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <GoBack link={endpoint} />

      {/* Test/Truss component w/ status prop */}
      <motion.div className={styles.box}>
        {phaseNum === 1 && <Truss status={0} />}
        {phaseNum === 2 && <Truss status={1} />}
        {phaseNum === 3 && <Truss status={2} />}
        {phaseNum === 4 && <Truss status={3} />}
        {phaseNum === 5 && <Truss status={4} />}
        {phaseNum === 6 && <Truss status={5} />}
        {phaseNum === 7 && <Truss status={6} />}
      </motion.div>

      {/* Render each possible phase */}
      <motion.div className={styles.controls} variants={stagger}>
        {phases.map((phase: IPhase) => (
          <motion.button
            key={phase.id}
            id={styles.phasebutton}
            className='uk-button text-lead'
            variants={fadeInUp}
            onClick={() => {setPhaseNum(phase.id)}}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: .25
              }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {phase.txt}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  )
};

export default Graphics;
