import { Link } from 'react-router-dom';

import styles from "./MobileMenu.module.css"

const MobileMenu = ({isMenuVisible, setIsMenuVisible}) => {

  const handleLinkClick = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  return (
  <div className={`${styles.menu} ${isMenuVisible ? styles.active : styles.inactive}`} >
    <Link to="/" onClick={handleLinkClick} className={styles.link}>Home</Link>
    <Link to="/products" onClick={handleLinkClick} className={styles.link}>Products</Link>
    <Link to="/about" onClick={handleLinkClick} className={styles.link}>About</Link>
    <Link to="/blog" onClick={handleLinkClick} className={styles.link}>Blog</Link>
    <Link to="/support" onClick={handleLinkClick} className={styles.link}>Support</Link>
  </div>
  )
}

export default MobileMenu
