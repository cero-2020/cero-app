import React from "react";
import './style.css';
import Header from '../Header/Header';
import {t} from '../../src/translate';
import {connect} from "react-redux";
import Modal from '../Modal';
import useModal from '../Modal/useModal';

const HeroCreate = (props) => {
    const {isShowing, toggle} = useModal();

    return (
        <>
            <Header/>
            <div className={'HeroList HeroCreate'}>
            <div className="container">
                <div className="HeroList__content">
                    <div  className="HeroList__top">
                        <h1 className="top__title">{t(props.lang,'Create cero')}</h1>
                        <p className="grey-text">{t(props.lang,'Combine 2 heroes of the same level to get a stronger hero. When combined, the heroes that unite disappear! Be careful.')}</p>
                    </div>
                    <div className="HeroList__container">
                        <div className="create-blolck" onClick={toggle}>
                            {t(props.lang,'Select your cero')}
                        </div>
                        <div className='plus'><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.89355 1.34253C6.89355 0.742529 7.29355 0.342529 7.89355 0.342529C8.49355 0.342529 8.89355 0.742529 8.89355 1.34253V6.34253H13.8936C14.4936 6.34253 14.8936 6.74253 14.8936 7.34253C14.8936 7.94253 14.4936 8.34253 13.8936 8.34253H8.89355V13.3425C8.89355 13.9425 8.49355 14.3425 7.89355 14.3425C7.29355 14.3425 6.89355 13.9425 6.89355 13.3425V8.34253H1.89355C1.29355 8.34253 0.893555 7.94253 0.893555 7.34253C0.893555 6.74253 1.29355 6.34253 1.89355 6.34253H6.89355V1.34253Z" fill="#FDFDFD"/></svg></div>
                        <div className="create-blolck" onClick={toggle}>
                            {t(props.lang,'Select your cer')}
                        </div>
                        <p className="create-btn main-btn"> {t(props.lang,'Create new cero!')}</p>
                    </div>
                </div>
            </div>
            </div>
            <Modal isShowingChooseHero={isShowing} toggle={toggle}/>
      </>
    );
}

const mapStateToProps = (state) => {
    return { lang: state.lang}
}

export default connect(mapStateToProps)(HeroCreate);