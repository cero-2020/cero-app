import React from "react";
import ReactDOM from 'react-dom';

import './style.css';

import {t} from '../../src/translate';
import {connect} from "react-redux";

const ModalInfo = (props) => props.isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal modal-succes modal-info">
            <div className="modal__content">
                <div className="modal__top">
                    <div className="container">
                        <h3 className="modal__title modal__big">{t(props.lang,'INFO!')}</h3>
                        <br/>
                        <p className="modal__text">{t(props.lang, props.message)}</p>
                    </div>
                </div>
                <div className="modal__flex">
                    <p className="btn" onClick={() => props.setSHowInfo(false)} >
                        {t(props.lang, 'OK!')}
                    </p>
                </div>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

const mapStateToProps = (state) => {
    return { lang: state.lang }
}

export default connect(mapStateToProps)(ModalInfo);