import Trusses from '@/components/stiffness/deformations/Trusses';
import GoBack from '@/components/global/buttons/GoBack';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/displacements';
import styles from '@/styles/pages/Charts.module.scss';

export default function Truss() {
  const endpoint = '/stiffness';

  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <GoBack link={endpoint} />
      <div id={styles.space} className='uk-height-small uk-flex uk-flex-center' />
      <motion.div className={styles.parent} variants={stagger}>

        {/* Header */}
        <motion.div className={styles.header} variants={fadeInUp}>
          <h1 className={styles.title}>
            Truss deformation graph
          </h1>
        </motion.div>

        {/* Chart container - main content */}
        <motion.div className={styles.chartContainer} variants={fadeInUp}>
          <Trusses />
        </motion.div>

      </motion.div>
    </motion.div>
  )
};
