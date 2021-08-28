import React from 'react'
import Link from 'next/link'
import {
  GetStaticProps,
  GetStaticPaths,
} from 'next'
import { server } from '@/lib/config/server'
import { locations } from '@/lib/data/locations'
import styles from '@/styles/pages/Locations.module.scss'

import LocationBarChart from '@/components/graphs/LocationBarChart'
import { Params } from 'next/dist/server/router'

export const getStaticProps: GetStaticProps<Params> = async (context) => {
  const location = locations.filter(p => p.id.toString() === location.id)

  const index = location.id - 1
  const endpoint = locations[index]

  /* The goal here is to obtain the selected locations
  abortion data for all categories by the internal
  api endpoint response --> returning json data. */
  const res = await fetch(`${server}/api/locations`)
  const rows = await res.json()

  console.log(rows);

  return {
    props: {
      locations: location,
      data: rows,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = locations.map(location => ({
    params: { id: location.id.toString() },
  }))
  return { paths, fallback: false }
}

export default function LocalStats({ data, location }) {
  return (
    <>
      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            {location.name}
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
            <LocationBarChart
              data={data}
              location={location}
            />
          </div>
        </div>
      </div>
    </>
  )
}