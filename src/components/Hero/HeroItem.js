import React from "react";
import './style.css';
import {t} from '../../src/translate';
import {connect} from "react-redux";
import {HeroImage} from "./HeroImage";
import {capitalizeFirstLetter} from '../../src/helper'

const HeroItem = (props) => {
    return (
        <div className="HeroItem">
            <img src={HeroImage(props.heroData.info.heroClass)} className="HeroImg"/>
            <div className="HeroItem__container">
                <p className="HeroItem-subtitle">{t(props.lang,'name')}</p>
                <p className="HeroItem-name">{props.heroData.info.name}</p>
            </div>
            <div className="HeroItem-flex">
                <p className="HeroItem-class-block">
                    <span className="HeroItem-subtitle">{t(props.lang,'class')}</span>
                    <span className="HeroItem-class">{capitalizeFirstLetter(props.heroData.info.heroClass)}</span>
                </p>
                <p>
                    <span className="HeroItem-level">{props.heroData.info.level}</span>
                    <span className="HeroItem-level-sub">{t(props.lang,'lvl')}</span>
                </p>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { lang: state.lang}
}

export default connect(mapStateToProps)(HeroItem);