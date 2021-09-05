import GoBack from '@/components/buttons/GoBack'
import { data } from '@/lib/data/bridge/components'
import styles from '@/styles/pages/Bridge.module.scss'

export default function Components({ data }) {
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
            Components of bridge design
          </h1>
        </div>
      </div>
    </>
  )
}
