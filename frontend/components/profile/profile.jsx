import React from 'react';
import ProfilePictureArea from './profile_picture_area';
import ProfileNav from './profile_nav';
import ProfileSideBar from './profile_side_bar';
import ProfileTimeline from './profile_timeline';
import ProfileAbout from './profile_about';
import ProfileFriends from './profile_friends';
import ProfilePhotos from './profile_photos';
import {connect} from 'react-redux';
import {closeModal, openModal} from '../../actions/modal_actions';
import {Switch, Route, withRouter} from 'react-router-dom';
import {fetchUser} from '../../actions/user_actions';
import { arrayEqual } from '../../utils/array_utils';



class Profile extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId)
        }
    }

    render() {
        const { user, currentUser, friendships } = this.props;
        const userId = parseInt(this.props.match.params.userId);

        const acceptedFriendships = friendships.filter(friendship => friendship.status === "accepted").map(friendship => {
            if (friendship.requestedId === user.id) {
                return friendship.requesterId;
            } if (friendship.requesterId === user.id) {
                return friendship.requestedId;
            }
        })

        
        const page = currentUser.id === userId || acceptedFriendships.includes(currentUser.id) ? (
            <>
                <Switch>
                    <Route path="/user/:userId/about" render={props => <ProfileAbout user={user} />} />
                    <Route path="/user/:userId/friends" render={props => <ProfileFriends currentUserId={currentUser.id} user={user} />} />
                    <Route path="/user/:userId/photos" render={props => <ProfilePhotos currentUserId={currentUser.id} user={user} />} />
                    <Route exact path="/user/:userId" render={props => <ProfileTimeline user={user} />} />
                </Switch>
  
            </>
        ) : (
            <div className="profile-empty">
            </div>
        )



        return (
            <section className="profile">
                <div className="profile-content">
                    <ProfilePictureArea closeModal={this.props.closeModal} openProfile={this.props.openProfile} openCover={this.props.openCover}/>
                    <ProfileNav user={user} currentUserId={this.props.currentUser.id}/>
                    <div className="profile-main">
                        <Route exact path="/user/:userId" render={props => <ProfileSideBar currentUserId={currentUser.id} closeModal={this.props.closeModal} openAdd={this.props.openAdd} user={user} />} />
                    {page}
                    </div>
                </div>
            </section>
          
        )
    }
}

const msp = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId] || {},
        currentUser: state.entities.users[state.session.id] || {},
        friendships: Object.values(state.entities.friendships) || []
    }
}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openProfile: () => dispatch(openModal("profilePicture")),
        openCover: () => dispatch(openModal("coverPicture")),
        openAdd: () => dispatch(openModal("addPicture")),
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default withRouter(connect(msp, mdp)(Profile));