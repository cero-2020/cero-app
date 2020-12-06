import React from "react";
import './style.css';
import {t} from '../../src/translate';
import {connect} from "react-redux";
import Modal from "./index";
import HeroItem from "../Hero/HeroItem";
import useModal from "./useModal";

const ModalFightSelect = (props) => {
    const {isShowing, toggle} = useModal();

    const renderHeroes = () => {
        let heroes = props.addressToHeroes[props.account.walletFormatted];
        return heroes.map((heroData, key) => {
            return (<HeroItem key={ key } heroData={ heroData }/>);
        });
    }

    return (
        <div className="modal">
        <div className="modal__content">
        <div className="modal__top">
            <div className="container">
                <h3 className="modal__title">{t(props.lang,'Choice your cero')}</h3>
                <p className="btn" onClick={props.toggle}>{t(props.lang,'close')} </p>
            </div>
        </div>
        <div className="modal__hero">
            <div className="container">
                {renderHeroes()}
             </div>
        </div>
        <div>
            <p className="main-btn"  onClick={()=>{
                <Modal isShowingModalFight={props.isShowing} toggle={props.toggle}/>
            }} >
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
    }
}

export default connect(mapStateToProps)(ModalFightSelect);