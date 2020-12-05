import React from "react";
import ReactDOM from 'react-dom';
import './style.css';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import HeroOption from '../HeroOption';

const ModalSucces = (props) => props.isShowing ? ReactDOM.createPortal(
    <React.Fragment>
       <div className="modal modal-succes modal-omg">
        <div className="modal__content">
        <div className="modal__top">
            <div className="container">
                <h3 className="modal__title modal__big">{t(props.lang,'OMG!')}</h3>
                <p className="modal__text">{t(props.lang,"What's in store for you? Open the chest as soon as possible to get a reward! You deserve it!")} </p>
            </div>
        </div>
        <div className="modal__hero">
            <div className="container">
                <img  src={`${process.env.PUBLIC_URL}/images/omg.svg`} />
             </div>
        </div>
        <div className="modal__flex">
            <p className="btn"  onClick={props.hide} >
                {t(props.lang, 'Back')}
            </p>
            <p className="main-btn"  onClick={props.hide} >
                {t(props.lang, 'Open')}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalSucces);