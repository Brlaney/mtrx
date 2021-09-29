import Trusses from '@/components/stiffness/deformations/Trusses';
import GoBack from '@/components/global/buttons/GoBack';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Charts.module.scss';

export default function Truss() {
  const endpoint = '/stiffness';

  return (
    <motion.div className={styles.container}>
      <GoBack link={endpoint} />
      <div id={styles.space} className='uk-height-small uk-flex uk-flex-center' />
      <div className={styles.parent}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Truss deformation graph
          </h1>
        </div>

        {/* Chart container - main content */}
        <div className={styles.chartContainer}>
          <Trusses />
        </div>
      </div>
    </motion.div>
  )
};
