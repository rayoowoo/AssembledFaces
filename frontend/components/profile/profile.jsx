import React from 'react'
import ProfilePictureArea from './profile_picture_area'
import ProfileNav from './profile_nav'
import ProfileSideBar from './profile_side_bar'
import ProfileTimeline from './profile_timeline'
import ProfileAbout from './profile_about'
import {connect} from 'react-redux'
import {closeModal, openModal} from '../../actions/modal_actions'
import {Switch, Route, withRouter} from 'react-router-dom'
import {fetchUser} from '../../actions/user_actions'


class Profile extends React.Component {


    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    render() {
        const { user, currentUser } = this.props;
        const userId = parseInt(this.props.match.params.userId);
        const page = currentUser.id === userId || currentUser.friend_ids.includes(userId) ? (
            <>
                <div className="profile-main">
                    <Route exact path="/user/:userId" render={props => <ProfileSideBar closeModal={this.props.closeModal} openAdd={this.props.openAdd} user={user} />} />
                    <Switch>
                        <Route path="/user/:userId/about" render={props => <ProfileAbout user={user} />} />
                        <Route exact path="/user/:userId" render={props => <ProfileTimeline user={user} />} />
                    </Switch>
                </div>
            </>
        ) : (
            null
        )



        return (
            <section className="profile">
                <div className="profile-content">
                    <ProfilePictureArea closeModal={this.props.closeModal} openProfile={this.props.openProfile} openCover={this.props.openCover} user={user}/>
                    <ProfileNav user={user} currentUserId={this.props.currentUser.id}/>
                    {page}
                </div>
            </section>
          
        )
    }
}

const msp = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId] || {},
        currentUser: state.entities.users[state.session.id] || {}
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

//  user={props.location.match.params.userId}