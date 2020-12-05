import React from "react";
import './style.css';
import Header from '../Header/Header';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import HeroImg from '../src/images/hero.svg';

const HeroOption = (props) => {
    console.log(props)
    return (
        <div className="HeroStats-item">
            <div className="HeroStats-item-left">
            <img src={HeroImg} className="HeroImg"/>
            <div className="HeroItem__container">
                <p className="HeroItem-subtitle">{t(props.lang,'name')}</p>
                 <p className="HeroItem-name">{t(props.lang,'Hello mr')} Anderson {t(props.lang,'how are you')}</p>
            </div>
            <div className="HeroItem-flex">
                <p className="HeroItem-class-block">
                    <span className="HeroItem-subtitle">{t(props.lang,'class')}</span>
                    <span className="HeroItem-class">Magician</span>
                </p>
                <p>
                    <span className="HeroItem-level">2</span>
                    <span className="HeroItem-level-sub">{t(props.lang,'lvl')}</span>
                 </p>
            </div>
            </div>
         <div className="HeroStats-item-right">
            <p><span>2</span>{t(props.lang,'Strength')}</p>
            <p><span>0</span>{t(props.lang,'Protection')}</p>
            <p><span>7</span>{t(props.lang,'Magic')}</p>
            <p><span>4</span>{t(props.lang,'Agility')}</p>
            <p><span>{t(props.lang,'overview')}</span>
                {t(props.lang,'Magician born in the school of magic. From birth he feels a great craving for everything magical and spiritual. ')}</p>
        </div>
       </div>
                      
    );
}


const mapStateToProps = (state) => {
    return { lang: state.lang}
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(HeroOption);