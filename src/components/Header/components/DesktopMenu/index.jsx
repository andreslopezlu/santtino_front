import { Link } from 'react-router-dom';

import styles from "./DesktopMenu.module.css"

const DesktopMenu = () => {

  return (
  <div className={`${styles.desktopMenu}`}>
    <Link to="/" className={styles.link}>Home</Link>
    <Link to="/products" className={styles.link}>Products</Link>
    <Link to="/about" className={styles.link}>About</Link>
    <Link to="/blog" className={styles.link}>Blog</Link>
    <Link to="/support" className={styles.link}>Support</Link>
  </div>
  )
}

export default DesktopMenu
