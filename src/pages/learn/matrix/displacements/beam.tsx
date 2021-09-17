import * as React from 'react';
import { motion } from 'framer-motion';
import F_11 from '@/components/learn/matrix/stiffness/beam/D_11';
import F_12 from '@/components/learn/matrix/stiffness/beam/Bending';
import F_21 from '@/components/learn/matrix/stiffness/beam/D_21';
import F_22 from '@/components/learn/matrix/stiffness/beam/Forces';
import styles from '@/styles/pages/Displacements.module.scss';

export default function Beam() {
  const [graphic, setGraphic] = React.useState(1);

  return (
    <motion.div className={styles.container}>
      {/* Main parent container */}
      <div className={styles.parent}>

        {/* Controls state - buttons */}
        <motion.div className={styles.box}>
          <p id={styles.text} className='uk-text uk-text-justify uk-text-center'>
            A truss local member is a 2-dimensional bar element. Each end represents a node. A node can be
            a connection to another member, a free-end (cantilevar), or a support. Each node in a truss system
            will contain two degrees of freedom, one for both horizontal displacement (d11/d21) and vertical
            displacement (d12/d22).
          </p>
        </motion.div>

        {/* Is this a switch case? */}
        <motion.div className={styles.card}>

          {/* Your 'logic' hah */}
          {graphic === 1 && (
            <F_11 />
          )}
          {graphic === 2 && (
            <F_12 />
          )}
          {graphic === 3 && (
            <F_21 />
          )}
          {graphic === 4 && (
            <F_22 />
          )}

        </motion.div>

        {/* Controls state - buttons */}
        <motion.div className={styles.controls}>
          <motion.button
            id={styles.state1}
            className='uk-button'
            onClick={() => { setGraphic(1) }}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: .25
              }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Deformation 1
          </motion.button>
          <motion.button
            id={styles.state3}
            className='uk-button'
            onClick={() => { setGraphic(3) }}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: .25
              }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Deformation 3
          </motion.button>
          <motion.button
            id={styles.state2}
            className='uk-button'
            onClick={() => { setGraphic(2) }}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: .25
              }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Deformation 2
          </motion.button>
          <motion.button
            id={styles.state4}
            className='uk-button'
            onClick={() => { setGraphic(4) }}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: .25
              }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Deformation 4
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
};