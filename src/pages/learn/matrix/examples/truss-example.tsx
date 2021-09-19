import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/displacements';
import { Example, Discretized, T1, T2, T3, T4, T5 } from '@/components/learn/matrix/examples/TrussExample';
import { data, buttonTexts } from '@/lib/data/matrix/learn/examples/truss-example';
import { IDispl } from '@/lib/types';
import GoBack from '@/components/buttons/GoBack';
import styles from '@/styles/pages/Displacements.module.scss';

export default function TrussExample() {
  const [display, setDisplay] = React.useState('');
  const [graphic, setGraphic] = React.useState(1);
  const endpoint = '/learn/matrix';

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
        <motion.div className={styles.card}>
          {graphic === 1 && { Example }}
          {graphic === 2 && { Discretized }}
          {graphic === 3 && { T1 }}
          {graphic === 4 && { T2 }}
          {graphic === 5 && { T3 }}
          {graphic === 6 && { T4 }}
          {graphic === 7 && { T5 }}
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