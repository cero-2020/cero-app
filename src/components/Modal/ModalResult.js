import React, {useState} from "react";
import './style.css';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import Hero from '../Hero/Hero';

const ModalResult = (props) => {
    return (
        <div className="modal modal-fight">
        <div className="modal__content">
        <div className="modal__hero">
            <div className="container">
                <Hero/>
                    <div className="modal__hero-vs">
                        <img  src={`${process.env.PUBLIC_URL}/images/fight.svg`} />
                        <p className={'win'}>{t(props.lang,'Lose')}</p>
                        <p className={'lose'}>{t(props.lang,'Lose')}</p>
                    </div>
                <Hero/>
             </div>
        </div>
        <p className={"modal__win-text"}>{t(props.lang,'Legends began to be told about your battle, until the last it was not clear who would win. But fate and experience were on your side. Congratulations on your')}<span>{t(props.lang,'victory,')}</span>{t(props.lang,'cero!')}</p>
        <p className={"modal__lose-text"}>{t(props.lang,"You fought like a tiger. The sound of battle rang out for hundreds of kilometers. But unfortunately the enemy turned out to be quicker. Don't be upset, cero, learn from your mistakes,")}<span>{t(props.lang,' defeat')}</span>{t(props.lang,'is an experience! Get ready for a new battle and everything will work out!!')}</p>
        <div className="modal__flex">
            <p className="btn"  onClick={props.hide} >
                {t(props.lang, 'Show logs')}
            </p>
            <p className="main-btn"  onClick={props.hide} >
                {t(props.lang, 'Take reward')}
                <img  src={`${process.env.PUBLIC_URL}/images/reward.svg`} />
            </p>
        </div>
        <div className="modal-log">
            <div className="container">
            <h4 className="modal-log__title">{t(props.lang,'Combat log')}</h4>
            <ul>
                <li>{t(props.lang,'My life belong to you sir hits Hello mr Anderson ho are you for 8 damage (220 -> 200)')} </li>
                <li>{t(props.lang,'My life belong to you sir hits Hello mr Anderson ho are you for 8 damage (220 -> 200)')} </li>
                <li>{t(props.lang,'My life belong to you sir hits Hello mr Anderson ho are you for 8 damage (220 -> 200)')} </li>
                <li>{t(props.lang,'My life belong to you sir hits Hello mr Anderson ho are you for 8 damage (220 -> 200)')} </li>
                <li>{t(props.lang,'My life belong to you sir hits Hello mr Anderson ho are you for 8 damage (220 -> 200)')} </li>
                <li>{t(props.lang,'My life belong to you sir hits Hello mr Anderson ho are you for 8 damage (220 -> 200)')} </li>
                <li>{t(props.lang,'My life belong to you sir hits Hello mr Anderson ho are you for 8 damage (220 -> 200)')} </li>
                <li>{t(props.lang,'My life belong to you sir hits Hello mr Anderson ho are you for 8 damage (220 -> 200)')} </li>
                <li>{t(props.lang,'My life belong to you sir hits Hello mr Anderson ho are you for 8 damage (220 -> 200)')} </li>
                <li>{t(props.lang,'My life belong to you sir hits Hello mr Anderson ho are you for 8 damage (220 -> 200)')} </li>
                <li>{t(props.lang,'My life belong to you sir hits Hello mr Anderson ho are you for 8 damage (220 -> 200)')} </li>
            </ul>
            </div>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return { lang: state.lang}
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(ModalResult);