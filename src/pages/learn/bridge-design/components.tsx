import * as React from 'react'
import Image from 'next/image'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { server } from '@/lib/config/server'
import { IBridgeComponents } from '@/lib/types'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '@/lib/config/animations/components'
import GoBack from '@/components/buttons/GoBack'
import styles from '@/styles/pages/Bridge.module.scss'

const Components = ({ components }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [componentsList] = React.useState(components);
  const endpoint = '/learn';

  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>

      {/* Render the back button component */}
      <GoBack link={endpoint} />

      {/* Page parent container */}
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Components of bridge design
          </h1>
        </div>

        {/* Main content */}
        <div
          id={styles.grid}
          className='uk-height-small uk-child-width-1-1@s 
            uk-grid-match uk-flex-center uk-margin-large'
          uk-grid='true'
        >
          <div className={styles.cardContainer}>

            {/* Card */}
            <div
              id={styles.card}
              className='uk-card uk-card-secondary uk-light
              uk-box-shadow-large uk-card-large uk-card-body'
            >
              <h3 id={styles.cardTitle} className='uk-card-title'>
                There are <span className={styles.span}>11</span> components
                to consider when designing a bridge
              </h3>
              <div id={styles.child} className='uk-child-width-expand@s' uk-grid>
                <motion.div variants={stagger} className={styles.listContainer}>
                  <ul id={styles.list} className='uk-list uk-list-divider'>
                    {componentsList.map((component: IBridgeComponents) => (
                      <>
                        <motion.li
                          className={styles.item}
                          key={component.id}
                          variants={fadeInUp}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <a
                            className={styles.modal}
                            href='#modal-media-image'
                            // uk-toggle='true'
                          >
                            <span className={styles.span}>{component.id}. </span>
                            {component.component}
                          </a>
                        </motion.li>
                        <div
                          id='modal-media-image'
                          className='uk-flex-top'
                          uk-modal='true'
                        >
                          <div
                            className='uk-modal-dialog uk-width-auto 
                              uk-margin-auto-vertical'
                          >
                            <button
                              className='uk-modal-close-outside'
                              type='button'
                              uk-close
                            />
                            <Image
                              src={component.path}
                              alt='modal-image'
                              layout='fill'
                            />
                          </div>
                        </div>
                      </>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div >
  )
};

export const getStaticProps: GetStaticProps = async _context => {
  const endpoint = `${server}/api/bridge/components`;
  const res = await fetch(endpoint);
  const components: IBridgeComponents[] = await res.json();

  return {
    props: {
      components
    }
  }
};

export default Components;
