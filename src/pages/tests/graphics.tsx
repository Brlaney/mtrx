import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import { fadeInUp, stagger } from '@/lib/config/animations/tests/svgs';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Tests.module.scss';
import Truss from '@/components/global/tests/Truss';

const Graphics = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const endpoint = '/tests';

  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <GoBack link={endpoint} />

      <motion.div className={styles.box}>
        <Truss status={currentPhase} />
      </motion.div>

    </motion.div>
  )
};

export default Graphics;
