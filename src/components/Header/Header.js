import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import {t} from '../../src/translate';
import {connect} from "react-redux";
import {useEffect, useState} from 'react';
import Modal from "../Modal";
import { setLang } from "../../redux/actions/lang";
import Logo from '../src/images/cero.svg';
import Btn from '../src/images/fight.svg';

const Header = (props) => {
    const [activeModal, setActiveModal] = useState(null);
    const [fightResult, setFightResult] = useState(null);

    function toggleActiveModal(active) {
        if ('close' === active) {
            setActiveModal(null)
            return;
        }

        setActiveModal(active)
    }

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
        let heroes = props.addressToHeroes[props.account.walletFormatted] || [];
        if (null === props.account.wallet || 0 === heroes.length) return '';
        return (
            <div onClick={() => toggleActiveModal('fight-select')} className="main-btn header-btn">{t(props.lang,'Start fight')} <img src={Btn}/></div>
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
                        {/*TODO add translate*/}
                        {/*<div className="header__lang">
                            <p onClick={() => props.setLang('en-GB')} className={props.lang === 'en-GB' ? 'active' : 'inactive'}>EN</p>
                            <span>|</span>
                            <p onClick={() => props.setLang('ru-RU')} className={props.lang === 'ru-RU' ? 'active' : 'inactive'}>RU</p>
                        </div>*/}
                        { renderFightButton() }
                    </div>
                </div>
            </header>
            <Modal active={activeModal} toggle={toggleActiveModal} fightResult={fightResult} setFightResult={setFightResult} />
        </>

    );
}
const mapStateToProps = (state) => {
    return {
        lang: state.lang,
        addressToHeroes: state.addressToHeroes,
        heroToFight: state.heroToFight,
        account: state.account
    }
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(Header);