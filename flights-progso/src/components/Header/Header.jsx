import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import s from './Header.module.css';
import { useState } from 'react';
import cn from 'classnames';
import { IoIosClose } from "react-icons/io";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <header className={s.header}>
            <img className={s.header_logo} src={logo} />
            <nav className={isOpen ? s.burger_nav : s.header_nav}>
                <div onClick={closeMenu} className={s.link}><Link to='/' >Home</Link></div>
                <div onClick={closeMenu} className={s.link}><Link to='/flights'>Flights</Link></div>
                <div onClick={closeMenu} className={s.link}><Link to='about' >About us</Link></div>
                <div onClick={closeMenu} className={s.link}><Link to='/contact' >Contact</Link></div>
            </nav>
            {!isOpen ? <div className={s.header_menu} onClick={toggleMenu}>☰</div> : <IoIosClose className={s.active_menu} onClick={toggleMenu} /> }
        </header>
    )
}

export default Header;