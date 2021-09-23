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
    id: 2, title: 'Precast Prestressed Concrete Girder', sections: [
      { key: 1, name: 'Interior', link: 'interior-pcc' },
      { key: 2, name: 'Exterior', link: 'exterior-pcc' },
      { key: 3, name: 'Preliminary Design', link: 'preliminary-design' }
    ]
  },
  {
    id: 3, title: 'Steel Bridge Girders', sections: [
      { key: 1, name: 'Fatigue', link: 'fatigue' },
      { key: 2, name: 'Analysis', link: 'analysis' },
      { key: 3, name: 'Preliminary Design', link: 'preliminary-design' }
    ]
  },
  {
    id: 4, title: 'Piers and Piles', sections: [
      { key: 1, name: 'Pier Cap', link: 'pier-cap' },
      { key: 2, name: 'Pier Column', link: 'pier-column' },
      { key: 3, name: 'Pile Cap', link: 'pile-cap' }
    ]
  },
  {
    id: 5, title: 'Footings, abutments, and more', sections: [
      { id: 1, name: 'Spread Footing ', link: 'spread-footing' },
      { id: 2, name: 'Drilled Shaft', link: 'drilled-shaft' },
      { id: 3, name: 'Abutment Design', link: 'abutment-design' },
      { id: 4, name: 'Standard PPC I-Beams', link: 'standard-ppc-i-beams' },
    ]
  },
  {
    id: 6, title: 'Piers and Piles', sections: [
      { id: 1, name: 'Miscellaneous Loads on Bridges', link: 'miscellaneous-loads-on-bridges' },
      { id: 2, name: 'Load Combinations and Limit States', link: 'load-combinations-and-limit-states' },
      { id: 3, name: 'Bridge Construction Stages', link: 'bridge-construction-stages' },
    ]
  },
  {
    id: 7, title: 'Piers and Piles', sections: [
      { id: 1, name: 'Interior Bay Deck Design Moments', link: 'interior-bay-deck-design-moments' },
      { id: 2, name: 'Pile Driving Equipment', link: 'pile-driving-equipment' },
      { id: 3, name: 'Preliminary Field Splice Design', link: 'preliminary-field-splice-design' }
    ]
  },
];
