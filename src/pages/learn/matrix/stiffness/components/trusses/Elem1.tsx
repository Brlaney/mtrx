import TeX from '@matejmazur/react-katex'
import 'katex/dist/katex.min.css'
import styles from '@/styles/pages/Learning.module.scss'

export default function Elem1() {
  const Elem1 = <TeX
  className={styles.math}
  math='\frac{EA}{L}
    \begin{bmatrix}
    1 & -1 \\
    -1 & 1
    \end{bmatrix}
      \begin{bmatrix}
      \Delta_{x1} \\
      \Delta_{x2}
      \end{bmatrix} = \begin{bmatrix}
        F_{x1} \\
        F_{x2}
        \end{bmatrix}'
/>

  return (
    <>
      {Elem1}
    </>
  )
}
