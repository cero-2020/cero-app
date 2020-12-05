import React from "react";
import ReactDOM from 'react-dom';
import './style.css';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import Hero from '../Hero/Hero';

const ModalFightSelect = (props) => props.isShowing ? ReactDOM.createPortal(
    <React.Fragment>
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
        <div>
            <p className="main-btn"  onClick={props.hide} >
                {t(props.lang, 'Find the enemy')}
            </p>
        </div>
        </div>
    </div>
    </React.Fragment>, document.body
) : null;

const mapStateToProps = (state) => {
    return { lang: state.lang}
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(ModalFightSelect);