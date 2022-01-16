/* Function 1.)
Calculates area given a radius ~
  Input: cross-sectional radius
  Output: cross-sectional area in US units 
*/
const combos = (containers) => {
  if (containers.length === 0) return [[]];
  const firstEl = containers[0];
  const rest = containers.slice(1);
  const combosWithoutFirst = combos(rest);
  const combosWithFirst = [];

  combosWithoutFirst.forEach((combo) => {
    const comboWithFirst = [...combo, firstEl];
    combosWithFirst.push(comboWithFirst);
  });

  console.log(combosWithoutFirst);
  console.log(combosWithFirst);

  return [...combosWithoutFirst, ...combosWithFirst];
}

export default combos;

// combos([])
// combos(['a', 'b', 'c', 'd', 'e', 'f'])
