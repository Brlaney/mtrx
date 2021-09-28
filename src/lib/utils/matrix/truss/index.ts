/* Function 1.)
Converts radians into degrees
Only use locally within this script. */
function radToDeg(thetaRad) {
  let initial = thetaRad * 180;
  let converted = Math.round(initial / Math.PI);
  return converted;
};

/* Function 2.)
Converts degrees into radians
Only use locally within this script. */
function degToRad(thetaDeg) {
  let initial = thetaDeg * Math.PI;
  let final = initial / 180;
  let converted = final.toFixed(2);
  return converted;
};


/* Function 3.) 
Switch conditional to return proper theta value 
Case 1: oriented at 0 degrees
Case 2: oriented at 90 degrees
Case 3: oriented at 180 degrees
Case 4: oriented at 270 degrees
Case 5: Quadrant I    (0 < theta < 90)
Case 6: Quadrant II   (90 < theta < 180)
Case 7: Quadrant III  (180 < theta < 270)
Case 8: Quadrant IV   (270 < theta < 360). */
export function orientation(dx, dy) {
  if (dx > 0 && dy == 0) {
    let t = 0;
    return t;
  } else if (dx == 0 && dy > 0) {
    let t = 90;
    return t;
  } else if (dx < 0 && dy == 0) {
    let t = 180;
    return t;
  } else if (dx < 0 && dy == 0) {
    let t = 270;
    return t;
  } else if (dx > 0 && dy > 0) {
    let theta = Math.atan(dy / dx);
    let t = radToDeg(theta);
    return t;
  } else if (dx < 0 && dy > 0) {
    let theta = Math.atan(dy / dx);
    let t = radToDeg(theta) + 180;
    return t;
  } else if (dx < 0 && dy < 0) {
    let theta = Math.atan(dy / dx);
    let t = radToDeg(theta) + 180;
    return t;
  } else {
    let theta = Math.atan(dy / dx);
    let t = radToDeg(theta) + 360;
    return t;
  }
};


/* Function 4.) 
Local degrees of freedom in kn1, kn2, kn3, kn4
within lDof [kn1, kn2, kn3, kn4, ... ]  */
export function deltas(end1, end2, coordinates) {
  if (end1 == 1 && end2 == 2) {
    // Each nodes (x, y) coordinates
    let x1 = coordinates[end1 - 1];
    let y1 = coordinates[end1];
    let x2 = coordinates[end2];
    let y2 = coordinates[2 * end2 - 1];

    // Change in x & y (dx, dy)
    let dx = x2 - x1;
    let dy = y2 - y1;

    return [dx, dy];
  } else {
    let x1 = coordinates[2 * end1 - 2];
    let y1 = coordinates[2 * end1 - 1];
    let x2 = coordinates[2 * end2 - 2];
    let y2 = coordinates[2 * end2 - 1];

    let dx = x2 - x1;
    let dy = y2 - y1;

    return [dx, dy];
  }
};


/* Function 5.)
Calculate a column vector that contains the calculated 
length of each element based on the coordinates matrix.

Inputs:
  - m, number of members in the system.
  - coordinates, a 2 x m array containing the 
    (x, y) coordinates of each node.
  - connects, a 2 x m array where each row_n represents
    element_m. Col 1. is local member-end 1 and Col 2. 
    is local member-end 2.
   
  Uncomment the following line and change return to [elemL, elemT, elemR]   
let elemT = []; //Will contain each elements theta (degrees)
if you desire the output of the element orientation angles in degrees. */
export function elementLengths(coordinates, connects) {
  const m = connects.length / 2;    // Number of members in system
  const n = coordinates.length / 2; // Number of global in system
  let elemL = []; // Will contain each elements length (ft.)
  let thetaR = []; // theta vector in radians
  let thetaD = []; // theta vector in degrees
  let lDof = []; // Will contain mapping array
  let gDof = [];

  for (let j = 1; j <= n; j++) {
    gDof.push(2 * j - 1);
    gDof.push(2 * j);
  };

  for (let i = 0; i < m; i++) {
    let end1 = connects[i * 2];
    let end2 = connects[i * 2 + 1];
    
    lDof.push(2 * end1 - 1);
    lDof.push(2 * end1);
    lDof.push(2 * end2 - 1);
    lDof.push(2 * end2);

    let changes = deltas(end1, end2, coordinates);

    let dx = changes[0];
    let dy = changes[1];

    let length = Math.sqrt(dx * dx + dy * dy);
    let theta = orientation(dx, dy);
    
    // Theta vector (elements angles) in radians
    thetaD.push(theta); // Output in degrees
    
    let rad = degToRad(theta);
    thetaR.push(rad); // Output in radians

    elemL.push(length.toFixed(2));
  };
 return [elemL, thetaR, thetaD, lDof, gDof];
};


/* Function 6.)
Transformation function for Truss members
  Inputs: 
- m, number of members in the system
- radV, theta vector containing theta for each element in radians
- lengthV, length vector containing the length of each element (ft.)
- AV, cross - sectional area vector, in^2 or m^2)
- EV, modulus of elasticity vector, psi or Pa [N/m^2])

Output: local truss member stiffness matrix in global coordinates. */
export function localK(m, radians, lengths, elasticity, area) {
  let T = []; // Will append all k_ij's

  for (let i = 0; i < m; i++) {
    let theta = radians[i];
    let L = lengths[i] * 12;
    let A = area[i];
    let E = elasticity[i];
    
    let s = Math.sin(theta);
    let c = Math.cos(theta);
    let coeff = A * E / L;
    
    // Row 1
    let k11 = coeff * c * c;
    let k12 = coeff * c * s;
    let k13 = coeff * - c * c;
    let k14 = coeff * - c * s;
    
    // Row 2
    let k21 = coeff * c * s;
    let k22 = coeff * s * s;
    let k23 = coeff * - c * s;
    let k24 = coeff * - s * s;
    
    // Row 3
    let k31 = coeff * - c * c;
    let k32 = coeff * -c * s;
    let k33 = coeff * c * c;
    let k34 = coeff * c * s;
    
    // Row 4
    let k41 = coeff * - c * s;
    let k42 = coeff * - s * s;
    let k43 = coeff * c * s;
    let k44 = coeff * s * s;
    
    T.push([
      k11.toFixed(2), k12.toFixed(2), k13.toFixed(2), k14.toFixed(2),
      k21.toFixed(2), k22.toFixed(2), k23.toFixed(2), k24.toFixed(2),
      k31.toFixed(2), k32.toFixed(2), k33.toFixed(2), k34.toFixed(2),
      k41.toFixed(2), k42.toFixed(2), k43.toFixed(2), k44.toFixed(2)
    ]);   
  };
  return T;
};
