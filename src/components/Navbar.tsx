import Link from 'next/link'
import styles from '@/styles/components/Navbar.module.scss'


const Navbar = () => {
  return (
    <>
      <nav id={styles.navbar} className='uk-navbar-container'>

        {/* Left-end of navbar */}
        <div id={styles.parent} className='uk-navbar-left'>
          <a id={styles.brand} href='/' className='uk-navbar-item uk-logo uk-margin-small-left'>
            Next | Charts
          </a>

          {/* Matrix dropdown menu */}
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
    </>
  )
}

export default Navbar
