import Frames from '@/components/stiffness/deformations/Frames';
import styles from '@/styles/pages/Charts.module.scss';
import { motion } from 'framer-motion';
import GoBack from '@/components/global/buttons/GoBack';

export default function Frame() {
  const endpoint = '/stiffness';

  return (
    <motion.div className={styles.container}>
      <GoBack link={endpoint} />
      <div id={styles.space} className='uk-height-small uk-flex uk-flex-center' />
      <div className={styles.parent}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Frame deformation graph
          </h1>
        </div>

        {/* Divider */}
        <div className='uk-heading-divider' />

        {/* This pages main content */}
        <div className={styles.content}>
          <div className={styles.chartContainer}>
            <Frames />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
