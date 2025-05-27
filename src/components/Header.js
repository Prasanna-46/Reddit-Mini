import React from "react";
import './Header.css';
import logo from '../logo.png';
function Header() {
    return (
        <header className="app-header">
            <img src={logo} className="logo" alt="logo" />
            <h1>Reddit-Mini <span className="author">by Prasanna L</span></h1>
            {/*TODO Navigation or additional links*/}
        </header>
    );
}

export default Header;