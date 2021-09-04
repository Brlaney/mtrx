export const selectUnits = [
  { label: 'Select your units', value: '' },
  { label: 'Force: lbs, Length: in', value: 'imperial1' },
  { label: 'Force: lbs, Length: ft', value: 'imperial2' },
  { label: 'Force: K, Length: in', value: 'imperial3' },
  { label: 'Force: K, Length: ft', value: 'imperial4' },
  { label: 'Force: N, Length: cm', value: 'metric1' },
  { label: 'Force: N, Length: m', value: 'metric2' },
  { label: 'Force: KN, Length: cm', value: 'metric3' },
  { label: 'Force: KN, Length: m', value: 'metric4' },
];

export const step1 = [
  { key: 'is', classname: 'uk-active', name: 'Item 1' },
  { key: 'not', classname: 'uk-*', name: 'Item 2' },
  { key: 'not', classname: 'uk-*', name: 'Item 3' },
];

export const step2 = [
  { key: 'is', classname: 'uk-active', name: 'Item 1' },
  { key: 'is', classname: 'uk-active', name: 'Item 2' },
  { key: 'not', classname: 'uk-*', name: 'Item 3' },
];

export const step3 = [
  { key: 'is', classname: 'uk-active', name: 'Item 1' },
  { key: 'is', classname: 'uk-active', name: 'Item 2' },
  { key: 'is', classname: 'uk-active', name: 'Item 3' },
];
