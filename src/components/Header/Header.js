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

const Header = (props) => {
    const {isShowing, toggle} = useModal();

    const renderMenu = () => {
        if (null === props.account.wallet) return '';
        return (
            <div className="header__menu">
                <Link to="/hero-list" className="header__menu-link">{t(props.lang, 'My Cero')}</Link>
                <Link to="/hero-create" className="header__menu-link">{t(props.lang,'Create Cero')}</Link>
                <Link to="/account" className="header__menu-link">{t(props.lang,'Account')}</Link>
            </div>
        );
    };

    const renderFightButton = () => {
        if (null === props.account.wallet) return '';
        return (
            <p onClick={toggle} className="main-btn header-btn">{t(props.lang,'Start fight')} <img src={Btn}/></p>
        );
    };

    return (
        <>
        <header className="header">
            <div className="container">
                <div className="header__flex">
                    <p className="header__logo"><Link to="/"><img src={Logo}/></Link></p>
                    { renderMenu() }
               </div>
               <div className="header__flex">
                   <div className="header__lang">
                        <p onClick={() => props.setLang('en-GB')} className={props.lang === 'en-GB' ? 'active' : 'inactive'}>EN</p>
                        <span>|</span>
                        <p onClick={() => props.setLang('ru-RU')} className={props.lang === 'ru-RU' ? 'active' : 'inactive'}>RU</p>
                   </div>
                   { renderFightButton() }
               </div>
            </div>
        </header>
        </>

    );
}
const mapStateToProps = (state) => {
    return {
        lang: state.lang,
        account: state.account
    }
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(Header);