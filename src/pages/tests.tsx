import {
  // convertToRadians,
  // convertToDegrees,
  coordinatesToL
} from '@/lib/utils/matrix/convert'

// import { 
// calcAreaR,
//   calcAreaD,
//   multiplyMatrices 
// } from '@/lib/utils/matrix/calculate'

import {
  trussK,
  beamK
} from '@/lib/utils/matrix/transform'

import styles from '@/styles/pages/Test.module.scss'


// Declaring variables for conversion functions
// let mtx1 = [4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0, 4, 8, 4, 1]
// let mtx2 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
// let d1 = 90;
// let d2 = 45;
// let r1 = 1;
// let r2 = 0.5;

// Represents: (x1, y1) & (x2, y2)
// let p1 = [0, 0];   
// let p2 = [10, 10];

// Declaring variables for calculation functions
// let R1 = 3; // inches
// let D1 = 6; // inches

export default function Tests() {
  // let convertedResult1 = convertToRadians(d1);
  // let convertedResult2 = convertToRadians(d2);
  // let convertedResult3 = convertToDegrees(r1);
  // let convertedResult4 = convertToDegrees(r2);
  // let someMatrixResult = multiplyMatrices(mtx1, mtx2);
  // let L1 = coordinatesToL(p1, p2);
  // let area1 = calcAreaR(R1); // Output in sf.
  // let area2 = calcAreaD(D1); // Output in sf.

  //
  // console.log(someMatrixResult);
  // console.log(convertedResult1);
  // console.log(convertedResult2);
  // console.log(convertedResult3);
  // console.log(convertedResult4);
  // console.log(area1);
  // console.log(area2);
  // console.log(L1); 
  //
  let theta1 = 45;
  let A1 = 0.79;
  let L1 = 10;
  let E1 = 29000000;
  let example1 = trussK(theta1, E1, A1, L1);
  console.log(example1);

  let E2 = 29000000;
  let I2 = 200;
  let L2 = 144;
  let example2 = beamK(E2, I2, L2)
  console.log(example2);

  return (
    <>
      {/* Main parent container */}
      <div className={styles.parent}>

        {/* Homepage header container */}
        <div className={styles.header}>
          <h2 className={styles.title}>The test page
          </h2>
        </div>

        {/* Grid row I - children = columns/cards */}
        <div className={styles.grid}>

          {/* Grid column I */}
          <div className={styles.card}>
            <div className={styles.banner}>
              <h3 className={styles.output}>
                Input: <span className={styles.focus}> 90&deg; </span>
              </h3>
            </div>
            {/* <div className={styles.banner}>
              <h3 className={styles.output}>
                Output: <span className={styles.focus}> {convertedResult1} </span>
              </h3>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
