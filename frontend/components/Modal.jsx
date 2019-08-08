import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import PicModal from './modals/picture_modal'

function Modal({component, closeModal}) {
    if (!component) {
        return null;
    }
    let type;
    switch (component) {
        case 'profilePicture':
            type= "Profile" 
            break
        case 'coverPicture':
            type= "Cover"
            break
        case 'addPicture':
            type= "" 
            break
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <PicModal closeModal={closeModal} type={type} />
            </div>
        </div>
    )
}

const msp = state => ({
    component: state.ui.modal
});

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(Modal)