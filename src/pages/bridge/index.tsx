import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/staggered';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { server } from '@/lib/config/server';
import { IBridge } from '@/lib/types';
import GoBack from '@/components/buttons/GoBack';
import styles from '@/styles/pages/Learn.module.scss';

const BridgeDesign = ({ topics, props: any }:
  InferGetStaticPropsType<typeof getStaticProps>
) => {
  const [topicsList] = React.useState(topics);
  const endpoint = '/';

  console.log(topicsList.content);

  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >

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

        <motion.div className={styles.card} variants={stagger}>

          {/* Dynamic topic cards */}
          {topicsList.map((topic: IBridge) => (
            <motion.div
              key={topic.id}
              className={styles.contents}
              variants={fadeInUp}
            >

              {/* Topic category title */}
              <h2 className={styles.sectionTitle}>
                <span className={styles.span}>
                  {topic.id}. )</span> {topic.title}
              </h2>

              <div className={styles.content}>
                <div className={styles.child}>
                  {/* If content exists, iterate through the array */}
                  {topic.content && (
                    topic.content.map((content, i) => (
                      <>
                        <Link
                          key={content.key}
                          href={`/learn/bridge-design/topic/[lower]`}
                          as={`/learn/bridge-design/topic/${content.name}`}
                        >
                          <motion.h3
                            className={styles.link}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <a className='uk-link-heading'>
                              {content.button}
                            </a>
                          </motion.h3>
                        </Link>
                      </>
                    ))
                  )}

                  {/* CHANGE THIS TO AN ELSE STATEMENT */}
                  <Link
                    href='/learn/bridge-design/topic/[lower]'
                    as={`/learn/bridge-design/topic/${topic.lower}`}
                  >
                    <motion.h3
                      className={styles.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <a className='uk-link-heading'>
                        {topic.title}
                      </a>
                    </motion.h3>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export const getStaticProps: GetStaticProps = async _context => {
  const endpoint = `${server}/api/bridge/topics`;
  const res = await fetch(endpoint);
  const topics: IBridge[] = await res.json();

  return {
    props: {
      topics
    }
  }
};

export default BridgeDesign;
