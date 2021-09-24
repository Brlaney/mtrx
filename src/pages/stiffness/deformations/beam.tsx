import Beams from '@/components/stiffness/deformations/Beams';
import GoBack from '@/components/global/buttons/GoBack';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Charts.module.scss';

export default function Beam() {
  const endpoint = '/stiffness';

  return (
    <motion.div className={styles.container}>
      <GoBack link={endpoint} />
      <div id={styles.space} className='uk-height-small uk-flex uk-flex-center' />
      <div className={styles.parent}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Beam deformation graph
          </h1>
        </div>

        {/* Divider */}
        <div className='uk-heading-divider' />

        {/* This pages main content */}
        <div className={styles.content}>
          <div className={styles.chartContainer}>
            <Beams />
          </div>
        </div>
      </div>
    </motion.div>
  )
};
