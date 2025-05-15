import { useNavigate } from "react-router-dom"

import styles from "./NavbarButton.module.css"

const NavbarButton = ({kind, link, task, taskVal, display, children}) => {

  const navigate = useNavigate() 

  const handleClick = () => {
    if (kind === "navigate"){
      if(taskVal){
        task(!taskVal)
      }
      navigate(link)
    } else if (kind === "deploy") {
      task(!taskVal)
    } else if (kind === "search") {
      if(taskVal){
        task(!taskVal)
      }
      return
    }
  }

  const displayedButton = display === 'mobile' ? styles.mobile : display === 'desktop' ? styles.desktop : ""

  return (
    <button onClick={handleClick} className={`${styles.navbarButton} ${displayedButton}`} >
      {children}
    </button>
  )
}

export default NavbarButton
