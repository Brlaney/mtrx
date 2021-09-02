import { useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/pages/Charts.module.scss'

export default function Learn() {

  return (
    <>
      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            The matrix displacement method
          </h1>
          <h2 className={styles.subtitle}>
            A  step-by-step visual tutorial
          </h2>
        </div>

        {/* This pages main content */}
        <div className={styles.content}>
          <div className={styles.child}>

            {/* Trusses deformation/stresses link */}
            <Link href='/charts/truss'>
              <button
                id={styles.button}
                className='uk-button uk-button-primary uk-button uk-width-1-1'
              >
                Truss graph
              </button>
            </Link>

            {/* Beams deformation/stresses link */}
            <Link href='/charts/beam'>
              <button
                id={styles.button}
                className='uk-button uk-button-primary uk-button uk-width-1-1'
              >
                Beam graph
              </button>
            </Link>

            {/* Frames deformation/stresses link */}
            <Link href='/charts/frame'>
              <button
                id={styles.button}
                className='uk-button uk-button-primary uk-button uk-width-1-1'
              >
                Frame graph
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
