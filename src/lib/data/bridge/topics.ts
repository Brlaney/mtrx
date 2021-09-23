import { ITopicB } from '@/lib/types'

export const topics: ITopicB[] = [
  {
    id: 1, title: 'The Basics', sections: [
      { key: 1, name: 'Bridge Details', link: 'bridge-details' },
      { key: 2, name: 'Parapet Design', link: 'parapet-design' },
      { key: 3, name: 'Deck Overhang', link: 'deck-overhang' },
      { key: 4, name: 'Interior Bays', link: 'interior-bays' }
    ] 
  },
  {
    id: 2, title: 'Precast Prestressed Concrete Girders', sections: [
      { key: 5, name: 'Interior', link: 'interior-pcc' },
      { key: 6, name: 'Exterior', link: 'exterior-pcc' },
      { key: 7, name: 'Preliminary Design', link: 'preliminary-design' }
    ]
  },
  {
    id: 3, title: 'Steel Bridge Girders', sections: [
      { key: 8, name: 'Fatigue', link: 'fatigue' },
      { key: 9, name: 'Analysis', link: 'analysis' },
      { key: 10, name: 'Preliminary Design', link: 'preliminary-design' }
    ]
  },
  {
    id: 4, title: 'Piers and Piles', sections: [
      { key: 11, name: 'Pier Cap', link: 'pier-cap' },
      { key: 12, name: 'Pier Column', link: 'pier-column' },
      { key: 13, name: 'Pile Cap', link: 'pile-cap' }
    ]
  },
  {
    id: 5, title: 'Footings, abutments, and more', sections: [
      { key: 14, name: 'Spread Footing ', link: 'spread-footing' },
      { key: 15, name: 'Drilled Shaft', link: 'drilled-shaft' },
      { key: 16, name: 'Abutment Design', link: 'abutment-design' },
      { key: 17, name: 'Standard PPC I-Beams', link: 'standard-ppc-i-beams' },
    ]
  },
  {
    id: 6, title: 'Loads and construction', sections: [
      { key: 18, name: 'Miscellaneous Loads on Bridges', link: 'miscellaneous-loads-on-bridges' },
      { key: 19, name: 'Load Combinations and Limit States', link: 'load-combinations-and-limit-states' },
      { key: 20, name: 'Bridge Construction Stages', link: 'bridge-construction-stages' },
    ]
  },
  {
    id: 7, title: 'Piers and Piles', sections: [
      { key: 21, name: 'Interior Bay Deck Design Moments', link: 'interior-bay-deck-design-moments' },
      { key: 22, name: 'Pile Driving Equipment', link: 'pile-driving-equipment' },
      { key: 23, name: 'Preliminary Field Splice Design', link: 'preliminary-field-splice-design' }
    ]
  },
];
