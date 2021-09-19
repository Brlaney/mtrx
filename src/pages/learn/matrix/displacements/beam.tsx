import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/displacements';
import { D_11, D_21, Bending, Forces } from '@/components/learn/matrix/stiffness/beam/Beams';
import { data, buttonTexts } from '@/lib/data/matrix/learn/displacements/beam';
import { IDispl } from '@/lib/types';
import GoBack from '@/components/buttons/GoBack';
import styles from '@/styles/pages/Displacements.module.scss';

export default function Beam() {
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
          {graphic === 1 && { D_11 }}
          {graphic === 2 && { D_21 }}
          {graphic === 3 && { Bending }}
          {graphic === 4 && { Forces }}
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
