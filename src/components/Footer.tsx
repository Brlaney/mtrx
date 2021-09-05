import Link from 'next/link'
import styles from '@/styles/components/Footer.module.scss'

const Footer = () => {
  return (
    <>
      <div
        id={styles.footer}
        className='uk-flex uk-flex-middle uk-flex-around'
      >
        <Link href='https://github.com/Brlaney'>
          <p className={styles.link}>
            Developed by <a target='_blank' rel='noopener noreferrer' className={styles.span}>Brendan Laney</a>
            &copy; 2021
          </p>
        </Link>
        <Link href='/tests'>
          <p className={styles.link}>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className={styles.tests}
            >
              Tests
            </a>
          </p>
        </Link>
      </div>
    </>
  )
}

export default Footer
