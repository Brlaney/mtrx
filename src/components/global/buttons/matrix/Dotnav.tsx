import * as React from 'react';
import styles from '@/styles/components/Buttons.module.scss';

export const Dotnav: React.FC<{ step }> = ({ step }) => {
  return (
    <>
      <div className={styles.dotnav}>
        <ul id={styles.dotnavInner} className='uk-dotnav'>
          {step.map(value => (
            <li
              id={value.key}
              className={value.classname}
            >
              <a className={value.classname}>{value.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
};
