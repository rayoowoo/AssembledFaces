import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import ProfilePicModal from './modals/profile_picture_modal'
import CoverPicModal from './modals/cover_picture_modal'
import AddPictureModal from './modals/add_picture_modal'

function Modal({component, closeModal}) {
    if (!component) {
        return null;
    }
    debugger
    let modal;
    switch (component) {
        case 'profilePicture':
            modal = <ProfilePicModal />
            break
        case 'coverPicture':
            modal = <CoverPicModal />
            break
        case 'addPicture':
            modal = <AddPictureModal />
            break
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {modal}
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