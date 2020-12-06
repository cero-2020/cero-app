import React, {useState} from "react";
import './style.css';
import {t} from '../../src/translate';
import {connect} from "react-redux";
import Hero from '../Hero/Hero';

const ModalResult = (props) => {
    const [showLog, setShowLog] = useState(false)

    const renderLog = () => {
        return props.fightResult.logger.map((row, key) => {
            return <li key={key}>{row}</li>;
        })
    }

    const renderBtnRewardOrClose = () => {
        if (true === props.fightResult.isHero1Win) {
            return (
                <p className="main-btn active"  onClick={() => props.toggle('omg')} >
                    {t(props.lang, 'Take reward!')}
                    <img  src={`${process.env.PUBLIC_URL}/images/reward.svg`} />
                </p>
            );
        } else {
            return (
                <p className="main-btn active"  onClick={() => props.toggle('close')} >
                    {t(props.lang, 'Close')}
                </p>
            );
        }
    }
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
                    <p className="btn"  onClick={() => setShowLog(!showLog)} >
                        {t(props.lang, 'Show logs')}
                    </p>
                    {renderBtnRewardOrClose()}
                </div>
                <div className={"modal-log" + (showLog ? ' active' : '')}>
                    <div className="container">
                        <h4 className="modal-log__title">{t(props.lang,'Combat log')}</h4>
                        <ul>
                            {renderLog()}
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