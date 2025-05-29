import { useNavigate } from "react-router-dom"

import styles from "./NavbarButton.module.css"

import { NAVBAR_BUTTON_ACTION } from "../../../../utils/constants"

const NavbarButton = ({kind, link, onButtonClick, menuVisibility, display, children}) => {

  const navigate = useNavigate() 

  const handleButtonClick = () => {
    if (kind === NAVBAR_BUTTON_ACTION.navigate){
      if(menuVisibility){
        onButtonClick(!menuVisibility)
      }
      navigate(link)
    } else if (kind === NAVBAR_BUTTON_ACTION.deploy) {
      onButtonClick(!menuVisibility)
    } else if (kind === NAVBAR_BUTTON_ACTION.search) {
      if(menuVisibility){
        onButtonClick(!menuVisibility)
      }
      return
    }
  }

  const displayedButton = display === 'mobile' ? styles.mobile : display === 'desktop' ? styles.desktop : ""

  return (
    <button onClick={handleButtonClick} className={`${styles.navbarButton} ${displayedButton}`} >
      {children}
    </button>
  )
}

export default NavbarButton
