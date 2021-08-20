import React from 'react'
import Link from 'next/link'
import LocationBarChart from '@/components/graphs/LocationBarChart'
import { locations } from '@/lib/data/locations'
import styles from '@/styles/pages/Locations.module.scss'


export const getStaticProps = async ({ params }) => {
  const location = locations.filter(p => p.id.toString() === params.id)
  const index = params.id - 1
  return {
    props: {
      location: locations[index],
    },
  }
}

export const getStaticPaths = async () => {
  const paths = locations.map(location => ({
    params: { id: location.id.toString() },
  }))
  return { paths, fallback: false }
}

const LocalStats = props => (
  <>
    {/* Page parent container */}
    <div className={styles.container}>

      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          {props.location.name}
        </h1>
        <Link href='/charts'>
          <button className='uk-button uk-button-primary uk-button-small'>
            back
          </button>
        </Link>
      </div>

      {/* Divider */}
      <div className='uk-heading-divider' />

      {/* This pages main content */}
      <div className={styles.content}>
        <div className={styles.chartContainer}>
          {/* <LocationBarChart /> */}
        </div>
      </div>
    </div>
  </>
)

export default LocalStats
