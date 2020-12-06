import './style.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import {t} from '../../src/translate';
import {connect} from "react-redux";
import {createRandomHero} from "../../src/hero-logic/create-hero";

const HeroList = (props) => {
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
        let data = await props.drizzle.contracts.HeroCore.methods.createHero(hero.soul, props.account.wallet, 0, 0, true)
            .send({from: props.account.wallet});
        console.log(data);
    }

    return (
        <div>
            <Header />
            <div className={'HeroList'}>
                <div className="container">
                    <div className="HeroList__content">
                        <div  className="HeroList__top">
                            <h1 className="top__title">{t(props.lang,'My Cero')}</h1>
                            <p className="grey-text">{t(props.lang,'Here you can find a list of your heroes. Each of them has unique characteristics and capabilities. Fight against other players and unlock new heroes')}</p>
                        </div>
                        <div className="HeroList__container">
                            {renderHeroes()}
                        </div>
                        <p className={'main-btn header-btn'} onClick={() => createHeroLoc()}>{t(props.lang, 'Get your first Cero!')}</p>
                    </div>
                </div>
            </div>
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