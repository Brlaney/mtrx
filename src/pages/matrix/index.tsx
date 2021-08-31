import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next'
import { Choice } from '@/lib/types'
import { server } from '@/lib/config/server'
import styles from '@/styles/pages/Matrix.module.scss'


const Matrix = ({ choices }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [choicesList] = React.useState(choices)

  return (
    <>
      {/* Page parent container and header */}
      <div className={styles.parent}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Matrix structural analysis
          </h1>
        </div>

        <h2 className={styles.section}>
          Select the desired system to solve
        </h2>

        {/* Grid row I - parent */}
        <div
          id={styles.grid}
          className='uk-grid-row uk-grid-row-large uk-child-width-1-1 uk-text-center'
        >
          {choicesList.map((choice: Choice) => (
            <Link
              href={`/matrix/${encodeURIComponent(choice.link)}`}
              as={`/matrix/${encodeURIComponent(choice.link)}`}
            >
              <div
                key={choice.id}
                id={styles.image}
                className='uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-dark'
              >
                <div
                  className='uk-animation-toggle'
                  // tabIndex={0}
                >
                  <Image
                    id={styles.img}
                    className='uk-animation-stroke'
                    uk-svg='stroke-animation: true'
                    alt={choice.name}
                    src={choice.path}
                    width={350}
                    height={255.5}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async _context => {
  const endpoint = `${server}/api/matrix`;
  const res = await fetch(endpoint)
  const choices: Choice[] = await res.json()

  return {
    props: {
      choices,
    },
  }
}

export default Matrix
