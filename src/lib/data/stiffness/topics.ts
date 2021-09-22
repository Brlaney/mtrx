import { IStiffnessTopics } from '@/lib/types';

export const topics: IStiffnessTopics[] = [
  {
    id: 1, title: 'Introduction', sections: [
      { key: 1, name: 'Truss', link: '/stiffness/displacements/truss' },
      { key: 2, name: 'Beam', link: '/stiffness/displacements/beam' },
      { key: 3, name: 'Frame', link: '/stiffness/displacements/frame' }
    ]
  },
  {
    id: 2, title: 'Learn the basics', sections: [
      { key: 1, name: 'Truss', link: '/stiffness/learn-the-basics/truss' },
      { key: 2, name: 'Beam', link: '/stiffness/learn-the-basics/beam' },
      { key: 3, name: 'Frame', link: '/stiffness/learn-the-basics/frame' }
    ]
  },
  {
    id: 3, title: 'Tutorials', sections: [
      { key: 1, name: 'Truss', link: '/stiffness/examples/truss' },
      { key: 2, name: 'Beam', link: '/stiffness/examples/beam' },
      { key: 3, name: 'Frame', link: '/stiffness/examples/frame' }
    ]
  },
  {
    id: 4, title: 'Deformation graphs', sections: [
      { key: 1, name: 'Truss', link: '/stiffness/deformations/truss' },
      { key: 2, name: 'Beam', link: '/stiffness/deformations/beam' },
      { key: 3, name: 'Frame', link: '/stiffness/deformations/frame' }
    ]
  },
  {
    id: 5, title: 'Other topics', sections: [
      { key: 1, name: 'Discretization', link: '#' },
      { key: 2, name: 'Fixed-end-moments', link: '/stiffness/learn-the-basics/fixed-end-moments' },
      { key: 3, name: 'Restrained & unrestrained nodes', link: '#' }
    ]
  }
];
