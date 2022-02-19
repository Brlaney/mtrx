import { ITopicS } from '@/lib/types';

export const topics: ITopicS[] = [
  {
    id: 1, title: 'Introduction', sections: [
      { key: 1, name: 'Truss', link: '/stiffness/displacements/truss' },
      { key: 2, name: 'Beam', link: '/stiffness/displacements/beam' },
      { key: 3, name: 'Frame', link: '/stiffness/displacements/frame' }
    ]
  },
  {
    id: 2, title: 'Learn the basics', sections: [
      { key: 4, name: 'Truss', link: '/stiffness/learn/truss' },
      { key: 5, name: 'Beam', link: '/stiffness/learn/beam' },
      { key: 6, name: 'Frame', link: '/stiffness/learn/frame' }
    ]
  },
  {
    id: 3, title: 'Tutorials', sections: [
      { key: 7, name: 'Truss', link: '/stiffness/examples/truss' },
      { key: 8, name: 'Beam', link: '/stiffness/examples/beam' },
      { key: 9, name: 'Frame', link: '/stiffness/examples/frame' }
    ]
  },
  {
    id: 4, title: 'Deformation graphs', sections: [
      { key: 10, name: 'Truss', link: '/stiffness/deformations/truss' },
      { key: 11, name: 'Beam', link: '/stiffness/deformations/beam' },
      { key: 12, name: 'Frame', link: '/stiffness/deformations/frame' }
    ]
  },
  {
    id: 5, title: 'Other topics', sections: [
      { key: 13, name: 'Discretization', link: '#' },
      { key: 14, name: 'Fixed-end-moments', link: '/stiffness/learn/fixed-end-moments' },
      { key: 15, name: 'Restrained & unrestrained nodes', link: '#' }
    ]
  }
];
