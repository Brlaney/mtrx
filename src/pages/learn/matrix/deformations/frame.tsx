import Frames from '@/components/learn/matrix/deformations/Frames';
import styles from '@/styles/pages/Charts.module.scss';
import GoBack from '@/components/buttons/GoBack';

export default function Frame() {
  const endpoint = '/learn/matrix';

  return (
    <>
      {/* Render the back button component */}
      <GoBack link={endpoint} />

      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Frame example
          </h1>
        </div>

        {/* Divider */}
        <div className='uk-heading-divider' />

        {/* This pages main content */}
        <div className={styles.content}>
          <div className={styles.chartContainer}>
            <Frames />
          </div>
        </div>
      </div>
    </>
  )
}
