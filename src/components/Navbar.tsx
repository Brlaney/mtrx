import Link from 'next/link';
// import Brand from '@/components/buttons/Brand';
import S1 from '@/components/buttons/logo/S1';
import styles from '@/styles/components/Navbar.module.scss';

export default function Navbar () {
  return (
    <div
      id={styles.navbar}
      className='uk-sticky uk-dark'
      uk-sticky='sel-target: .uk-navbar-container;
       cls-active: uk-navbar-sticky;'
    >
      <nav
        id={styles.navcontainer}
        className='uk-navbar-container'
      >

        {/* Navbar title/brand - left-end of navbar */}
        <div
          id={styles.parent}
          className='uk-navbar-left uk-margin-large-left'
        >
          <a
            id={styles.brand}
            href='/'
            className='uk-navbar-item uk-logo uk-margin-large-left'
          >
            {/* <Brand /> Mtrx */}
            <S1 /> [Mtrx]
          </a>
        </div>

        {/* Navbar links - right-end of navbar */}
        <div className='uk-navbar-right uk-margin-large-right'>
          <ul
            id={styles.list}
            className='uk-navbar-nav uk-margin-large-right'
          >
            <li id={styles.listItem} className='uk-*'>
              <Link href='/matrix'>
                <a id={styles.link}>Solver</a>
              </Link>
            </li>
            <li id={styles.listItem} className='uk-*'>
              <Link href='/learn/matrix'>
                <a id={styles.link}>Matrix</a>
              </Link>
            </li>
            <li id={styles.listItem} className='uk-*'>
              <Link href='/learn/bridge-design'>
                <a id={styles.link}>Bridge</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div >
  )
};
