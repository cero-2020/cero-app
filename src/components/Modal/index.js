import './style.css';
import ModalResult from './ModalResult';
import ModalChoose from './ModalChoose';
import ModalFight from './ModalFight';
import ModalFightSelect from './ModalFightSelect';
import ModalOmg from './ModalOmg';
import ModalSorry from './ModalSorry';
import ModalSuccess from './ModalSuccess';
import ModalSuccessFight from "./ModalSuccessFight";
import ModalPreloader from "./ModalPreloader";

const Modal = (props) => {
    return (
        <>
            { props.isShowingModalResult || 'fight-result' === props.active ? <ModalResult toggle={props.toggle} fightResult={props.fightResult} setFightResult={props.setFightResult} /> : null }
            { props.isShowingChooseHero || 'choose-hero' === props.active ? <ModalChoose toggle={props.toggle} /> : null }
            { props.isShowingModalFigh || 'fight' === props.active ? <ModalFight toggle={props.toggle} fightResult={props.fightResult} setFightResult={props.setFightResult} /> : null }
            { props.isShowingModalFightSelect || 'fight-select' === props.active ? <ModalFightSelect toggle={props.toggle} fightResult={props.fightResult} setFightResult={props.setFightResult}/> : null }
            { props.isShowingModalOmg || 'omg' === props.active ? <ModalOmg toggle={props.toggle} fightResult={props.fightResult} setFightResult={props.setFightResult} /> : null }
            { props.isShowingModalSuccess || 'success' === props.active ? <ModalSuccess toggle={props.toggle} /> : null }
            { props.isShowingModalSuccessFight || 'success-fight' === props.active ? <ModalSuccessFight toggle={props.toggle} fightResult={props.fightResult} setFightResult={props.setFightResult} /> : null }
            { props.isShowingModalSorry ? <ModalSorry toggle={props.toggle}/> : null }
            {'preloader' === props.active? <ModalPreloader toggle={props.toggle}/> : null }
        </>
    )
}

export default Modal;