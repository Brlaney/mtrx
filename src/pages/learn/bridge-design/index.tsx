import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/components';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { server } from '@/lib/config/server';
import { IBridge } from '@/lib/types';
import GoBack from '@/components/buttons/GoBack';
import styles from '@/styles/pages/Learn.module.scss';

const BridgeDesign = ({ topics }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [topicsList] = React.useState(topics);
  const endpoint = '/';

  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>

      {/* Render the back button component */}
      <GoBack link={endpoint} />

      {/* Page parent container */}
      <motion.div className={styles.container} variants={stagger}>

        {/* Header */}
        <div className={styles.header}>
          <h3 className={styles.title}>
            Bridge Design <span className={styles.span}> topics</span>
          </h3>
        </div>

        {/* Dynamic topic cards */}
        {topicsList.map((topic: IBridge) => (
          <>
            <motion.div
              className={styles.card}
              key={topic.id}
              variants={fadeInUp}
            >
              <h2 className={styles.sectionTitle}>
                {topic.title}
              </h2>
              <div className={styles.content}>
                <div className={styles.child}>

                  {topic.content! && (
                    <>
                      <Link
                        key={topic.id}
                        href='/learn/bridge-design/topic/['
                        as={`/learn/bridge-design/topic/${topic.lower}`}
                      >
                        <motion.button
                          id={styles.button}
                          className='uk-button uk-width-1-1'
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {topic.lower}
                        </motion.button>
                      </Link>
                    </>
                  )}
                  {topic.content && (
                    topic.content.map((content, i) => (
                      <>
                        <Link
                          key={content.key}
                          href={`/learn/bridge-design/topic/[lower]`}
                          as={`/learn/bridge-design/topic/${content.name}`}
                        >
                          <motion.button
                            id={styles.button}
                            className='uk-button uk-width-1-1'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {content.button}
                          </motion.button>
                        </Link>
                      </>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          </>
        ))}

      </motion.div>
    </motion.div>
  )
};

export const getStaticProps: GetStaticProps = async _context => {
  const endpoint = `${server}/api/bridge/learn`;
  const res = await fetch(endpoint);
  const topics: IBridge[] = await res.json();

  return {
    props: {
      topics
    }
  }
};

export default BridgeDesign;
