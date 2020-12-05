import React from "react";
import './style.css';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import Hero from '../Hero/Hero';

const ModalChoose = (props) => {
    console.log(props)
    return (
        <div className="modal">
            <div className="modal__content">
            <div className="modal__top">
                <div className="container">
                    <h3 className="modal__title">{t(props.lang,'Choice your cero')}</h3>
                    <p className="btn" onClick={props.hide}>{t(props.lang,'close')} </p>
                </div>
            </div>
            <div className="modal__hero">
                <div className="container">
                    <Hero />
                 </div>
            </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { lang: state.lang}
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(ModalChoose);