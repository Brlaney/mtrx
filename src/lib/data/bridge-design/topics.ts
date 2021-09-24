import { ITopicB } from '@/lib/types'

export const topics: ITopicB[] = [
  {
    id: 1, title: 'The Basics', sections: [
      { key: 1, name: 'Bridge Details', link: '/bridge-design/topics/bridge-details' },
      { key: 2, name: 'Parapet Design', link: '/bridge-design/topics/parapet-design' },
      { key: 3, name: 'Deck Overhang', link: '/bridge-design/topics/deck-overhang' },
      { key: 4, name: 'Interior Bays', link: '/bridge-design/topics/interior-bays' }
    ] 
  },
  {
    id: 2, title: 'PPC Concrete Girders', sections: [
      { key: 5, name: 'Interior', link: '/bridge-design/topics/interior-pcc' },
      { key: 6, name: 'Exterior', link: '/bridge-design/topics/exterior-pcc' },
      { key: 7, name: 'Preliminary Design', link: '/bridge-design/topics/preliminary-design' }
    ]
  },
  {
    id: 3, title: 'Steel Bridge Girders', sections: [
      { key: 8, name: 'Fatigue', link: '/bridge-design/topics/fatigue' },
      { key: 9, name: 'Analysis', link: '/bridge-design/topics/analysis' },
      { key: 10, name: 'Preliminary Design', link: '/bridge-design/topics/preliminary-design' }
    ]
  },
  {
    id: 4, title: 'Piers and Piles', sections: [
      { key: 11, name: 'Pier Cap', link: '/bridge-design/topics/pier-cap' },
      { key: 12, name: 'Pier Column', link: '/bridge-design/topics/pier-column' },
      { key: 13, name: 'Pile Cap', link: '/bridge-design/topics/pile-cap' }
    ]
  },
  {
    id: 5, title: 'Footings, abutments, and more', sections: [
      { key: 14, name: 'Spread Footing ', link: '/bridge-design/topics/spread-footing' },
      { key: 15, name: 'Drilled Shaft', link: '/bridge-design/topics/drilled-shaft' },
      { key: 16, name: 'Abutment Design', link: '/bridge-design/topics/abutment-design' },
      { key: 17, name: 'Standard PPC I-Beams', link: '/bridge-design/topics/standard-ppc-i-beams' },
    ]
  },
  {
    id: 6, title: 'Loads and construction', sections: [
      { key: 18, name: 'Miscellaneous Loads on Bridges', link: '/bridge-design/topics/miscellaneous-loads-on-bridges' },
      { key: 19, name: 'Load Combinations and Limit States', link: '/bridge-design/topics/load-combinations-and-limit-states' },
      { key: 20, name: 'Bridge Construction Stages', link: '/bridge-design/topics/bridge-construction-stages' },
    ]
  },
  {
    id: 7, title: 'Miscellaneous', sections: [
      { key: 21, name: 'Interior Bay Deck Design Moments', link: '/bridge-design/topics/interior-bay-deck-design-moments' },
      { key: 22, name: 'Pile Driving Equipment', link: '/bridge-design/topics/pile-driving-equipment' },
      { key: 23, name: 'Preliminary Field Splice Design', link: '/bridge-design/topics/preliminary-field-splice-design' }
    ]
  },
];
