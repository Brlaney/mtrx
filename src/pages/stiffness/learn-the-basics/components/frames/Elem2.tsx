import React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';
import styles from '@/styles/pages/Learning.module.scss';

export const Elem2: React.FC<{}> = ({ ...props }) => {
  const Elem2 = <TeX
    className={styles.math}
    math='\frac{2EI}{L^3}
    \begin{bmatrix}
    6 & -3L & -6 & -3L \\
    3L & -2L^2 & -3L & -L^2 \\
    -6 & 3L & 6 & 3L \\
    3L & -L^2 & -3L & -2L^2 \\
  \end{bmatrix}'
  />;

  return (
    <div className={styles.child} {...props}>
      {Elem2}
    </div>
  )
};
