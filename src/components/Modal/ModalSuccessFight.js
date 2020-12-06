import React from "react";
import './style.css';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import HeroOption from '../HeroOption';

const ModalSuccessFight = (props) => {
    return (
        <div className="modal modal-succes">
            <div className="modal__content">
                <div className="modal__top">
                    <div className="container">
                        <h3 className="modal__title modal__big">{t(props.lang,'WOW!')}</h3>
                        <p className="modal__text">{t(props.lang,'You get a new Cero, congratulations! Keep fighting  and level up!')}</p>
                    </div>
                </div>
                <div className="modal__hero">
                    <div className="container">
                        <HeroOption heroData={props.fightResult.newHero}/>
                    </div>
                </div>
                <div className="modal__flex">
                    <p className="btn"  onClick={() => props.toggle('close')} >
                        {t(props.lang, 'Close')}
                    </p>
                    {/*<p className="main-btn"  onClick={props.toggle} >*/}
                    {/*    {t(props.lang, 'Go fight!')}*/}
                    {/*</p>*/}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        heroCreated: state.heroCreated,
        lang: state.lang
    }
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(ModalSuccessFight);