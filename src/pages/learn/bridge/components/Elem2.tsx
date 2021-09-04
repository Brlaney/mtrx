import TeX from '@matejmazur/react-katex'
import 'katex/dist/katex.min.css'
import styles from '@/styles/pages/Learning.module.scss'

export default function Elem2() {
  const Elem2 = <TeX
    className={styles.math}
    math='2c + (n-1)s = w'
  />

  return (
    <>
      {Elem2}
    </>
  )
}
