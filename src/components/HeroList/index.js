import {useState} from 'react';
import './style.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import {t} from '../../src/translate';
import {connect} from "react-redux";
import {createRandomHero} from "../../src/hero-logic/create-hero";
import ModalPreloader from "../Modal/ModalPreloader";
import Modal from "../Modal";

const HeroList = (props) => {
    const [activeModal, setActiveModal] = useState(null);

    function toggleActiveModal(active) {
        if ('close' === active) {
            setActiveModal(null)
            return;
        }
        setActiveModal(active)
    }

    const renderHeroes = () => {
        let heroes = props.addressToHeroes[props.account.walletFormatted];
        if (undefined === heroes || 0 === heroes.length) {
            return (
                <p className={'main-btn header-btn'} onClick={() => createHeroLoc()}>{t(props.lang, 'Get your first Cero!')}</p>
            )
        } else {
            return heroes.map((heroData, key) => {
                return (<Hero key={ key } heroData={ heroData }/>);
            });
        }
    }

    async function createHeroLoc() {
        let hero = createRandomHero(1);
        toggleActiveModal('preloader');
        let data = await props.drizzle.contracts.HeroCore.methods.createHero(hero.soul, props.account.wallet, 0, 0, true)
            .send({from: props.account.wallet}, (result) => {
                toggleActiveModal(null)
            });
        toggleActiveModal(null);
    }

    return (
        <div>
            <Header />
            <div className={'HeroList'}>
                <div className="container">
                    <div className="HeroList__content">
                        <div  className="HeroList__top">
                            <h1 className="top__title">{t(props.lang,'My Cero')}</h1>
                            <p className="grey-text">{t(props.lang,'Here you can find a list of your Ceroes. Each of them has unique characteristics and capabilities. Fight against other players and unlock new Ceroes.')}</p>
                        </div>
                        <div className="HeroList__container">
                            {renderHeroes()}
                        </div>

                        <div className="HeroList__action">
                            <a className={'main-btn header-btn'} onClick={() => createHeroLoc()}>{t(props.lang, 'Birth of a new Cero!')}</a>
                        </div>
                    </div>
                </div>
            </div>
            <Modal active={activeModal} toggle={toggleActiveModal} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        lang: state.lang,
        drizzle: state.drizzle,
        account: state.account,
        addressToHeroes: state.addressToHeroes,
    };
}

export default connect(mapStateToProps)(HeroList);