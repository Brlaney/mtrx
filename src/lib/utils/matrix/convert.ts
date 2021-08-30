/* Function 1.)

Converts degrees to radians ~
  Input: members angle of orientation in degrees
  Output: members angle of orientation in radians */
export function convertToRadians(angleInDegrees) {
  let initial = angleInDegrees * Math.PI;
  let final = initial / 180;

  // Rounded to whole number
  let thetaR = Math.round(final);

  return thetaR;
}


/* Function 2.)

Converts radians to degrees ~
  Input: members angle of orientation in radians
  Output: members angle of orientation in degrees */
export function convertToDegrees(angleInRadians) {
  let initial = angleInRadians * 180;
  let final = initial / Math.PI;

  // Rounded to whole number
  let thetaD = Math.round(final);

  return thetaD;
}


/* Function 3.)

Converts US length in ft or in to metric m (meters)
  Input: A length measurement in imperial units (US) either ft
  Output: Length converted into metric units, meters */
export function lengthToMetric(length) {
  let initial = length / 3.281;
  let L = initial.toFixed(2);

  return L;
}


/* Function 4.)

Converts US length in ft or in to metric m (meters) or cm
  Input: A length measurement in imperial units (US) either ft or in
  Output: Length converted into metric units, m or cm */
export function lengthToUS(length) {
  let initial = length * 3.281;
  let L = initial.toFixed(2);

  return L;
}


/* Function 5.)

Converts US length in ft or in to metric m (meters) or cm
  Input: A length measurement in imperial units (US) either ft or in
  Output: Length converted into metric units, m or cm */
export function coordinatesToL(xy1, xy2) {
  let x1 = xy1[0];
  let y1 = xy1[1];
  let x2 = xy2[0];
  let y2 = xy2[1];

  let dx = x2 - x1;
  let dy = y2 - y1;

  let L = Math.sqrt(dx * dx + dy * dy);

  return L;
}
