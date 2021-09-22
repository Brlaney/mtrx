/* Function 1.)
Calculate a beam elements local FEM array for a 
member subjected to a Uniformly distributed load. 

Inputs:
  - w, the uniformly distributed load (kips or lbs per ft.)
  - L, the length of the member (ft.) 
*/
export function femW(w, L) {
  let row1 = w * L / 2;
  let row2 = - w * L ^ 2 / 12;
  let row3 = w * L / 2;
  let row4 = w * L ^ 2 / 12;

  // The outputs format:
  // [V1, M1, V2, M2] = [shear, moment, shear, moment];
  return [row1, row2, row3, row4];
};


/* Function 2.)
Calculate a beam elements local FEM array for a member subjected 
to a point load applied at 1/2 the length of the member. 

Inputs:
  - P, the uniformly distributed load (kips or lbs per ft.)
  - L, the length of the member (ft.) 
*/
export function femP(P, L) {
  let row1 = P / 2;
  let row2 = - P * L / 8;
  let row3 = P / 2;
  let row4 = P * L / 8;

  // The outputs format:
  // [V1, M1, V2, M2] = [shear, moment, shear, moment];
  return [row1, row2, row3, row4];
};
