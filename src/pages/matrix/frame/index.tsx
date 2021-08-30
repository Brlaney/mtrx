import styles from '@/styles/pages/Matrix.module.scss'

export default function Frame() {
  return (
    <>
      {/* Page parent container and header */}
      <div className={styles.parent}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Matrix structural analysis
          </h1>
          <h2 className={styles.subtitle}>
            You selected a Frame system
          </h2>
        </div>
      </div>
    </>
  )
}
