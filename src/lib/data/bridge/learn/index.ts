import { IBridge } from '@/lib/types'

export const topics: IBridge[] = [
  { id: 1, title: 'Bridge Details', lower: 'bridge-details' },
  { id: 2, title: 'Parapet Design', lower: 'parapet-design' },
  {
    id: 3, title: 'Deck Design', lower: 'deck-design', content: [
      { key: 1, button: 'Overhang', name: 'overhang', disabled: 1 },
      { key: 2, button: 'Interior Bays', name: 'interior-bays', disabled: 1 }
    ]
  },
  {
    id: 4, title: 'Precast Prestressed Concrete Girder', lower: 'precast-prestressed-concrete-girder', content: [
      { key: 1, button: 'Interior', name: 'interior', disabled: 1 },
      { key: 2, button: 'Exterior', name: 'exterior', disabled: 1 },
      { key: 3, button: 'Preliminary Design', name: 'preliminary-design', disabled: 1 }
    ]
  },
  {
    id: 5, title: 'Steel Bridge Girders', lower: 'steel-bridge-girders', content: [
      { key: 1, button: 'Fatigue', name: 'fatigue', disabled: 1 },
      { key: 2, button: 'Analysis', name: 'analysis', disabled: 1 },
      { key: 3, button: 'Preliminary Design', name: 'preliminary-design', disabled: 1 }
    ]
  },
  { id: 6, title: 'Pier Cap', lower: 'pier-cap' },
  { id: 7, title: 'Pier Column', lower: 'pier-column' },
  { id: 8, title: 'Pile Cap', lower: 'pile-cap' },
  { id: 9, title: 'Spread Footing ', lower: 'spread-footing' },
  { id: 10, title: 'Drilled Shaft', lower: 'drilled-shaft' },
  { id: 11, title: 'Abutment Design', lower: 'abutment-design' },
  { id: 12, title: 'Standard PPC I-Beams', lower: 'standard-ppc-i-beams' },
  { id: 13, title: 'Miscellaneous Loads on Bridges', lower: 'miscellaneous-loads-on-bridges' },
  { id: 14, title: 'Load Combinations and Limit States', lower: 'load-combinations-and-limit-states' },
  { id: 15, title: 'Bridge Construction Stages', lower: 'bridge-construction-stages' },
  { id: 16, title: 'Interior Bay Deck Design Moments', lower: 'interior-bay-deck-design-moments' },
  { id: 17, title: 'Pile Driving Equipment', lower: 'pile-driving-equipment' },
  { id: 18, title: 'Preliminary Field Splice Design', lower: 'preliminary-field-splice-design' }
];
