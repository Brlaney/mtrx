import React from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';
import styles from '@/styles/components/Math.module.scss';

export const Assemble: React.FC<{}> = () => {
  const Elements = <TeX
    className={styles.solutions}
    math='\begin{bmatrix}
      Element_1 \\
      Element_2 \\
      Element_3 \\
      Element_4 \\
      Element_5
      \end{bmatrix} 
      ='
  />;

  const Connections = <TeX
    className={styles.solutions}
    math='\begin{bmatrix}
      1 & 2 \\
      2 & 3 \\
      3 & 4 \\
      1 & 3 \\
      4 & 2
      \end{bmatrix},'
  />;

  const Nodes = <TeX
    className={styles.solutions}
    math='\begin{bmatrix}
      Node_1 \\
      Node_2 \\
      Node_3 \\
      Node_4
      \end{bmatrix} 
      ='
  />;

  const Coordinates = <TeX
    className={styles.solutions}
    math='\begin{bmatrix}
      0 & 0 \\
      10 & 10 \\
      20 & 10 \\
      30 & 0
      \end{bmatrix}'
  />;

  return (
    <>
      <div className={styles.div}>
        {Elements}
        <span className={styles.span}>
          {Connections}
        </span>
      </div>
      <div className={styles.div}>
        {Nodes}
        <span className={styles.span}>
          {Coordinates}
        </span>
      </div>
    </>
  );
};
