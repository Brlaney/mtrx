import Link from 'next/link'
import styles from '@/styles/components/Navbar.module.scss'


const Navbar = () => {
  return (
    <div
      id={styles.navbar}
      className='uk-sticky uk-dark'
      uk-sticky='sel-target: .uk-navbar-container;
       cls-active: uk-navbar-sticky;'
    >
      <nav id={styles.navcontainer} className='uk-navbar-container'>

        {/* Navbar title/brand */}
        <div id={styles.parent} className='uk-navbar-left'>
          <a id={styles.brand} href='/' className='uk-navbar-item uk-logo uk-margin-small-left'>
            Next | Charts
          </a>

          {/* Navbar links */}
          <ul id={styles.list} className='uk-navbar-nav'>
            <li id={styles.listItem} className='uk-*'>
              <Link href='/matrix'>
                <a className={styles.navlink}>Matrix</a>
              </Link>
            </li>
            <li id={styles.listItem} className='uk-*'>
              <Link href='/charts'>
                <a className={styles.navlink}>Charts</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div >
  )
}

export default Navbar
