import React from "react";
import './style.css';
import {Link} from "react-router-dom";
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import {getRandom} from "../../src/hero-logic/hero-helper";

import wizard_1 from '../src/images/player_magic_1.svg';
import wizard_2 from '../src/images/player_magic_2.svg';
import wizard_3 from '../src/images/player_magic_3.svg';
import thief_1 from '../src/images/player_thief_1.svg';
import thief_2 from '../src/images/player_thief_2.svg';
import thief_3 from '../src/images/player_thief_3.svg';
import warrior_1 from '../src/images/player_warrior_1.svg';
import warrior_2 from '../src/images/player_warrior_2.svg';
import warrior_3 from '../src/images/player_warrior_3.svg';

export const getImage = (heroClass) => {
    let rand = getRandom(3);
    switch (heroClass) {
        case "wizard":
            switch (rand) {
                // case 0:
                //     return wizard_1;
                // case 1:
                //     return wizard_2;
                default:
                    return wizard_3;
            }
        case "thief":
            switch (rand) {
                // case 0:
                //     return thief_1;
                // case 1:
                //     return thief_2;
                default:
                    return thief_3;
            }
        default:
            switch (rand) {
                // case 0:
                //     return warrior_1;
                // case 1:
                //     return warrior_2;
                default:
                    return warrior_3;
            }

    }
}

const Hero = (props) => {


    return (
        <Link to={"/hero-stats?number=" + props.heroData.number} className="HeroItem" key="key">
            <img src={getImage(props.heroData.info.heroClass)} className="HeroImg"/>
            <div className="HeroItem__container">
                <p className="HeroItem-subtitle">{t(props.lang,'name')}</p>
                <p className="HeroItem-name">{props.heroData.info.name}</p>
            </div>
            <div className="HeroItem-flex">
                <p className="HeroItem-class-block">
                    <span className="HeroItem-subtitle">{t(props.lang,'class')}</span>
                    <span className="HeroItem-class">{props.heroData.info.heroClass}</span>
                </p>
                <p>
                    <span className="HeroItem-level">{props.heroData.info.level}</span>
                    <span className="HeroItem-level-sub">{t(props.lang,'lvl')}</span>
                </p>
            </div>
        </Link>
    );
}

const mapStateToProps = (state) => {
    return { lang: state.lang}
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(Hero);