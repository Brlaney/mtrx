import Trusses from '@/components/stiffness/deformations/Trusses';
import GoBack from '@/components/buttons/GoBack';
import styles from '@/styles/pages/Charts.module.scss';

export default function Truss() {
  const endpoint = '/stiffness';

  return (
    <>
      {/* Render the back button component */}
      <GoBack link={endpoint} />

      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Truss example
          </h1>
        </div>

        {/* Divider */}
        <div className='uk-heading-divider' />

        {/* This pages main content */}
        <div className={styles.content}>
          <div className={styles.chartContainer}>
            <Trusses />
          </div>
        </div>
      </div>
    </>
  )
};
