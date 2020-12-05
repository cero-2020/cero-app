import React, {useState} from "react";
import ReactDOM from 'react-dom';
import './style.css';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import ModalResult from './ModalResult';
import ModalChoose from './ModalChoose';

const Modal = (props) => {
    return (
        <>
            { props.isShowing ? <ModalResult /> : null }
            { props.isShowingModalChoose ? <ModalChoose /> : null }
        </>
    )
  
}
const mapStateToProps = (state) => {
    return { lang: state.lang}
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(Modal);