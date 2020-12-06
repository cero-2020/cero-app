import {useEffect, useState} from "react";
import './style.css';
import Header from '../Header/Header';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import HeroOption from "../HeroOption";
import fightsResult from "../../redux/reducers/src/fightsResult";

const HeroStats = (props) => {
    const [number] = useState(props.location.search.substring(1).split('=')[1])
    const [heroData, setHeroData] = useState({})

    useEffect(() => {
        let heroes = props.addressToHeroes[props.account.walletFormatted];
        if (undefined === heroes || 0 === heroes.length) {
            return ''
        } else {
            heroes.forEach((heroData) => {
                if (heroData.number == number) {
                    setHeroData(heroData);
                }
            });
        }
    })

    const renderTotalInfo = () => {
        if (props.fightsResult.length === 0) {
            return (
                <div className="HeroStats__stat-top">
                    <p><span>0</span>{t(props.lang,'Win')}</p>
                    <p><span>0</span>{t(props.lang,'Defeat')}</p>
                </div>
            )
        }

        let wins = 0;
        let defeats = 0;
        for (const [index, result] of Object.entries( props.fightsResult)) {
            if (Number(result.hero1) === Number(number) || Number(result.hero2) === Number(number)) {
                if (Number(result.winner) === Number(number)) {
                    wins++;
                } else {
                    defeats++;
                }
            }
        }

        return (
            <div className="HeroStats__stat-top">
                <p><span>{wins}</span>{t(props.lang,'Win')}</p>
                <p><span>{defeats}</span>{t(props.lang,'Defeat')}</p>
            </div>
        );
    }
    //
    // const renderStatsList = () => {
    //     if (props.fightsResult.length === 0) return '';
    //
    //     return Object.entries(props.fightsResult).map((result, key) => {
    //         console.log(result[1]);
    //         if (Number(result[1].hero1) === Number(number) || Number(result[1].hero2) === Number(number)) {
    //             let date = new Date(Number(result[1].time));
    //             console.log(date.getMonth());
    //             let dateStr = date.getDate() + date.getMonth() + date.getFullYear() + ', ' + date.getHours() + ':' + date.getMinutes()
    //             return (
    //                 <div key={key} className={'row-result'}>
    //                     <p>{t(props.lang,'HELLO MR ANDERS HOW ARE YOU')}</p>
    //                     <p>{dateStr}</p>
    //                     <p>{result[1].hero2}</p>
    //                     <p>20xaB367</p>
    //                     <p>{Number(result.winner) === Number(number) ? 'Win' : 'Defeat'}</p>
    //                 </div>
    //             );
    //         }
    //
    //     });
    //
    // }

    return (
        <div>
            <Header/>
            <div className={'HeroList HeroStats'}>
                <div className="container">
                    <div className="HeroList__content">
                        <div  className="HeroList__top">
                            <h1 className="top__title">{t(props.lang,'Cero stats')}</h1>
                            <p className="grey-text">{t(props.lang,'Magician born in the school of magic. From birth he feels a great craving for everything magical and spiritual.')} </p>
                        </div>
                        <div className="HeroStats__container">
                            <HeroOption heroData={heroData}/>
                            <div className="HeroStats__stat">
                                <h2>{t(props.lang,'Your stats')}</h2>
                                {renderTotalInfo()}
                                <div className="result">
                                    <div>
                                        <p>{t(props.lang,'Name')}</p>
                                        <p>{t(props.lang,'Date & Time')}</p>
                                        <p>{t(props.lang,'Cero ID')}</p>
                                        <p>{t(props.lang,'Wallet')}</p>
                                        <p>{t(props.lang,'Result')}</p>
                                    </div>
                                    {/*{renderStatsList()}*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        lang: state.lang,
        account: state.account,
        addressToHeroes: state.addressToHeroes,
        fightsResult: state.fightsResult
    }
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(HeroStats);