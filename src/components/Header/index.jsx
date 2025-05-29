import styles from "./Header.module.css"

import { useState } from 'react';

import Offers from './components/Offers';
import Navbar from "./components/Navbar"
import MobileMenu from "./components/MobileMenu";

const Header = () => {

	const [isMenuVisible, setIsMenuVisible] = useState(false)

	const handleMenuVisibility = () => {
     setIsMenuVisible(!isMenuVisible)
}

	return (
		<>
			<div className={styles.header}>
				<Offers />
				<Navbar isMenuVisible={isMenuVisible} onMenuToggle={handleMenuVisibility}/>
				<MobileMenu isMenuVisible={isMenuVisible} onMenuToggle={handleMenuVisibility}/>
			</div>
		</>
	)
}

export default Header
