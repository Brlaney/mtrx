import Link from 'next/link';
import { VscMenu } from 'react-icons/vsc';
import styles from '@/styles/components/Navbar.module.scss';

export default function Nav() {
  return (
    <div
      id={styles.navbar}
      className='uk-position-relative uk-dark'
    >
      <nav
        id={styles.navcontainer}
        className='uk-navbar-container'
        uk-navbar='dropbar: true'
      >
        <div id={styles.parent} className='uk-navbar-left'>
          <ul className='uk-navbar-nav'>
            <li>
              <a id={styles.brand} href='#'>
                <VscMenu
                  className={styles.navMenu}
                  size='1.75rem'
                  color='white'
                />
              </a>
              <div className='uk-navbar-dropdown'>
                <ul className='uk-nav uk-navbar-dropdown-nav'>
                  <li id={styles.listItem1} className='uk-*'>
                    <Link href='/'>
                      <a className={styles.link1}>Home</a>
                    </Link>
                  </li>
                  <li id={styles.listHeader} className='uk-nav-header'>
                    [Mtrx]
                  </li>
                  <li id={styles.listItem2} className='uk-*'>
                    <Link href='/solver'>
                      <a className={styles.link2}>Solver</a>
                    </Link>
                  </li>
                  <li className='uk-nav-divider' />
                  <li id={styles.listItem3} className='uk-*'>
                    <Link href='/learn/matrix'>
                      <a className={styles.link3}>Stiffness</a>
                    </Link>
                  </li>
                  <li id={styles.listItem4} className='uk-*'>
                    <Link href='/learn/bridge-design'>
                      <a className={styles.link4}>Bridge</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className='uk-navbar-dropbar' />
    </div>
  )
};
