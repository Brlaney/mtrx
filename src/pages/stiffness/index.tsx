import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/staggered';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { server } from '@/lib/config/server';
import { IStiffnessTopics, Isection } from '@/lib/types';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Learn.module.scss';

const Stiffness = ({ topics, props: any }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
            Matrix structural analysis <span className={styles.span}> topics</span>
          </h3>
        </div>

        <motion.div className={styles.card} variants={stagger}>

          {/* Dynamic topic cards */}
          {topicsList.map((topic: IStiffnessTopics) => (
            <motion.div
              key={topic.id}
              className={styles.contents}
              variants={fadeInUp}
            >
              <h2 className={styles.sectionTitleStiffness}>{topic.title}</h2>
              <div className={styles.content}>
                <div className={styles.child}>
                  {topic.sections && (
                    topic.sections.map((section: Isection) => (
                      <>
                        <Link key={section.key} href={section.link}>
                          <motion.h3
                            className={styles.link}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <a className='uk-link-heading'>
                              {section.name}
                            </a>
                          </motion.h3>
                        </Link>
                      </>
                    ))
                  )}
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
