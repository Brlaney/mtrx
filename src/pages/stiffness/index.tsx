import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/lib/config/animations/svgs/staggered';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { server } from '@/lib/config/server';
import { ITopicS, Isection } from '@/lib/types';
import GoBack from '@/components/global/buttons/GoBack';
import styles from '@/styles/pages/Topics.module.scss';

const Stiffness = ({ topics }:
  InferGetStaticPropsType<typeof getStaticProps>) => {
  const [topicsList] = React.useState(topics);
  const endpoint = '/';

  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <GoBack link={endpoint} />
      <motion.div className={styles.container} variants={stagger}>
        <div
          id={styles.space}
          className='uk-height-small uk-flex uk-flex-center'
        />

        <motion.div className={styles.header} variants={fadeInUp}>
          <h3 className={styles.title}>
            The <span className={styles.span}>stiffness</span> method
          </h3>
        </motion.div>

        {/* Dynamic topic cards */}
        <motion.div className={styles.grid} variants={fadeInUp}>
          {topicsList.map((topic: ITopicS) => (
            <motion.div
              key={topic.id}
              id={topic.id < 5 ? styles.stiffness : null}
              className={topic.id < 5 ? styles.card : styles.wideCard}
              variants={fadeInUp}
            >
              <div className={styles.cardbody}>
                <h2 className={styles.sectionTitle}>{topic.title}</h2>
                <motion.div className={styles.child}>
                  {topic.sections && (
                    topic.sections.map((section: Isection) => (
                      <Link key={section.key} href={section.link}>
                        <motion.div
                          className={styles.contents}
                          variants={fadeInUp}
                          whileHover={{
                            position: 'relative',
                            zIndex: 1,
                            scale: 1.04,
                            transition: {
                              duration: 0.6,
                              ease: [0.3, -0.01, 0.01, 0.79]
                            }
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.a
                            id={styles.link}
                            className='uk-link-heading'
                          >
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
      </motion.div>
    </motion.div>
  )
};

export const getStaticProps: GetStaticProps = async _context => {
  const endpoint = `${server}/api/stiffness`;
  const res = await fetch(endpoint);
  const topics: ITopicS[] = await res.json();

  return {
    props: {
      topics
    }
  }
};

export default Stiffness;
