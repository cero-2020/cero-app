import React from "react";
import { Link } from "react-router-dom";
import '../src/main.css'
import './style.css';
import Fox from '../src/images/fox.svg';
import Header from '../Header/Header';
import {t} from '../../src/translate';
import {setLang} from "../../redux/actions/lang";
import {connect} from "react-redux";
import Hero from '../Hero/Hero';
import '../src/font/Gilroy-Regular.woff'; 
import '../src/font/Gilroy-Bold.woff'; 
import '../src/font/Helvetica.woff'; 
const StartPage = (props) => {
    return (
        <div className="">
            <Header/>
            <section className="top">
                <div className="container">
                    <div >
                        <h1 className="top__title">{t(props.lang, 'Crypto hero this is cero')}</h1>
                        <p className="grey-text top__text">{t(props.lang,'Magician born in the school of magic. From birth he feels a great craving for everything magical and spiritual.')}</p>
                        <p ><Link to="/hero-list" className="main-btn">{t(props.lang, 'Conect to')}
                            <img src={Fox} alt={Fox}/>
                        </Link></p>
                    </div>
                    <img  src={`${process.env.PUBLIC_URL}/images/book.png`} />
                </div>
            </section>

            <section className="hero">
                <div className="container">
                    <h2 className="title-min">{t(props.lang,  'Play, upgrade, trade, and win new heroes')}</h2>
                    <p className="hero__text">{t(props.lang,'Each cero has unique abilities. Unlock new ceroes by defeating or improving ceroes of the same level.')}</p>
                    <div className="hero__block">
                        <img  src={`${process.env.PUBLIC_URL}/images/player3.svg`} />
                        <img  src={`${process.env.PUBLIC_URL}/images/player1.svg`} />
                    </div>
                </div>
            </section>
            <section className="play">
                <div className="container">
                    <img  src={`${process.env.PUBLIC_URL}/images/hat.svg`} />
                    <div className="play__info">
                        <h2 className="title-min">{t(props.lang, 'Play, upgrade, trade, and win')}</h2>
                        <ul>
                            <li>{t(props.lang, 'Blalala Play and trade heroes asdas dsa')}</li>
                            <li>{t(props.lang, 'Blalala Play and trade heroes asdas dsa')}</li>
                            <li>{t(props.lang, 'Blalala Play and trade heroes asdas dsa')}</li>
                            <li>{t(props.lang, 'Blalala Play and trade heroes asdas dsa')}</li>
                            <li>{t(props.lang, 'Blalala Play and trade heroes asdas dsa')}</li>
                            <li>{t(props.lang, 'Blalala Play and trade heroes asdas dsa')}</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="HeroItems">
                <div className="container">
                    <Hero/>
                </div>
            </section>
        </div>
    );
}
const mapStateToProps = (state) => {
    return { lang: state.lang}
}

const mapDispatchToProps = { setLang }

export default connect(mapStateToProps, mapDispatchToProps)(StartPage)