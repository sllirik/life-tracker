import { useState } from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const openMenu = () => {
        setIsOpenMenu(prev => !prev);
    };

  return (
    <header className="header">
        <div className="container header__container">
            <div className="logo">Life<span>Tracker</span></div>
            <nav className={`nav-menu ${isOpenMenu ? 'nav-menu--open' : ''}`} id="navMenu">
                <NavLink className={({isActive}) => `nav-menu__link ${isActive ? 'nav-menu__link--active' : ''}`} to="/" onClick={()=> setIsOpenMenu(false)}>Фокус дня</NavLink>
                <NavLink className={({isActive}) => `nav-menu__link ${isActive ? 'nav-menu__link--active' : ''}`} to="goals-page" onClick={()=> setIsOpenMenu(false)}>Цели</NavLink>
                <NavLink className={({isActive}) => `nav-menu__link ${isActive ? 'nav-menu__link--active' : ''}`} to="habits-page" onClick={()=> setIsOpenMenu(false)}>Привычки</NavLink>
                <NavLink className={({isActive}) => `nav-menu__link ${isActive ? 'nav-menu__link--active' : ''}`} to="achievements" onClick={()=> setIsOpenMenu(false)}>Достижения</NavLink>
            </nav>

            <button className={`nav-toggle ${isOpenMenu ? 'nav-toggle--open' : ''}`} onClick={openMenu}>
                <span className="nav-toggle__line"></span>
            </button>
        </div>
    </header>
  )
}

export default Header