import React from "react";
import './style.css';
import Header from '../Header/Header';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import HeroOption from "../HeroOption";

const HeroStats = (props) => {
    console.log(props)
    return (
        <div>
            <Header/>
            <div className={'HeroList HeroStats'}>
            <div className="container">
                <div className="HeroList__content">
                    <div  className="HeroList__top">
                        <h1 className="top__title">{t(props.lang,'Cero stats')}</h1>
                        <p className="grey-text">{t(props.lang,'Magician born in the school of magic. From birth he feels a great craving for everything magical and spiritual.')} </p>
                    </div>
                    <div className="HeroStats__container">
                        <HeroOption/>
                        <div className="HeroStats__stat">
                            <h2>{t(props.lang,'Your stats')}</h2>
                            <div className="HeroStats__stat-top">
                                <p><span>2</span>{t(props.lang,'Win')}</p>
                                <p><span>0</span>{t(props.lang,'Defeat')}</p>
                            </div>
                            <div className="result">
                                <div>
                                    <p>{t(props.lang,'Name')}</p>
                                    <p>{t(props.lang,'Date & Time')}</p>
                                    <p>{t(props.lang,'Cero ID')}</p>
                                    <p>{t(props.lang,'Wallet')}</p>
                                    <p>{t(props.lang,'Result')}</p>
                                </div>
                                <div>
                                    <p>{t(props.lang,'HELLO MR ANDERS HOW ARE YOU')}</p>
                                    <p>{t(props.lang,'Dec 12, 19:23')}</p>
                                    <p>232</p>
                                    <p>20xaB367</p>
                                    <p>{t(props.lang,'Result')}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return { lang: state.lang}
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(HeroStats);