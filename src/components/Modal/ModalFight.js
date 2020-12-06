import React from "react";
import './style.css';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import Btn from '../src/images/fight.svg';
import HeroOption from '../HeroOption';

const ModalFight = (props) => {
    return (
        <div className="modal modal-fight">
        <div className="modal__content">
        <div className="modal__top">
            <div className="container">
                <h3 className="modal__title">{t(props.lang,'Choice your cero')}</h3>
                <p className="btn" onClick={props.toggle}>{t(props.lang,'close')} </p>
            </div>
        </div>
        <div className="modal__hero">
            <div className="container">
                {/*<HeroOption />
                    <div className="modal__hero-vs">
                        <img  src={`${process.env.PUBLIC_URL}/images/fight.svg`} />
                        <p>{t(props.lang,'VS')}</p>
                    </div>
                <HeroOption />*/}
             </div>
        </div>
        <div className="modal__flex">
            <p className="btn"  onClick={props.toggle} >
                {t(props.lang, 'Back')}
            </p>
            <p className="main-btn"  onClick={props.toggle} >
                {t(props.lang, 'Start fight')}
                <img  src={Btn} />
            </p>
        </div>
        </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return { lang: state.lang}
}

export default connect(mapStateToProps)(ModalFight);