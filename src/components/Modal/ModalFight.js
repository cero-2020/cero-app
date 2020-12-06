import {useEffect} from "react";
import './style.css';
import {t} from '../../src/translate';
import {connect} from "react-redux";
import HeroOption from '../HeroOption';
import {getRandom} from "../../src/hero-logic/hero-helper";
import { setToFightHero2 } from "../../redux/actions/heroToFight";
import {fight} from "../../src/hero-logic/hero-fight";
import {createRandomHero} from "../../src/hero-logic/create-hero";

const ModalFight = (props) => {
    useEffect(() => {

        let heroes = [];
        for (const [address, heroesForAddr] of Object.entries(props.addressToHeroes)) {
            if (address === props.account.walletFormatted) continue;
            heroesForAddr.forEach((hero) => {
                if (Number(props.heroToFight.hero1.info.level) !== Number(hero.info.level)) return;
                heroes.push(hero)
            })
        }
        let hero2 = heroes[getRandom(heroes.length)];
        props.setToFightHero2(hero2);
    }, [])

    async function heroesFight() {
        let result = fight(props.heroToFight.hero1.info, props.heroToFight.hero2.info);

        let newHero = createRandomHero(1);
        let hero1 = props.heroToFight.hero1;
        let hero2 = props.heroToFight.hero2;

        result.newHero = {
            info: newHero
        };
        props.setFightResult(result);
        props.toggle('preloader');
        let data = await props.drizzle.contracts.HeroCore.methods.heroesFight(hero1.number, hero2.number, props.account.wallet, result.isHero1Win, newHero.soul)
            .send({from: props.account.wallet});
        props.toggle('fight-result')

    }

    return (
        <div className="modal modal-fight">
            <div className="modal__content">
                <div className="modal__hero">
                    <div className="container">
                        <HeroOption heroData={props.heroToFight.hero1} />
                        <div className="modal__hero-vs">
                            <img  src={`${process.env.PUBLIC_URL}/images/fight.svg`} />
                            <p>{t(props.lang,'VS')}</p>
                        </div>
                        <HeroOption heroData={props.heroToFight.hero2} />
                    </div>
                </div>
                <div className="modal__flex">
                    <p className="btn"  onClick={() => props.toggle('fight-select')} >
                        {t(props.lang, 'Back')}
                    </p>
                    <p className="main-btn active"  onClick={() => heroesFight()} >
                        {t(props.lang, 'Start fight!')}
                    </p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        lang: state.lang,
        addressToHeroes: state.addressToHeroes,
        heroToFight: state.heroToFight,
        account: state.account,
        drizzle: state.drizzle,
    }
}

const mapDispatchToProps = { setToFightHero2 }

export default connect(mapStateToProps, mapDispatchToProps)(ModalFight);