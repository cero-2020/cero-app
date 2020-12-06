import React, {useState} from "react";
import './style.css';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import Hero from '../Hero/Hero';

const ModalResult = (props) => {
    console.log(props)
    return (
        <div className="modal modal-result">
            <div className="modal__content">
                <div className="modal__hero">
                    <div className="container">
                        <Hero heroData={props.heroToFight.hero1} action={'none'} />
                        <div className="modal__hero-vs">
                            <img src={`${process.env.PUBLIC_URL}/images/` + (props.fightResult.isHero1Win ? 'fight.svg' : 'lose.svg')} />
                            <p className={props.fightResult.isHero1Win ? 'win' : 'lose'}>{props.fightResult.isHero1Win ? t(props.lang,'Win') : t(props.lang,'Lose')}</p>
                        </div>
                        <Hero heroData={props.heroToFight.hero2} action={'none'} />
                    </div>
                </div>
                {
                    true === props.fightResult.isHero1Win
                        ?
                        <p className={"modal__win-text"}>{t(props.lang,'Legends began to be told about your battle, until the last it was not clear who would win. But fate and experience were on your side. Congratulations on your')}<span>{t(props.lang,'victory,')}</span>{t(props.lang,'Cero!')}</p>
                        :
                        <p className={"modal__lose-text"}>{t(props.lang,"You fought like a tiger. The sound of battle rang out for hundreds of kilometers. But unfortunately the enemy turned out to be quicker. Don't be upset, cero, learn from your mistakes,")}<span>{t(props.lang,' defeat')}</span>{t(props.lang,'is an experience! Get ready for a new battle and everything will work out!!')}</p>
                }
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
    return {
        lang: state.lang,
        heroToFight: state.heroToFight,
    }
}

export default connect(mapStateToProps)(ModalResult);