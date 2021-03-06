import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/displacements';
import D11 from '@/components/stiffness/learn-the-basics/beam/D11';
import D21 from '@/components/stiffness/learn-the-basics/beam/D21';
import Bending from '@/components/stiffness/learn-the-basics/beam/Bending';
import Forces from '@/components/stiffness/learn-the-basics/beam/Forces';
import { data, buttonTexts } from '@/lib/data/stiffness/displacements/beam';
import { Button1 } from '@/components/stiffness/learn-the-basics/beam/buttons/Button1';
import { Button2 } from '@/components/stiffness/learn-the-basics/beam/buttons/Button2';
import { Button3 } from '@/components/stiffness/learn-the-basics/beam/buttons/Button3';
import { IDispl } from '@/lib/types';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Displacements.module.scss';

export default function Beam() {
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
          {graphic === 1 && <D11 />}
          {graphic === 2 && <D21 />}
          {graphic === 3 && <Bending />}
          {graphic === 4 && <Forces />}
        </motion.div>

        {/* Information onClick */}
        <div className={styles.box}>
          <p className={styles.text}>
            {display}
          </p>
        </div>

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
              {buttonText.id === 1 && <Button1 />}
              {buttonText.id === 2 && <Button2 />}
              {buttonText.id === 3 && <Button3 />}
              {buttonText.id === 4 && buttonText.text}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
};
