import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/staggered';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { server } from '@/lib/config/server';
import { ITopicB, Isection } from '@/lib/types';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Topics.module.scss';

const BridgeDesign = (
  { topics, props: any }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [topicsList] = React.useState(topics);
  const endpoint = '/';

  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >

      {/* Render the back button component */}
      <GoBack link={endpoint} />

      {/* Page parent container */}
      <div className={styles.container}>

        <div id={styles.space} className='uk-height-small uk-flex uk-flex-center' />

        {/* Header */}
        <div className={styles.header}>
          <h3 className={styles.title}>
            Bridge Design <span className={styles.span}> topics</span>
          </h3>
        </div>

        {/* Dynamic topic cards */}
        <motion.div className={styles.grid} variants={stagger}>
          {topicsList.map((topic: ITopicB) => (
            <motion.div
              id={topic.id < 7 ? styles.bridge : styles.stiffness}
              className={topic.id < 7 ? styles.card : styles.wideCard}
              variants={fadeInUp}
            >
              <div
                key={topic.id}
                className={styles.cardbody}
              >
                <h2 className={styles.sectionTitle}>{topic.title}</h2>
                <motion.div className={styles.child}>
                  {topic.sections && (
                    topic.sections.map((section: Isection) => (
                      <Link key={topic.id} href={section.link}>
                        <motion.div
                          className={styles.contents}
                          variants={fadeInUp}
                          whileHover={{
                            position: 'relative',
                            zIndex: 1,
                            scale: 1.04,
                            transition: { duration: 0.3 }
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.a id={styles.link} className='uk-link-heading'>
                            {section.name}
                          </motion.a>
                        </motion.div>
                      </Link>
                    ))
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
};

export const getStaticProps: GetStaticProps = async _context => {
  const endpoint = `${server}/api/bridge/topics`;
  const res = await fetch(endpoint);
  const topics: ITopicB[] = await res.json();

  return {
    props: {
      topics
    }
  }
};

export default BridgeDesign;