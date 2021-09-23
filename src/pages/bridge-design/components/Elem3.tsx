import React from 'react'
import TeX from '@matejmazur/react-katex'
import 'katex/dist/katex.min.css'
import styles from '@/styles/pages/Learning.module.scss'

export const Elem3: React.FC<{}> = ({ ...props }) => {
  // PPC girders
  const Elem3 = <TeX
    className={styles.math}
    math='\frac{b_f}{3}'
  />

  // Steel girders
  const Elem4 = <TeX
    className={styles.math}
    math='\frac{b_f}{4}'
  />

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
}
