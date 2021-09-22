export const data = [
  'The given frame system. Each Node will have three degrees of freedom; Horizontal displacement, vertical displacement, and rotational displacement (bending).',
  'Discretize your system and label the systems nodes.',
  'Label your global degrees of freedom.',
  "The 'unrestrained' degrees of freedom will be the displacements that we will solve for first - they are non-zero unknown displacements.",
  "If a horizontal external force is applied to your system, the frame will be in a state of deflection known as 'sidesway'",
  'Now, suppose our system is subjected to a bending moment applied externally along with the horizontal loading. The exxagerated deflection is shown in this graphic.'
];

export const buttonTexts = [
  { id: 1, text: 'Frame system' },
  { id: 2, text: 'Labeled nodes' },
  { id: 3, text: "Global dof's" },
  { id: 4, text: "Unrestrained dof's" },
  { id: 5, text: "Sidesway" },
  { id: 6, text: 'Sidesway + rotation' }
];
