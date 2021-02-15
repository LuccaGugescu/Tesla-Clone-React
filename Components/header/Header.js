import React from 'react';
import './Header.css';
import TeslaLogo from '../../assets/teslaLogoSmall.svg';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={TeslaLogo} alt="Tesla Logo" />
            </div>
            <div className="header__center">
                <p>MODEL S</p>
                <p>MODEL 3</p>
                <p>MODEL X</p>
                <p>MODEL Y</p>
                <p>SOLAR ROOF</p>
                <p>SOLAR PANEL</p>
            </div>
            <div className="header__right">
                <p>SHOP</p>
                <p>TESLA ACCOUNT</p>
            </div>
            <div className="header__option">
                <MenuIcon />
            </div>
        </div>
    )
}

export default Header
