import React from "react";
import ReactDOM from 'react-dom';
import './style.css';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import HeroOption from '../HeroOption';

const ModalSuccess = (props) => props.isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal modal-succes success_image">
            <div className="modal__content">
                <div className="modal__top">
                    <div className="container">
                        <h3 className="modal__title modal__big">{t(props.lang,'YEAH!')}</h3>
                        <p className="modal__text">{t(props.lang,'You have a level')} <span>2 hero ,</span> {t(props.lang,'congratulations! Keep fighting to level up and become even stronger!')} </p>
                    </div>
                </div>
                <div className="modal__hero">
                    <div className="container">
                        <HeroOption />
                    </div>
                </div>
                <div className="modal__flex">
                    <p className="btn"  onClick={props.hide} >
                        {t(props.lang, 'Close')}
                    </p>
                    <p className="main-btn"  onClick={props.hide} >
                        {t(props.lang, 'Go fight!')}
                    </p>
                </div>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

const mapStateToProps = (state) => {
    return { lang: state.lang }
}

export default connect(mapStateToProps)(ModalSuccess);