import React from "react";
import './style.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";

const HeroList = (props) => {
    return (
        <div>
            <Header/>
            <div className={'HeroList'}>
            <div className="container">
                <div className="HeroList__content">
                    <div  className="HeroList__top">
                        <h1 className="top__title">{t(props.lang,'My cero')}</h1>
                        <p className="grey-text">{t(props.lang,'Here you can find a list of your heroes. Each of them has unique characteristics and capabilities. Fight against other players and unlock new heroes')}</p>
                    </div>
                    <div className="HeroList__container">
                        <Hero/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);