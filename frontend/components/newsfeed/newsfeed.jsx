import React from 'react'
import {withRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import NewsFeedPostForm from '../post/post_form_container'
import NewsFeedPostIndex from './newsfeed_post_index_container'
import {fetchUser} from '../../actions/user_actions'
// import UserIndex from './users_index'


class NewsFeed extends React.Component {
    
    componentDidMount() {
        this.props.fetchUser(this.props.currentUserId);
        window.scrollTo(0, 0);
    }

    profile(e) {
        e.preventDefault();
        this.props.history.push(`/user/${this.props.currentUser.id}`)
    }

    render() {
        const {currentUser = {} } = this.props;
        const photo = currentUser.photoUrl ? <img src={currentUser.photoUrl} alt="" /> : null
        
        return (
            <div className="newsfeed">
                <div className="newsfeed-content">
                    <aside className="newsfeed-aside">

                        <section onClick={this.profile.bind(this)}  className="newsfeed-aside-top">
                            <div className="post-picture">
                                {photo}
                                {/* FROM 1000logos.net/iron-man-logo. All rights go to Marvel Studios. */}
                            </div>
                            <span>{currentUser.first_name} {currentUser.last_name}</span>
                        </section>

                        <section className="newsfeed-aside-links"><a href="https://github.com/rayoowoo/AssembledFaces"><i className="fab fa-github"></i><span>GITHUB</span></a></section>
                        <section className="newsfeed-aside-links"><a href="https://www.linkedin.com/in/ruiyu-wu-173604134/"><i className="fab fa-linkedin-in"></i><span>LINKEDIN</span></a></section>
                        <section className="newsfeed-aside-links newsfeed-email"><i className="fas fa-envelope"></i><span>EMAIL</span><p>ruiyuwu1998@gmail.com</p></section>
                    </aside>
                    <section className="newsfeed-main">
                        <NewsFeedPostForm />
                        <NewsFeedPostIndex user={currentUser}/>
                        {/* <Route exact path="/users/all" component={UsersIndex} /> */}
                    </section>
                    <div className="empty">
                        <div> </div>
                    </div>
                </div>
            </div>
        )
    }
}

const msp = state => ({
    currentUserId: state.session.id,
    currentUser: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default withRouter(connect(msp, mdp)(NewsFeed))