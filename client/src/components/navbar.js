import React from "react";
import { Link } from "react-router-dom";
// import {Context} from '../index';
import logo from '../photos/LogoTextTest.png';
import accLogo from '../photos/account.png';

import { LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts.js";
import '../css/NavBar.css';

const NavBar = () => {
    // const {user} = useContext(Context)
    return (
        <div className="nav">
            <div className="top-nav">
                <Link to={SHOP_ROUTE} >
                    <img src={logo} alt="logo" className="logo"/>
                </Link>
                <a href="tel:+380739538582" className="phone-num">073-953-85-82</a>
                <input type="text" className="search"/>
                <button className="basket">basket</button>
                <Link to={LOGIN_ROUTE}>
                <img src={accLogo} alt="account" className="acc-logo"/>
                </Link>
            </div>
            <div className="bottom-nav">
                <Link to = "/smartphones" className="link-cat">Смартфони,<br /> 
                електроніка та ТВ</Link>
                <p>|</p>
                <Link to = "/household" className="link-cat">Нваушники</Link>
                <p>|</p>
                <Link to = "/householdAppliances" className="link-cat">Побутова техніка</Link>
                <p>|</p>
                <Link to = "/tools" className="link-cat">Інструменти та<br /> 
                автотовари</Link>
                <p>|</p>
                <Link to="/sport" className="link-cat">Спорт та захоплення</Link>
                <p>|</p>
                <Link to="/sales" className="link-cat">Розпродаж</Link>
            </div>
            
        </div>
    )

}

export default NavBar;