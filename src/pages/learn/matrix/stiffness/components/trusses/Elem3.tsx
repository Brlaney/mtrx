import React from 'react'
import TeX from '@matejmazur/react-katex'
import 'katex/dist/katex.min.css'
import styles from '@/styles/pages/Learning.module.scss'

export const Elem3: React.FC<{}> = ({ ...props }) => {
  const Elem3 = <TeX
    className={styles.math}
    math='\begin{bmatrix}
    \cos^{2}(\theta) & \cos(\theta)sin(\theta) & -\cos^{2}(\theta) & -\cos(\theta)sin(\theta) \\
    \cos(\theta)sin(\theta) & \sin^{2}(\theta) & -\cos(\theta)sin(\theta) & -\sin^{2}(\theta) \\
    -\cos^{2}(\theta) & -\cos(\theta)sin(\theta) & \cos^{2}(\theta) & \cos(\theta)sin(\theta) \\
    -\cos(\theta)sin(\theta) & -\sin^{2}(\theta) & \cos(\theta)sin(\theta) & \sin^{2}(\theta) 
  \end{bmatrix}'
  />

  return (
    <div className={styles.child} {...props}>
      {Elem3}
    </div>
  )
}
