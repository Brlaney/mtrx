import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/displacements';
import Blank from '@/components/stiffness/displacements/frame/Blank';
import Nodes from '@/components/stiffness/displacements/frame/Nodes';
import Global from '@/components/stiffness/displacements/frame/Global';
import Unrestrained from '@/components/stiffness/displacements/frame/Unrestrained';
import Sidesway from '@/components/stiffness/displacements/frame/SideswayRotation';
import SideswayRotation from '@/components/stiffness/displacements/frame/Sidesway';
import GoBack from '@/components/global/buttons/GoBack';
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
        <motion.div className={styles.framedisplay}>
          {graphic === 1 &&  <Blank />}
          {graphic === 2 &&  <Nodes />}
          {graphic === 3 &&  <Global />}
          {graphic === 4 &&  <Unrestrained />}
          {graphic === 5 &&  <Sidesway />}
          {graphic === 6 &&  <SideswayRotation />}
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