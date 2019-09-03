import React from 'react'
import {connect} from 'react-redux'
import {createFriendship, approveFriendship, deleteFriendship} from '../../actions/friendship_actions'
import {withRouter} from 'react-router-dom'
import {merge} from 'lodash';

class ProfilePictureArea extends React.Component {
    constructor(props) {
        super(props)
    }

    friendship(friendStatus, friendshipToSubmit) {
        return e => {
            e.preventDefault();
            const {requesterId, requestedId, id} = friendshipToSubmit;
            
            switch (friendStatus) {
                case "Unfriend":
                    this.props.deleteFriendship(id);
                    break
                case "Reject Request":
                    this.props.deleteFriendship(id);
                    break
                case "Cancel Request":
                    this.props.deleteFriendship(id);
                    break
                case "Accept Request":
                    const friendship = {
                        requester_id: requesterId,
                        requested_id: requestedId,
                        id
                    };
                    this.props.approveFriendship(merge(friendship, {status: "accepted"}));
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
        this.props.history.push({
            pathname: `/user/${this.props.user.id}/about`,
                source: {
                from: "profile"
            }
        });        
    }

    render() {
        const {user = {}, currentUser = {}, friendships} = this.props;
        let targetFriendship = null;
        let friendshipToSubmit = null;
        let friendBtn = null;
        
        // friendships are of the user whose profile page we are currently viewing. currentUser is the one logged in. 
        friendships.forEach(friendship => {
            if (friendship.requesterId === currentUser.id || friendship.requestedId === currentUser.id) {
                targetFriendship = friendship;
            }
        })
        if (user.id === currentUser.id) {
            friendBtn = <button onClick={this.goToUpdate.bind(this)} className="profile-btn profile-btn-friend">Update Info</button>
        } else {
            if (targetFriendship === null) {
                friendBtn = <div>
                    <button disabled className="profile-btn profile-btn-dropdown" id="do-you-know">Do you know {user.firstName}?</button>
                    <button onClick={this.friendship("Add Friend").bind(this)} className="profile-btn profile-btn-friend"><i className="fas fa-user-plus"></i> Add Friend</button>;                    
                    </div>
                } else {
                friendshipToSubmit = targetFriendship;
                const { requesterId } = targetFriendship;
                if (targetFriendship.status === "accepted") {
                    friendBtn = <div>
                        <button onClick={e => e.preventDefault()} className="profile-btn profile-btn-friend"><i className="fas fa-check"></i> Friend <i className="fas fa-caret-down"></i></button>{/* this button needs to display the next one upon click */}
                        <button onClick={this.friendship("Unfriend", friendshipToSubmit).bind(this)} className="profile-btn profile-btn-dropdown"><i className="fas fa-remove"></i>Unfriend</button>
                    </div>
                        } else {
                    if (requesterId === currentUser.id) {
                        friendBtn =  <button onClick={this.friendship("Cancel Request", friendshipToSubmit).bind(this)} className="profile-btn profile-btn-friend"><i className="fas fa-remove"></i> Cancel Request</button>
                    } else {
                        friendBtn = (<div>
                            <button onClick={this.friendship("Accept Request", friendshipToSubmit).bind(this)} className="profile-btn profile-btn-friend"><i className="fas fa-check-circle"></i> Accept Request</button> {/* this button needs to display the next one upon click */}
                            <a onClick={this.friendship("Reject Request", friendshipToSubmit).bind(this)} className="profile-btn profile-btn-dropdown">Reject Request</a>
                        </div>)
                    }
                }
            }
        }



        const photo = user.photoUrl ? <img src={user.photoUrl} alt="user-profile" /> : null
        const cover = user.coverUrl ? <img src={user.coverUrl} alt="user-cover" /> : null

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
                        <div className="picture-default">
                            {profileUpdate}
                            {photo}
                        </div>
                    </div>
                    <h1 className="profile-name">{user.firstName} {user.lastName}</h1>
                    {friendBtn}
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
    deleteFriendship: friendshipId => dispatch(deleteFriendship(friendshipId))
})

export default withRouter(connect(msp, mdp)(ProfilePictureArea));

// pictures FROM https://www.inverse.com/article/55449-avengers-endgame-iron-man-death-tony-stark-final-line-was-added-at-the-last-minute. All rights to go Marvel Studios.
// FROM 1000logos.net / iron - man - logo.All rights go to Marvel Studios.
