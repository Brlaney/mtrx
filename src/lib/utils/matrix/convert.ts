/* Function 1.)

Converts degrees to radians ~
Input: members angle of orientation in degrees
Output: members angle of orientation in radians */
export function convertToRadians(angleInDegrees) {
  let initial = angleInDegrees * Math.PI;
  let final = initial / 180;
  
  // Rounded to whole number
  let convertedToRadians = Math.round(final); 

  return convertedToRadians;
}

/* Function 2.)

Converts radians to degrees ~
Input: members angle of orientation in radians
Output: members angle of orientation in degrees */
export function convertToDegrees(angleInRadians) {
  let initial = angleInRadians * 180;
  let final = initial / Math.PI;

  // Rounded to whole number
  let convertedToDegrees = Math.round(final); 

  return convertedToDegrees;
}
