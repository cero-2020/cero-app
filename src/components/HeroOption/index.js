import React from "react";
import './style.css';
import {t} from '../../src/translate';
import {connect} from "react-redux";
import {getImage} from "../Hero/Hero";
import {capitalizeFirstLetter} from '../../src/helper'

const HeroOption = (props) => {
    // if (Object.keys(props.heroData).length === 0) return '';
    // console.log(props.heroData)

    const renderText = () => {
        switch (props.heroData.info.heroClass) {
            case 'wizard':
                return t(props.lang,'Magician born in the school of magic. From birth he feels a great craving for everything magical and spiritual.');
            case 'thief':
                return t(props.lang,'thief desc.')
            default:
                return t(props.lang,'warrior desc.')
        }
    }
    return (
        <div className="HeroStats-item">
            <div className="HeroStats-item-left">
                <img src={getImage(props.heroData.info.heroClass)} className="HeroImg"/>
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
            <div className="HeroStats-item-right">
                <p><span>{props.heroData.info.strength}</span>{t(props.lang,'Strength')}</p>
                <p><span>{props.heroData.info.protection}</span>{t(props.lang,'Protection')}</p>
                <p><span>{props.heroData.info.agility}</span>{t(props.lang,'Agility')}</p>
                <p><span>{props.heroData.info.magic}</span>{t(props.lang,'Magic')}</p>
                <p><span>{t(props.lang,'overview')}</span>{renderText()}</p>
            </div>
        </div>

    );
}


const mapStateToProps = (state) => {
    return { lang: state.lang}
}

export default connect(mapStateToProps)(HeroOption);