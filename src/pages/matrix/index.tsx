import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { server } from '@/lib/config/server'
import { Choice } from '@/lib/types'
import styles from '@/styles/pages/Matrix.module.scss'

const Matrix = ({ choices }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const [hovering, setHovering] = React.useState<boolean>();
  const [choicesList] = React.useState(choices);
  const [name, setName] = React.useState('');

  // const handleMouseEnter = () => setHovering(true);
  // const handleMouseLeave = () => setHovering(false);

  // const handleHover = (choice: string) => {
  //   setName(choice);
  // } 

  return (
    <>
      {/* Page parent container and header */}
      <div className={styles.parent}>

        {/* Header - conditionally render */}
        {name && (
          <h2 className={styles.heading}>
            Select a system <span className={styles.conditional}> {name}</span>
          </h2>
        )}

        {!name && (
          <h2 className={styles.heading}>
            Select a system
          </h2>
        )}

        {/* Grid row I - parent */}
        <div
          id={styles.grid}
          className='uk-grid-row uk-child-width-1-1'
        >
          {choicesList.map((choice: Choice) => (
            <Link
              key={choice.id}
              href={`/matrix/${encodeURIComponent(choice.link)}`}
              as={`/matrix/${encodeURIComponent(choice.link)}`}
            >
              <div
                id={styles.image}
                className='uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-dark'
              >
                <Image
                  layout='fixed'
                  className={styles.img}
                  alt={choice.name}
                  src={choice.path}
                  width={200}
                  height={164.25}
                  onMouseEnter={() => setName(choice.name)}
                  onMouseLeave={() => setName('')}
                />
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
