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
            Designed by
            <a
              id={styles.span}
              target='_blank'
              rel='noopener noreferrer'
              className='uk-text-primary uk-padding-small uk-text-large'
            >
              Brendan Laney
            </a>
            &copy; 2021
          </p>
        </Link>
      </div>
    </>
  )
}

export default Footer
