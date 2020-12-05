import React from "react";
import './style.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";

const HeroCreate = (props) => {
    return (
        <div>
            <Header/>
            <div className={'HeroList'}>
            <div className="container">
                <div className="HeroList__content">
                    <div  className="HeroList__top">
                        <h1 className="top__title">{t(props.lang,'Create cero')}</h1>
                        <p className="grey-text">{t(props.lang,'Combine 2 heroes of the same level to get a stronger hero. When combined, the heroes that unite disappear! Be careful.')}</p>
                    </div>
                    <div className="HeroList__container">
                       
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

export default connect(mapStateToProps, mapDispatchToProps)(HeroCreate);