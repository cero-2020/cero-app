import React from "react";
import './style.css';
import {Link} from "react-router-dom";
import HeroImg from '../src/images/hero.svg';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";

const heroes = [
    {
        name: 'Anderson',
        class: 'Warrior',
        level: '1',
        img: '../src/images/hero.svg'
    }
]
const Hero = (props) => {
    return heroes.map((obj, key) => {
        return (
        <Link to="/hero-stats" className="HeroItem" key="key">
            <img src={HeroImg} className="HeroImg"/>
            <div className="HeroItem__container">
                <p className="HeroItem-subtitle">{t(props.lang,'name')}</p>
                <p className="HeroItem-name">{t(props.lang,'Hello mr')} {obj.name} {t(props.lang,'how are you')}</p>
            </div>
            <div className="HeroItem-flex">
                <p className="HeroItem-class-block">
                    <span className="HeroItem-subtitle">{t(props.lang,'class')}</span>
                    <span className="HeroItem-class">{obj.class}</span>
                </p>
                <p>
                    <span className="HeroItem-level">{obj.level}</span>
                    <span className="HeroItem-level-sub">{t(props.lang,'lvl')}</span>
                </p>
            </div>
        </Link>
        );
      });
}

const mapStateToProps = (state) => {
    return { lang: state.lang}
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(Hero);