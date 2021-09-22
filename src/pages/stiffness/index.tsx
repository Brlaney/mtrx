import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/staggered';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { server } from '@/lib/config/server';
import { IStiffnessTopics, Isection } from '@/lib/types';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Stiffness.module.scss';

const Stiffness = ({ topics, props: any }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      <motion.div className={styles.container} variants={stagger}>

        <div id={styles.space} className='uk-height-small uk-flex uk-flex-center' />

        {/* Header */}
        <div className={styles.header}>
          <h3 className={styles.title}>
            Matrix structural analysis <span className={styles.span}> topics</span>
          </h3>
        </div>

        <motion.div className={styles.grid} variants={stagger}>
          {/* Dynamic topic cards */}
          {topicsList.map((topic: IStiffnessTopics) => (
            <motion.div
              id={styles.cardId}
              className={topic.id == 5 ? styles.wideCard : styles.card}
              variants={fadeInUp}
            >
              <div
                key={topic.id}
                className={styles.cardbody}
              >
                <h2 className={styles.sectionTitle}>{topic.title}</h2>
                <motion.div className={styles.child} variants={fadeInUp}>
                  {topic.sections && (
                    topic.sections.map((section: Isection) => (
                      <Link key={topic.id} href={section.link}>
                        <motion.div
                          className={styles.contents}
                          variants={fadeInUp}
                        >
                          <motion.h3
                            className={styles.linktext}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <a id={styles.text} className='uk-link-heading'>
                              {section.name}
                            </a>
                          </motion.h3>
                        </motion.div>
                      </Link>
                    ))
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export const getStaticProps: GetStaticProps = async _context => {
  const endpoint = `${server}/api/stiffness`;
  const res = await fetch(endpoint);
  const topics: IStiffnessTopics[] = await res.json();

  return {
    props: {
      topics
    }
  }
};

export default Stiffness;
