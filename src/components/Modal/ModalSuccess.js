import React from "react";
import './style.css';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import HeroOption from '../HeroOption';

const ModalSuccess = (props) => {
    return (
        <div className="modal modal-succes">
            <div className="modal__content">
                <div className="modal__top">
                    <div className="container">
                        <h3 className="modal__title modal__big">{t(props.lang,'YEAH!')}</h3>
                        <p className="modal__text">{t(props.lang,'You have a level')} <span>{props.heroCreated.info.level} Cero,</span> {t(props.lang,'congratulations! Keep fighting to level up and become even stronger!')} </p>
                    </div>
                </div>
                <div className="modal__hero">
                    <div className="container">
                        <HeroOption heroData={props.heroCreated}/>
                    </div>
                </div>
                <div className="modal__flex">
                    <p className="btn" onClick={props.toggle} >
                        {t(props.lang, 'Close')}
                    </p>
                    {/*<p className="main-btn" onClick={props.toggle} >*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalSuccess);