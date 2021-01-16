import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const chartModal = ({modalIsOpen,closeModal}) => {



    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
            
            <div className="row">
                <div className="col-md-8">
                    <h1>Hi</h1>
                </div>
                <div className="col-md-4">

                </div>
            </div>
                
            </Modal>
        </div>
    );
}

export default chartModal;
