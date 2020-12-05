import React, {useState} from "react";
import ReactDOM from 'react-dom';
import './style.css';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import ModalResult from './ModalResult';
import ModalChoose from './ModalChoose';
import ModalFight from './ModalFight';
import ModalFightSelect from './ModalFightSelect';
import ModalOmg from './ModalOmg';
import ModalSorry from './ModalSorry';
import ModalSucces from './ModalSucces';

const Modal = (props) => {
    return (
        <>
            { props.isShowingModalResult ? <ModalResult /> : null }
            { props.isShowing ? <ModalChoose /> : null }
            { props.isShowingModalFigh ? <ModalFight /> : null }
            { props.isShowingModalFightSelect ? <ModalFightSelect /> : null }
            { props.isShowingModalOmg ? <ModalOmg /> : null }
            { props.isShowingModalSucces ? <ModalSucces /> : null }
            { props.isShowingModalSorry ? <ModalSorry /> : null }
        </>
    )
  
}
const mapStateToProps = (state) => {
    return { lang: state.lang}
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(Modal);