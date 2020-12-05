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
            { props.isShowingModalResult ? <ModalResult hide={props.toggle} /> : null }
            { props.isShowing ? <ModalChoose hide={props.toggle}/> : null }
            { props.isShowingModalFigh ? <ModalFight /> : null }
            { props.isShowingModalFightSelect ? <ModalFightSelect  hide={props.toggle}/> : null }
            { props.isShowingModalOmg ? <ModalOmg hide={props.toggle}/> : null }
            { props.isShowingModalSucces ? <ModalSucces  hide={props.toggle}/> : null }
            { props.isShowingModalSorry ? <ModalSorry  hide={props.toggle}/> : null }
        </>
    )
  
}
const mapStateToProps = (state) => {
    return { lang: state.lang}
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(Modal);