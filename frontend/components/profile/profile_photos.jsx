import React from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_actions';


class ProfilePhotos extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 365);
    }

    render() {

        const {photoUrls = []} = this.props.user;
        const {user, currentUserId} = this.props;


        const photos = photoUrls
            .map((photourl, idx) => {
                return <div key={`photo-${idx}`} className="profile-photos-item"><img src={photourl} alt="user-photos" /></div>
            })

        const btn = currentUserId === user.id ? (
            <div onClick={e => this.props.openAdd()} className="profile-photos-btn">Add Photos</div>
        ) : null;


        return (
            <section className="profile-photos">
                <div className="profile-photos-header">
                    <h1><i className="fas fa-user-photos"></i>Photos</h1>
                    {btn}
                </div>

                <div className="profile-photos-index">
                    {photos}
                </div>
            </section>
        )
    }
}

const mdp = dispatch => ({
    openAdd: () => dispatch(openModal("addPicture")),
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(null, mdp)(ProfilePhotos));