import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next'
import { server } from '@/lib/config/server'
import { Choice } from '@/lib/types'
import styles from '@/styles/pages/Matrix.module.scss'

interface Selected {
  selection: string;
}

const Matrix = ({ choices }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [choicesList] = React.useState(choices)

  const [selected, setSelected] = React.useState<Selected>({
    selection: ''
  });

  return (
    <>
      {/* Page parent container and header */}
      <div className={styles.parent}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Matrix structural analysis
          </h1>
          <h2 className={styles.subtitle}>
            An app that solves trusses, beams,
            and frames using the stiffness method
          </h2>
        </div>

        {/* Grid row I - parent */}
        <div
          id={styles.grid}
          className='uk-grid-row uk-grid-row-large uk-child-width-1-1 uk-text-center'
        >

          {/* Grid-column children */}
          {choicesList.map((choice: Choice) => (
            <div
              key={choice.id}
              id={styles.image}
              className='uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-dark'
            >
              <Link href={`/matrix/${encodeURIComponent(choice.link)}`}>
                <Image
                  className={styles.img}
                  src={choice.path}
                  width={300}
                  height={219}
                />
              </Link>
            </div>
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
