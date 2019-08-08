import React from 'react'
import {connect} from 'react-redux'
import {createFriendship, approveFriendship, deleteFriendship} from '../../actions/friendship_actions'
import {withRouter} from 'react-router-dom'
import {fetchUser} from '../../actions/user_actions'
import {merge} from 'lodash';

class ProfilePictureArea extends React.Component {
    constructor(props) {
        super(props)
    }

    friendship(friendStatus, friendshipToSubmit) {
        return e => {
            e.preventDefault();
            switch (friendStatus) {
                case "Unfriend":
                    this.props.deleteFriendship(friendshipToSubmit.id);
                    break
                case "Cancel Request":
                    this.props.deleteFriendship(friendshipToSubmit.id);
                    break
                case "Approve Request":
                    this.props.approveFriendship(merge(friendshipToSubmit, {status: "accepted"}));
                    break
                case "Add Friend":
                    this.props.createFriendship({ requester_id: this.props.currentUser.id, requested_id: this.props.user.id });
                    break
                default:
                    return;
            }
        }
    }

    goToUpdate(e) {
        e.preventDefault();
        this.props.history.push(`/user/${this.props.user.id}/about`)
    }

    render() {
        const {user = {}, currentUser = {}, friendships} = this.props;
        let targetFriendship = null;
        let friendshipToSubmit = null;
        let friendStatus = null;
        let friendBtn = null;
        
        // friendships are of the user whose profile page we are currently viewing. currentUser is the one logged in. 
        friendships.forEach(friendship => {
            if (friendship.requester_id === currentUser.id || friendship.requested_id === currentUser.id) {
                targetFriendship = friendship;
            }
        })

        if (targetFriendship === null) {
            friendStatus = "Add Friend";
            friendBtn = <><i className="fas fa-user-plus"></i> {friendStatus}</>
        } else {
            const { requester_id } = targetFriendship;
            if (targetFriendship.status === "accepted") {
                friendStatus = "Friend";
                friendshipToSubmit = targetFriendship;
                friendBtn = <><i className="fas fa-check"></i>  {friendStatus}</>
            } else {
                if (requester_id === currentUser.id) {
                    friendStatus = "Cancel Request";
                    friendBtn = <><i className="fas fa-remove"></i>  {friendStatus}</>
                    friendshipToSubmit = targetFriendship;
                } else {
                    friendStatus = "Approve Request";
                    friendBtn = <><i className="fas fa-check-circle"></i>  {friendStatus}</>
                    friendshipToSubmit = targetFriendship;
                }
            }
        }

        const photo = user.photoUrl ? <img src={user.photoUrl} alt="" /> : null
        const cover = user.coverUrl ? <img src={user.coverUrl} alt="" /> : null
        // const btns = user.id === this.props.currentUser.id ? ( 
        //     <button onClick={this.goToUpdate.bind(this)} className="profile-btn profile-btn-friend">Update Info</button>
        //     ) :  (
        //     <button onClick={this.friendship(friendStatus, friendshipToSubmit).bind(this)} className="profile-btn profile-btn-friend">{friendBtn}</button>
        //     )

        let btns;
        if (user.id === currentUser.id) {
            btns = <button onClick={this.goToUpdate.bind(this)} className="profile-btn profile-btn-friend">Update Info</button>
        } else {
            if (friendStatus === "Friend") {
                btns = <>
                    <button onClick={this.friendship(friendStatus, friendshipToSubmit).bind(this)} className="profile-btn profile-btn-friend">{friendBtn}</button>
                    <a onClick={this.friendship(friendStatus, friendshipToSubmit).bind(this)} className="profile-btn profile-btn-friend">Unfriend</a>

                </>
            }
            if (friendStatus === "Approve Request") {
                btns = <>
                    <button onClick={this.friendship(friendStatus, friendshipToSubmit).bind(this)} className="profile-btn profile-btn-friend">{friendBtn}</button>
                    <a onClick={this.friendship(friendStatus, friendshipToSubmit).bind(this)} className="profile-btn profile-btn-friend">Unfriend</a>
                </>
            } else {
                btns = <button onClick={this.friendship(friendStatus, friendshipToSubmit).bind(this)} className="profile-btn profile-btn-friend">{friendBtn}</button>
            }
        }






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

const msp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id] || {},
    friendships: Object.values(state.entities.friendships) || [],
    user: state.entities.users[ownProps.match.params.userId]
})

const mdp = dispatch => ({
    createFriendship: friendship => dispatch(createFriendship(friendship)),
    approveFriendship: friendship => dispatch(approveFriendship(friendship)),
    deleteFriendship: friendshipId => dispatch(deleteFriendship(friendshipId)),
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default withRouter(connect(msp, mdp)(ProfilePictureArea));

// pictures FROM https://www.inverse.com/article/55449-avengers-endgame-iron-man-death-tony-stark-final-line-was-added-at-the-last-minute. All rights to go Marvel Studios.
// FROM 1000logos.net / iron - man - logo.All rights go to Marvel Studios.
