// export const selectUnits = [
//   { label: 'Select your units', value: '' },
//   { label: 'Force: lbs, Length: in', value: 1 },
//   { label: 'Force: lbs, Length: ft', value: 2 },
//   { label: 'Force: K, Length: in', value: 3 },
//   { label: 'Force: K, Length: ft', value: 4 },
//   { label: 'Force: N, Length: cm', value: 5 },
//   { label: 'Force: N, Length: m', value: 6 },
//   { label: 'Force: KN, Length: cm', value: 7 },
//   { label: 'Force: KN, Length: m', value: 8 },
// ];

export const units = [
  { value: 1, label: 'US (Imperial)'},
  { value: 2, label: 'Metric'},
];

export const forces = ['lbs', 'lbs', 'K', 'K', 'N', 'N', 'KN', 'KN'];
export const lengths = ['in', 'ft', 'in', 'ft', 'cm', 'm', 'cm', 'm'];

export const step1 = [
  { key: '1', classname: 'styles.active', name: 'Item 1' },
  { key: '2', classname: 'styles.notactive', name: 'Item 2' },
  { key: '3', classname: 'styles.notactive', name: 'Item 3' },
];

export const step2 = [
  { key: '1', classname: 'styles.active', name: 'Item 1' },
  { key: '2', classname: 'styles.active', name: 'Item 2' },
  { key: '3', classname: 'styles.notactive', name: 'Item 3' },
];

export const step3 = [
  { key: '1', classname: 'styles.active', name: 'Item 1' },
  { key: '2', classname: 'styles.active', name: 'Item 2' },
  { key: '3', classname: 'styles.active', name: 'Item 3' },
];
