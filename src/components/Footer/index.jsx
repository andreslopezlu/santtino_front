import styles from "./Footer.module.css"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { useState } from "react"

import FooterSection from "./components/FooterSection"

import santtinoLogoMobile from "../../../src/assets/escudo_dorado.png"
import santtinoLogoDesktop from "../../../src/assets/Logo_dorado_sinsoporte.png"

const Footer = () => {

  const [isSectionVisible, setIsSectionVisible] = useState(false)

  const sectionToggle = () => {
    setIsSectionVisible(!isSectionVisible)
  }

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={santtinoLogoMobile} alt="santtino-logo-mobile" className={styles.logoMobile}/>
            <img src={santtinoLogoDesktop} alt="santtino-logo-desktop" className={styles.logoDesktop}/>
          </Link>
        </div>
        <div className={styles.followUsSection}>
          <p className={styles.sectionTitle}>Síguenos</p>
          <div className={styles.socialNetworks}>
            <div className={styles.networkContent}>
              <FontAwesomeIcon icon={faWhatsapp} size="xl" color="white" className={styles.socialIcon}/>
              <p className={styles.networkName}>WhatsApp</p>
            </div>
            <div className={styles.networkContent}>
              <FontAwesomeIcon icon={faInstagram} size="xl" color="white" className={styles.socialIcon}/>
              <p className={styles.networkName}>Instagram</p>
            </div>
          </div>
        </div>
        <FooterSection title="Cuenta" onToggleSection={sectionToggle} isSectionVisible={isSectionVisible}>
          <p className={styles.link}>Login</p>
          <p className={styles.link}>Profile</p>
        </FooterSection>
        <FooterSection title="Categorías" onToggleSection={sectionToggle} isSectionVisible={isSectionVisible}>
          <p className={styles.link}>Hombre</p>
          <p className={styles.link}>Mujer</p>
          <p className={styles.link}>Calzado</p>
          <p className={styles.link}>Chaquetas</p>
          <p className={styles.link}>Accesorios</p>
        </FooterSection>
        <FooterSection title="Soporte" onToggleSection={sectionToggle} isSectionVisible={isSectionVisible}>
          <p className={styles.link}>FAQ</p>
          <p className={styles.link}>Warranty</p>
        </FooterSection>
        <FooterSection title="Nosotros" onToggleSection={sectionToggle} isSectionVisible={isSectionVisible}>
          <p className={styles.link}>About us</p>
          <p className={styles.link}>Quality</p>
          <p className={styles.link}>Stories</p>
        </FooterSection>
        <FooterSection title="Descuentos" onToggleSection={sectionToggle} isSectionVisible={isSectionVisible}>
          <p className={styles.link}>5%</p>
          <p className={styles.link}>10%</p>
          <p className={styles.link}>All sales</p>
        </FooterSection>
        <div className={styles.contactSection}>
          <p className={styles.sectionTitle}>Contacto</p>
          <p className={styles.link}>Teléfono: +57 3107662443.</p>
          <p className={styles.link}>Dirección: Torre Sur Hotel Tequendama, Local 110, Cra. 10 #26-71, Bogotá, Colombia.</p>
          <p className={styles.link}>Horario: Lunes - Sábado, 8:00am - 4:00pm.</p>
        </div>
        <div className={styles.policies}>
            <p className={styles.link}>Pagos</p>
            <p className={styles.link}>Derechos</p>
            <p className={styles.link}>Términos</p>
        </div>
      </div>
    </>
  )
}

export default Footer
