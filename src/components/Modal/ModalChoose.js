import React from "react";
import './style.css';
import {t} from '../../src/translate';
import {connect} from "react-redux";
import Hero from '../Hero/Hero';

const ModalChoose = (props) => {
    const renderHeroes = () => {
        let heroes = props.addressToHeroes[props.account.walletFormatted];
        if (undefined === heroes || 0 === heroes.length) {
            return '';
        } else {
            if (null === props.heroToCreate.hero1) {
                return heroes.map((heroData, key) => {
                    return (<Hero key={ key } heroData={ heroData } action={'createHero1'} toggle={props.toggle}/>);
                });
            } else {
                return heroes.map((heroData, key) => {
                    if (heroData.number === props.heroToCreate.hero1.number || heroData.info.level !== props.heroToCreate.hero1.info.level) return '';
                    return (<Hero key={ key } heroData={ heroData } action={'createHero2'} toggle={props.toggle}/>);
                });
            }

        }
    }

    return (
        <div className="modal modal-choose">
            <div className="modal__content">
            <div className="modal__top">
                <div className="container">
                    <h3 className="modal__title">{t(props.lang,'Choose your Cero')}</h3>
                    <p className="btn" onClick={() => props.toggle('close')}>{t(props.lang,'close')} </p>
                </div>
            </div>
            <div className="modal__hero">
                <div className="container">
                    {renderHeroes()}
                 </div>
            </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        lang: state.lang,
        account: state.account,
        addressToHeroes: state.addressToHeroes,
        heroToCreate: state.heroToCreate
    }
}

export default connect(mapStateToProps)(ModalChoose);