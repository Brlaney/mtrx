export const data = [
  'The given frame system. Each Node will have three degrees of freedom; Horizontal displacement, vertical displacement, and rotational displacement (bending).',
  'Discretize your system and label the systems nodes in a consistant manner - note that each node will have three degrees of freedom.',
  'Label your global degrees of freedom. You can see there is a global horizontal, vertical, and moment force at each node.',
  "The 'unrestrained' degrees of freedom will be the displacements that we will solve for first - they are non-zero unknown displacements. We will use this to enforce boundary conditions for the system as the unrestrained degrees of freedom will be the global displacements that are non-zero",
  "If a horizontal external force is applied to your system, the frame will be in a state of deflection known as 'sidesway'. DeltaH2 and DeltaH3 represent the horizontal displacement at node 2 and 3 respectively.",
  'Now, suppose our system is subjected to a bending moment applied externally along with the horizontal loading. The exxagerated deflection is shown in this graphic. DeltaH3, DeltaV3, and theta3 represent horizontal, vertical, and rotational deflection at node 3.'
];

export const buttonTexts = [
  { id: 1, text: 'Frame system' },
  { id: 2, text: 'Discretize' },
  { id: 3, text: "Global forces" },
  { id: 4, text: "Unrestrained dof's" },
  { id: 5, text: "Sidesway" },
  { id: 6, text: 'Sidesway + rotation' }
];
