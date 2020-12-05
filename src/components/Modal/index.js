import './style.css';
import ModalResult from './ModalResult';
import ModalChoose from './ModalChoose';
import ModalFight from './ModalFight';
import ModalFightSelect from './ModalFightSelect';
import ModalOmg from './ModalOmg';
import ModalSorry from './ModalSorry';
import ModalSuccess from './ModalSuccess';

const Modal = (props) => {
    console.log('1', props);
    return (
        <>
            { props.isShowingModalResult ? <ModalResult toggle={props.toggle} /> : null }
            { props.isShowingChooseHero ? <ModalChoose toggle={props.toggle} /> : null }
            { props.isShowingModalFigh ? <ModalFight toggle={props.toggle} /> : null }
            { props.isShowingModalFightSelect ? <ModalFightSelect toggle={props.toggle}/> : null }
            { props.isShowingModalOmg ? <ModalOmg toggle={props.toggle}/> : null }
            { props.isShowingModalSuccess ? <ModalSuccess toggle={props.toggle}/> : null }
            { props.isShowingModalSorry ? <ModalSorry toggle={props.toggle}/> : null }
        </>
    )
}

export default Modal;