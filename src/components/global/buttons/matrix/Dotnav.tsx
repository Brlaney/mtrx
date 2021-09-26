import * as React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/components/Buttons.module.scss';

const stateI = () => {
  <motion.div layout>
    <motion.ul id='dotnav-1' className='uk-dotnav'>
      <motion.li className='uk-active' />
      <motion.li className='uk-*' />
      <motion.li className='uk-*' />
    </motion.ul>
  </motion.div>
};

const stateII = () => {
  <motion.div layout>
    <motion.ul id='dotnav-2' className='uk-dotnav'>
      <motion.li className='uk-active' />
      <motion.li className='uk-active' />
      <motion.li className='uk-*' />
    </motion.ul>
  </motion.div>
};

const stateIII = () => {
  <motion.div layout>
    <motion.ul id='dotnav-3' className='uk-dotnav'>
      <motion.li className='uk-active' />
      <motion.li className='uk-active' />
      <motion.li className='uk-active' />
    </motion.ul>
  </motion.div>
};

const Dotnav = ({ props }) => {
    if (props.step == 1) {
      return { stateI };
    } else if (props.step == 2) {
      return { stateII };
    } else if (props.step == 3) {
      return { stateIII };
    };
};

export default Dotnav;
