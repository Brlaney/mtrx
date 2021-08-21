import { useState } from 'react'
import Link from 'next/link'
import { server } from '@/lib/config'
import { locations as locationData } from '@/lib/data/locations'
import styles from '@/styles/pages/Charts.module.scss'


export default function Charts() {
  const [locations] = useState(locationData)

  return (
    <>
      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            United States
          </h1>
          <h2 className={styles.subtitle}>
            Abortion data visualized
          </h2>
        </div>

        {/* This pages main content */}
        <div className={styles.content}>
          <div className={styles.child}>
            <Link href='/charts/horizontal-bar-charts'>
              <button
              id={styles.button}
                className='uk-button uk-button-primary uk-button-large uk-width-1-1'
              >
                Total US stats
              </button>
            </Link>
          </div>
          <div className={styles.child}>
            <Link href='/charts/stacked-bar-charts'>
              <button
              id={styles.button}
                className='uk-button uk-button-primary uk-button-large uk-width-1-1'
              >
                States with the highest numbers
              </button>
            </Link>
          </div>

          {/* Select a state header */}
          <div className={styles.subheader}>
            <h3 className={styles.states}>
              Select a state
            </h3>
          </div>

          <div className={styles.listContainer}>
            {locations.map((location) => (
              <Link key={location.name}
                href='/charts/local-stats/[id]'
                as={`/charts/local-stats/${location.id}`}
              >
                <button
                  id={styles.dynamicButton}
                  className='uk-button uk-button-secondary uk-width-1-5@s'
                  >
                  {location.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
