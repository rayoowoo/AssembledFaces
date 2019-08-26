import React from 'react';
import { withRouter } from 'react-router-dom'

class ProfilePhotos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {photoUrls = []} = this.props.user;
        const {user, currentUserId} = this.props;


        const photos = photoUrls
            .map((photourl, idx) => {
                return <div key={`photo-${idx}`} className="profile-photos-item"><img src={photourl} alt="" /></div>
            })

        const btn = currentUserId === user.id ? (
            <div className="profile-photos-btn">Add Photos</div>
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

export default withRouter(ProfilePhotos);