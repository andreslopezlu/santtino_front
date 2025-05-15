import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import styles from "./Navbar.module.css"

import santtinoLogoMobile from "../../../../assets/escudo_dorado.png"
import santtinoLogo from "../../../../assets/Logo_dorado_sinsoporte.png"

import NavbarButton from '../NavbarButton';
import DesktopMenu from '../DesktopMenu';

const Navbar = ({isMenuVisible, setIsMenuVisible}) => {

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navigation}>
          <NavbarButton kind="deploy" task={setIsMenuVisible} taskVal={isMenuVisible} display="desktop">
            <FontAwesomeIcon icon={faBars} size="lg" color="white" className={`${styles.navbarIcon}`}/>
          </NavbarButton>
          <NavbarButton kind="search" task={setIsMenuVisible} taskVal={isMenuVisible} display="desktop">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" color="white" className={`${styles.navbarIcon}`}/>
          </NavbarButton>
        </div>
        <div className={styles.home} >
          <NavbarButton kind="navigate" link="/" task={setIsMenuVisible} taskVal={isMenuVisible}>
            <img src={santtinoLogoMobile} alt="santtino-logo-mobile" className={styles.logoMobile}/>
            <img src={santtinoLogo} alt="santtino-logo-desktop" className={styles.logoDesktop}/>
          </NavbarButton>
        </div>
        <DesktopMenu />
        <div className={styles.profile}>
          <NavbarButton kind="search" task={setIsMenuVisible} taskVal={isMenuVisible} display="mobile">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" color="white" className={`${styles.navbarIcon}`}/>
          </NavbarButton>
          <NavbarButton kind="navigate" link="cart" task={setIsMenuVisible} taskVal={isMenuVisible}>
            <FontAwesomeIcon icon={faCartShopping} size="lg" color="white" className={styles.navbarIcon}/>
          </NavbarButton>
          <NavbarButton kind="navigate" link="/profile" task={setIsMenuVisible} taskVal={isMenuVisible}>
            <FontAwesomeIcon icon={faUser} size="lg" color="white" className={styles.navbarIcon}/>
          </NavbarButton>
        </div>
      </div>
    </>
  )
}

export default Navbar
