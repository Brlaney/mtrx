import * as React from 'react'
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

        {/* Link container */}
        <div
          id={styles.linkContainer}
          className='uk-grid-row uk-grid-row-large uk-child-width-1-1 uk-text-center'
        >
          <div id={styles.card} className='uk-width-1-1'>
            {choicesList.map((choice: Choice) => (
              <Link
                key={choice.id}
                href={`/matrix/${encodeURIComponent(choice.link)}`}
              >
                <button
                  id={styles.dynamicButton}
                  className='uk-button uk-button-secondary uk-width-1-6@s'
                >
                  {choice.name}
                </button>
              </Link>
            ))}
          </div>
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
