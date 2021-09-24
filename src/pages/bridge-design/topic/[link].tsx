import GoBack from '@/components/global/buttons/GoBack'
import styles from '@/styles/pages/Bridge.module.scss'

const Lower = ({props}) => {
  const endpoint = '/bridge-design';

  console.log(props.topic);

  return (
    <>
      {/* Render the back button component */}
      <GoBack link={endpoint} />

      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            {/* {props.button} */}
            shit
          </h1>
        </div>
      </div>
    </>
  )
}

export default Lower;
