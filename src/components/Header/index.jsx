import styles from "./Header.module.css"

import { useState } from 'react';

import Offers from './components/Offers';
import Navbar from "./components/Navbar"
import MobileMenu from "./components/MobileMenu";

const Header = () => {

	const [isMenuVisible, setIsMenuVisible] = useState(false)

	return (
		<>
			<div className={styles.header}>
				<Offers />
				<Navbar isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}/>
				<MobileMenu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}/>
			</div>
		</>
	)
}

export default Header
