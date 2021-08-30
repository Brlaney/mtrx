import { convertToRadians, convertToDegrees, coordinatesToL } from '@/lib/utils/matrix/convert'
import { calcAreaR, calcAreaD, multiplyMatrices } from '@/lib/utils/matrix/calculate'
import styles from '@/styles/pages/Test.module.scss'

// Declaring variables for conversion functions
let mtx1 = [4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 5, 0, 4, 8, 4, 1]
let mtx2 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
let d1 = 90;
let d2 = 45;
let r1 = 1;
let r2 = 0.5;
let px1 = 0;
let py1 = 0;
let px2 = 10;
let py2 = 10;

// Declaring variables for calculation functions
let R1 = 3; // inches
let D1 = 6; // inches

export default function Tests() {
  let converedResult1 = convertToRadians(d1);
  let converedResult2 = convertToRadians(d2);
  let converedResult3 = convertToDegrees(r1);
  let converedResult4 = convertToDegrees(r2);
  let someMatrixResult = multiplyMatrices(mtx1, mtx2);
  let L1 = coordinatesToL(px1, py1, px2, py2);
  let area1 = calcAreaR(R1); // Output in sf.
  let area2 = calcAreaD(D1); // Output in sf.

  /* console.log(someMatrixResult);
  console.log(converedResult1);
  console.log(converedResult2);
  console.log(converedResult3);
  console.log(converedResult4);
  console.log(area1);
  console.log(area2);
  console.log(L1); */

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
          <div
            id={styles.data}
            className='uk-height-medium uk-flex uk-flex-center uk-flex-middle'
          >
            poop
          </div>

        </div>
      </div>
    </>
  )
}
