import * as React from 'react';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
import { variants } from '@/lib/config/animations/tests/nav';

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
