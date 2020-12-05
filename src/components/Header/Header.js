import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import Logo from '../src/images/cero.svg';
import Btn from '../src/images/fight.svg';
import MyCero from '../src/images/my.svg';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import useModal from '../Modal/useModal';
import Modal from '../Modal';

const Header = (props) => {
    const {isShowing, toggle} = useModal();
    return (
        <>
        <header className="header">
            <div className="container">
                <div className="header__flex">
                    <p className="header__logo"><Link to="/">
                        <img src={Logo}/>
                        </Link></p>
                    <div className="header__menu">
                        <Link to="/hero-list" className="header__menu-link"><img src={MyCero}/> {t(props.lang, 'My cero')}</Link>
                        <Link to="/hero-create" className="header__menu-link">{t(props.lang,'Create cero')}</Link>
                        <Link to="/account" className="header__menu-link">{t(props.lang,'Account')}</Link>
                    </div>
               </div>
               <div className="header__flex">
                   <div className="header__lang">
                        <p onClick={() => props.setLang('en-GB')}>EN</p>
                        <span>|</span>
                        <p onClick={() => props.setLang('ru-RU')}>RU</p>
                   </div>
                   <p  onClick={toggle} className="main-btn header-btn">{t(props.lang,'Start fight')} <img src={Btn}/></p>
               </div>
            </div>
        </header>
        </>
        
    );
}
const mapStateToProps = (state) => {
    return { lang: state.lang}
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(Header);