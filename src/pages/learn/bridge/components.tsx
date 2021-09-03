import GoBack from '@/components/buttons/GoBack'
import styles from '@/styles/pages/Bridge.module.scss'

export default function Components() {
  const endpoint = '/learn';
  return (
    <>
      {/* Render the back button component */}
      <GoBack link={endpoint} />

      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Bridge design components
          </h1>
        </div>
      </div>
    </>
  )
}
