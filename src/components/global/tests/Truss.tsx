import * as React from 'react';
import { motion } from 'framer-motion'
import { shapeVariations } from '@/lib/config/animations/svgs/svgs';
import { INode, IElement } from '@/lib/types';
import { nodes, elements } from '@/lib/data/tests';

const strokeColors = [
  'rgba(37, 35, 35, 0.3)',
  '#414141'
];

const fillColors = [
  'rgba(202, 222, 252, 0.7)',
  '#CADEFC'
];

const textColors = [
  '#B8B8B8',
  '#4E4E4E'
];

const Truss = ({ status }) => {

  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <svg
        width='443'
        height='233'
        viewBox='0 0 443 233'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='Truss' data-name='truss'>

          {/* Renders each element with two conditional states */}
          {elements.map((element: IElement) => (
            <motion.path
              key={element.index}
              id={element.id}
              d={element.d}
              stroke={element.activeAt.includes(status) ? strokeColors[1] : strokeColors[0]}
              {...shapeVariations}
              animate='visible'
              initial='hidden'
              layout
            />
          ))}

          {/* Renders each node with two conditional states */}
          {nodes.map((node: INode) => (
            <motion.circle
              key={node.index}
              id={node.id}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={node.activeAt.includes(status) ? fillColors[1] : fillColors[0]}
              stroke={node.activeAt.includes(status) ? strokeColors[1] : strokeColors[0]}
              {...shapeVariations}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
              }}
              initial={{ y: 60, opacity: 0, }}
              layout
            />
          ))}
        </g>
      </svg>
    </motion.div>
  )
};

export default Truss;
