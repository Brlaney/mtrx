import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/displacements';
import E from '@/components/learn/matrix/examples/E';
import D from '@/components/learn/matrix/examples/D';
import T1 from '@/components/learn/matrix/examples/T1';
import T2 from '@/components/learn/matrix/examples/T2';
import T3 from '@/components/learn/matrix/examples/T3';
import T4 from '@/components/learn/matrix/examples/T4';
import T5 from '@/components/learn/matrix/examples/T5';
import { data, buttonTexts } from '@/lib/data/matrix/learn/examples/truss-example';
import { IDispl } from '@/lib/types';
import GoBack from '@/components/buttons/GoBack';
import styles from '@/styles/pages/Displacements.module.scss';

const TrussExample: React.FC<{ props }> = ({ props }) => {
  const [display, setDisplay] = React.useState('');
  const [graphic, setGraphic] = React.useState(1);
  const endpoint = '/learn/matrix';

  useEffect(() => {
    let k = graphic - 1;
    setDisplay(data[k]);
  }, [graphic, display]);

  return (
    <motion.div className={styles.container} {...props}>

      <GoBack link={endpoint} />

      {/* Main parent container */}
      <div className={styles.parent}>

        {/* Is this a switch case? */}
        <motion.div className={styles.display}>
          {graphic === 1 && < E />}
          {graphic === 2 && < D />}
          {graphic === 3 && < T1 />}
          {graphic === 4 && < T2 />}
          {graphic === 5 && < T3 />}
          {graphic === 6 && < T4 />}
          {graphic === 7 && < T5 />}
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

export default TrussExample;
