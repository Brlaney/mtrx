import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/displacements';
import D11 from '@/components/stiffness/displacements/frame/D11';
import D12 from '@/components/stiffness/displacements/frame/D12';
import D21 from '@/components/stiffness/displacements/frame/D21';
import D22 from '@/components/stiffness/displacements/frame/D22';
import GoBack from '@/components/buttons/GoBack';
import { data, buttonTexts } from '@/lib/data/stiffness/displacements/frame';
import { IDispl } from '@/lib/types';
import styles from '@/styles/pages/Displacements.module.scss';

export default function Frame() {
  const [graphic, setGraphic] = React.useState(1);
  const [display, setDisplay] = React.useState('');
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
        <motion.div className={styles.framecard}>
          {graphic === 1 && <D11 />}
          {graphic === 2 && <D12 />}
          {graphic === 3 && <D21 />}
          {graphic === 4 && <D22 />}
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