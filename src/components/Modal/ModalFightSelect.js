import {useState, useEffect} from "react";
import './style.css';
import {t} from '../../src/translate';
import {connect} from "react-redux";
import Modal from "./index";
import useModal from "./useModal";
import Hero from "../Hero/Hero";
import { setToFightHero1 } from "../../redux/actions/heroToFight";

const ModalFightSelect = (props) => {
    const renderHeroes = () => {
        let heroes = props.addressToHeroes[props.account.walletFormatted];
        if (undefined === heroes || 0 === heroes.length) {
            return '';
        } else {
            return heroes.map((heroData, key) => {
                let className = 'HeroContainer';

                if (null !== props.heroToFight.hero1 && heroData[0] === props.heroToFight.hero1[0]) {
                    className += ' HeroContainer'
                } else if (null !== props.heroToFight.hero1 && heroData[0] !== props.heroToFight.hero1[0]) {
                    className += ' HeroContainer_active_not'
                }

                return (
                    <div onClick={() => props.setToFightHero1(heroData)}
                         className={className}
                         key={key}>
                        <Hero key={key} heroData={heroData} action={'none'}/>
                    </div>
                );
            });
        }
    }

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__top">
                    <div className="container">
                        <h3 className="modal__title">{t(props.lang, 'Choose your Cero to fight')}</h3>
                        <p className="btn" onClick={() => props.toggle('close')}>{t(props.lang, 'close')} </p>
                    </div>
                </div>
                <div className="modal__hero">
                    <div className="container">
                        {renderHeroes()}
                    </div>
                </div>
                <div>
                    <p className={"main-btn" + (null !== props.heroToFight.hero1 ? ' active' : '')} onClick={() => props.toggle('fight')}>
                        {t(props.lang, 'Find the enemy!')}
                    </p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        lang: state.lang,
        drizzle: state.drizzle,
        account: state.account,
        addressToHeroes: state.addressToHeroes,
        heroToFight: state.heroToFight,
    }
}

const mapDispatchToProps = { setToFightHero1 }

export default connect(mapStateToProps, mapDispatchToProps)(ModalFightSelect);