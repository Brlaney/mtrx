import * as React from 'react';
import { motion } from 'framer-motion';
import S1 from '@/components/buttons/logo/S1';
import styles from '@/styles/pages/Tests.module.scss';

export default function Tests() {
  // const [graphic, setGraphic] = React.useState(1);

  return (
    <motion.div className={styles.container}>
      <div className={styles.parent}>

        {/* Testing the brand icons */}
        <motion.div className={styles.box}>
            <S1 />
        </motion.div>
      </div>
    </motion.div>
  )
};
