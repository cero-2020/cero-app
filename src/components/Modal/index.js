import './style.css';
import ModalResult from './ModalResult';
import ModalChoose from './ModalChoose';
import ModalFight from './ModalFight';
import ModalFightSelect from './ModalFightSelect';
import ModalOmg from './ModalOmg';
import ModalSorry from './ModalSorry';
import ModalSuccess from './ModalSuccess';

const Modal = (props) => {
    return (
        <>
            { props.isShowingModalResult || 'fight-result' === props.active ? <ModalResult toggle={props.toggle} fightResult={props.fightResult} setFightResult={props.setFightResult} /> : null }
            { props.isShowingChooseHero ? <ModalChoose toggle={props.toggle} /> : null }
            { props.isShowingModalFigh || 'fight' === props.active ? <ModalFight toggle={props.toggle} fightResult={props.fightResult} setFightResult={props.setFightResult} /> : null }
            { props.isShowingModalFightSelect || 'fight-select' === props.active ? <ModalFightSelect toggle={props.toggle} fightResult={props.fightResult} setFightResult={props.setFightResult}/> : null }
            { props.isShowingModalOmg ? <ModalOmg toggle={props.toggle}/> : null }
            { props.isShowingModalSuccess ? <ModalSuccess toggle={props.toggle}/> : null }
            { props.isShowingModalSorry ? <ModalSorry toggle={props.toggle}/> : null }
        </>
    )
}

export default Modal;