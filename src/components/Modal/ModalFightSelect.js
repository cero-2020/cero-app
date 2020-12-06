import React from "react";
import './style.css';
import {t} from '../../src/translate';
import {connect} from "react-redux";
import Modal from "./index";
import useModal from "./useModal";
import Hero from "../Hero/Hero";
import {setToFightHero1} from "../../redux/actions/heroToFight";

const ModalFightSelect = (props) => {
    const {isShowing, toggle} = useModal();

    const renderHeroes = () => {
        let heroes = props.addressToHeroes[props.account.walletFormatted];
        if (undefined === heroes || 0 === heroes.length) {
            return '';
        } else {
            return heroes.map((heroData, key) => {
                return (<div onClick={() => {
                    props.setToFightHero1(props.heroData);
                    // props.toggle(true);
                    // toggle(false);
                }} className="HeroItem">
                    <Hero key={key} heroData={heroData} action={'none'}/>
                </div>);
            });
        }
    }

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__top">
                    <div className="container">
                        <h3 className="modal__title">{t(props.lang, 'Choice your cero')}</h3>
                        <p className="btn" onClick={props.toggle}>{t(props.lang, 'close')} </p>
                    </div>
                </div>
                <div className="modal__hero">
                    <div className="container">
                        {renderHeroes()}
                    </div>
                </div>
                <div>
                    <p className="main-btn">
                        {t(props.lang, 'Find the enemy')}
                    </p>
                </div>
            </div>
            <Modal isShowingModalFight={isShowing} toggle={toggle}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        lang: state.lang,
        drizzle: state.drizzle,
        account: state.account,
        addressToHeroes: state.addressToHeroes,
        heroToFight: state.heroToFight,
    }
}

const mapDispatchToProps = {
    setToFightHero1,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ModalFightSelect);