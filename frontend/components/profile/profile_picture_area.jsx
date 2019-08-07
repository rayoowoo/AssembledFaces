import React from 'react'
import {connect} from 'react-redux'
// import {createFriendship} from '../../actions/friendship_actions'
import {withRouter} from 'react-router-dom'

class ProfilePictureArea extends React.Component {
    constructor(props) {
        super(props)
    }

    // updatePicture(field) {

    // }

    friendship(e) {
        e.preventDefault();
        // createFriendship({requester_id: this.props.currentUser.id, requested_id: this.props.user.id})
    }

    goToUpdate(e) {
        e.preventDefault();
        this.props.history.push(`/user/${this.props.user.id}/about`)
    }

    render() {
        const {user} = this.props;
        const photo = user.photoUrl ? <img src={user.photoUrl} alt="" /> : null
        const cover = user.coverUrl ? <img src={user.coverUrl} alt="" /> : null
        const btns = user.id === this.props.currentUser.id ? ( 
            <button onClick={this.goToUpdate.bind(this)} className="profile-btn profile-btn-friend">Update Info</button>
            ) :  (
            <button onClick={this.friendship.bind(this)} className="profile-btn profile-btn-friend">Friend Status</button>
            )

        let coverUpdate, profileUpdate;
        if (user.id === this.props.currentUser.id) {
            coverUpdate = <button onClick={this.props.openCover} className="profile-cover-picture-update"><i className="fa fa-camera"></i>Update Cover Photo</button>
            profileUpdate = <button onClick={this.props.openProfile} className="profile-main-picture-update"><i className="fa fa-camera"></i><p>Update</p></button>
        }


        
        return (
            <>
                <section className="profile-picture-area">
                    <div className="profile-picture-blur">
                    </div>
                    <div className="profile-cover-picture">
                        {coverUpdate}
                        {cover}
                    
                    </div>
                    <div className="profile-main-picture" ref="main">
                        <div>
                            {profileUpdate}
                            {photo}
                        </div>
                   

                    </div>
                    <h1 className="profile-name">{user.first_name} {user.last_name}</h1>
                    {btns}
                </section>
            </>

        )
    }
}

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
})

export default withRouter(connect(msp)(ProfilePictureArea));

// pictures FROM https://www.inverse.com/article/55449-avengers-endgame-iron-man-death-tony-stark-final-line-was-added-at-the-last-minute. All rights to go Marvel Studios.
// FROM 1000logos.net / iron - man - logo.All rights go to Marvel Studios.

