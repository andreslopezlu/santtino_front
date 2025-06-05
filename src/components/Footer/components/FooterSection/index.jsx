import styles from "./FooterSection.module.css"

import { useState } from "react"

const FooterSection = ({title, onToggleSection, isSectionVisible, children}) => {

  const [isContentVisible, setIsContentVisible] = useState(false)

  const showContent = () => {
    setIsContentVisible(true)
  }

  const hideContent = () => {
    setIsContentVisible(false)
  }

  return (
    <>
      <div className={styles.section} onMouseLeave={hideContent}>
        <p className={`${styles.title} ${isContentVisible ? styles.titleSelected : ""}`} onClick={showContent}>{title}</p>
        <div className={`${isContentVisible ? styles.contentVisible : styles.contentInvisible}`}>
          {children}
        </div>
      </div>
    </>
  )
}

export default FooterSection