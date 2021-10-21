import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import Modal from "./Modal"
import ModalPortal from './ModalPortal'

const Modals = () => {
    const [isOpenModal1,openModal1,closeModal1]=useModal(true);
    const [isOpenModal2,openModal2,closeModal2]=useModal(false);
    const [isOpenModalContact,openModalContact,closeModalContact]=useModal(false);
    const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

    return ( 
        <div>
            <h2> Ventanas Modales</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>Hola este es el contenido de mi modal</p>
                <img src="https://placeimg.com/400/400/animals" alt="animals"/>
            </Modal>
            <button onClick={openModal2} >Modla2 botom</button>
            <Modal  isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Modal 2</h3>
                <p> an Juan de Lurigancho: hallan cuerpo de hombre dentro de su vivienda. PNP retiene a esposa como principal sospechosa del crimen.
                    Si eres testigo de un hecho o deseas hacer una denuncia, mándanos tus fotos o videos a nuestro WhatsApp 941 000 000. #LaRepública
                </p>
                <img src="https://placeimg.com/400/400/naturals" alt="naturaleza"/>
            </Modal>
            <button onClick={openModalContact} >Contactenos</button>
            <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
                <ContactForm/>
            </Modal>
            <button onClick={openModalPortal}>Modal en Portal</button>
             <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
                <h3>Modal en Portal</h3>
                <p>
                Este es el contenido de un modal que carga en otro nodo del DOM
                diferente a donde carga nuestra app de React, gracias a un React
                Portal.
                </p>
                <img src="https://placeimg.com/400/400/tech" alt="Tech" />
            </ModalPortal>
        </div>
     );
}
 
export default Modals;