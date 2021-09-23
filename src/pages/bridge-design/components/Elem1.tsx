import TeX from '@matejmazur/react-katex'
import 'katex/dist/katex.min.css'
import styles from '@/styles/pages/Learning.module.scss'

export default function Elem1() {
  const Elem1 = <TeX
    className={styles.math}
    math='c \le 0.62(s)'
  />

  return (
    <>
      {Elem1}
    </>
  )
}
