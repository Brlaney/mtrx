import Image from 'next/image'
import Footer from '@/components/Footer'
import styles from '@/styles/pages/Home.module.scss'
import { multiplyMatrices } from '@/lib/utils/matrix/beams'
import { convertToRadians, convertToDegrees } from '@/lib/utils/matrix/convert'

let d1 = 90;
let d2 = 45;
let r1 = 1;
let r2 = 0.5;

let converedResult1 = convertToRadians(d1);
let converedResult2 = convertToRadians(d2);
let converedResult3 = convertToDegrees(r1);
let converedResult4 = convertToDegrees(r2);


let someMatrix = [
  4, 0, 0, 0,
  0, 3, 0, 0,
  0, 0, 5, 0,
  4, 8, 4, 1
]

let identityMatrix = [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1
];

// Returns a new array equivalent to someMatrix
let someMatrixResult = multiplyMatrices(identityMatrix, someMatrix);

export default function Home() {
  console.log(someMatrixResult);
  console.log(converedResult1);
  console.log(converedResult2);
  console.log(converedResult3);
  console.log(converedResult4);

  return (
    <>
      {/* Main parent container */}
      <div className={styles.parent}>

        {/* Homepage header container */}
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome, to
            <span id={styles.next}> Next Charts</span>
          </h1>
          <h4 className={styles.subtitle}>
            A sample Next app that features stunning Charts
          </h4>
        </div>

        {/* Grid row I - children = columns/cards */}
        <div className={styles.grid}>

          {/* Grid column I */}
          <div 
            id={styles.image} 
            className='uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-dark'
          >
            <Image src='/brands/Uikit.png' width={200} height={200} />
          </div>

          {/* Grid column II */}
          <div 
            id={styles.image} 
            className='uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-dark'
          >
            <Image src='/brands/chartjs.png' width={200} height={200} />
          </div>

          {/* Grid column III */}
          <div
            id={styles.image}
            className='uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-dark'
          >
            <Image src='/brands/React.png' width={200} height={200} />
          </div>
        </div>

        {/* Grid row II - children = columns/cards caption text */}
        <div className={styles.grid}>

          {/* Card/column I caption */}
          <h4 className={styles.uikit}>
            <span className={styles.company}>Styled with </span>
             UiKit
          </h4>

          {/* Card/column II caption */}
          <h4 className={styles.chartjs}>
            <span className={styles.company}>Visualizations designed using </span>
             Chart.js
          </h4>

          {/* Card/column III caption */}
          <h4 className={styles.react}>
            <span className={styles.company}>Developed with </span>
             React/Next
          </h4>
        </div>
      </div>
      <Footer />
    </>
  )
}
