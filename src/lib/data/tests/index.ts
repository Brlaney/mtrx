export const phases = [
  { id: 1, state: 'none', txt: 'x' },
  { id: 2, state: 'el1', txt: '1.', n1: 1, n2: 2, theta: 0.79 },
  { id: 3, state: 'el2', txt: '2.', n1: 2, n2: 3, theta: 0.00 },
  { id: 4, state: 'el3', txt: '3.', n1: 3, n2: 4, theta: 5.50 },
  { id: 5, state: 'el4', txt: '4.', n1: 1, n2: 3, theta: 0.47 },
  { id: 6, state: 'el5', txt: '5.', n1: 4, n2: 2, theta: 2.67 },
  { id: 7, state: 'all', txt: '6.' }
];

export const nodes = [
  { index: 1, id: 'node1', cx: '71.5', cy: '171.5', r: '2.5', activeAt: [1, 4, 6] },
  { index: 2, id: 'node2', cx: '171.5', cy: '61.5', r: '2.5', activeAt: [1, 2, 5, 6] },
  { index: 3, id: 'node3', cx: '271.5', cy: '61.5', r: '2.75', activeAt: [2, 3, 4, 6] },
  { index: 4, id: 'node4', cx: '371.5', cy: '171.5', r: '2.75', activeAt: [3, 5, 6] }
];

export const elements = [
  { index: 1, id: 'element1', d: 'M73.5 169.5L170.5 63.5', activeAt: [1, 6] },
  { index: 2, id: 'element2', d: 'M174 62L269 62', activeAt: [2, 6] },
  { index: 3, id: 'element3', d: 'M272.5 63.5L369.5 169.5', activeAt: [3, 6] },
  { index: 4, id: 'element4', d: 'M74 170L269.5 63.5', activeAt: [4, 6] },
  { index: 5, id: 'element5', d: 'M173.5 63.5L369 170', activeAt: [5, 6] }
];
