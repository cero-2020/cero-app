import React from "react";
import './style.css';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";

const ModalSorry = (props) => {
    return (
        <div className="modal modal-succes modal-omg">
        <div className="modal__content">
        <div className="modal__top">
            <div className="container">
                <h3 className="modal__title modal__big">{t(props.lang,'Oh sorry!')}</h3>
                <p className="modal__text">{t(props.lang,"We apologize, cero, something went wrong! Get back to your journey! There are many evil forces in the world, with which your sword should fight!")} </p>
            </div>
        </div>
        <div className="modal__hero">
            <div className="container">
                <img  src={`${process.env.PUBLIC_URL}/images/sorry.svg`} />
             </div>
        </div>
        <div className="modal__flex">
            <p className="btn"  onClick={props.hide} >
                {t(props.lang, 'Back')}
            </p>
            <p className="main-btn"  onClick={props.hide} >
                {t(props.lang, 'Cero page')}
            </p>
        </div>
        </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return { lang: state.lang}
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(ModalSorry);