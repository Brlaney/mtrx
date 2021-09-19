import React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';
import styles from '@/styles/pages/Learning.module.scss';

export const Elem3: React.FC<{}> = ({ ...props }) => {
  const Elem3 = <TeX
    className={styles.math}
    math='L = \sqrt{dx^2 + dy^2}'
  />;

  const Elem4 = <TeX
    className={styles.math}
    math='\\
    L = length \ of \ member \\
    dx = x_2 - x_1 \\
    dy = y_2 - y_1'
  />;

  return (
    <div className={styles.child} {...props}>
      <div>
        {Elem3}
      </div>
      <div>
        {Elem4}
      </div>
    </div>
  )
};
