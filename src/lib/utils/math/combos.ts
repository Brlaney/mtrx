/* Function 1.)
Calculates area given a radius ~
  Input: cross-sectional radius
  Output: cross-sectional area in US units 
*/
const combos = (objects) => {
  if (objects.length === 0) return [[]];
  const firstEl = objects[0];
  const rest = objects.slice(1);
  const combosWithoutFirst = combos(rest);
  const combosWithFirst = [];

  combosWithoutFirst.forEach((combo) => {
    const comboWithFirst = [...combo, firstEl];
    combosWithFirst.push(comboWithFirst);
  });

  return [...combosWithoutFirst, ...combosWithFirst];
}

export default combos;

// combos([])
// combos(['a', 'b', 'c', 'd', 'e', 'f'])
