import React from 'react'
import Link from 'next/link'
import { server } from '@/lib/config'
import { locations } from '@/lib/data/locations'
import styles from '@/styles/pages/Locations.module.scss'

import LocationBarChart from '@/components/graphs/LocationBarChart'


export const getStaticProps = async ({ params }) => {
  const location = locations.filter(p => p.id.toString() === params.id)

  const index = params.id - 1
  const endpoint = locations[index]

  // The goal here is to obtain the selected locations
  //   abortion data for all categories by the internal
  //   api endpoint response --> returning json data.
  const res = await fetch(`${server}/api/${endpoint}`)
  const data = await res.json()

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
