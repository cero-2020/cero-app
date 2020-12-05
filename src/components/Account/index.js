import React from "react";
import './style.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";

const Account = (props) => {
    return (
        <div>
            <Header/>
            <div className={'HeroList Account'}>
            <div className="container">
                <div className="HeroList__content">
                    <div  className="HeroList__top">
                        <h1 className="top__title">{t(props.lang,'Account')}</h1>
                        <p className="grey-text">{t(props.lang,'Magician born in the school of magic. From birth he feels a great craving for everything magical and spiritual.')}</p>
                    </div>
                    <div className="Account__container">
                       <div>
                           <p className="Account-subtitle">Wallet</p>
                           <p className="Account-title">0xaB3679B6AFEbc6fD7BCDe387fA391F576e86f990</p>
                       </div>
                       <div>
                            <p className="Account-subtitle">Balance</p>
                            <p className="Account-title">0.1486 ETH</p>
                       </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { lang: state.lang}
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(Account);