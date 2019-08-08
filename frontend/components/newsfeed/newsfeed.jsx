import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import NewsFeedPostForm from '../post/post_form_container'
import NewsFeedPostIndex from './newsfeed_post_index_container'


class NewsFeed extends React.Component {
    

    profile(e) {
        e.preventDefault();
        this.props.history.push(`/user/${this.props.currentUser.id}`)
    }

    render() {
        const {currentUser} = this.props;
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

                        <section className="newsfeed-aside-links"><a href="https://github.com/rayoowoo/AssembledFaces"><i class="fab fa-github"></i><span>GITHUB</span></a></section>
                        <section className="newsfeed-aside-links"><a href="https://www.linkedin.com/in/ruiyu-wu-173604134/"><i class="fab fa-linkedin-in"></i><span>LINKEDIN</span></a></section>
                        <section className="newsfeed-aside-links"><a href=""><i class="fas fa-envelope"></i><span>EMAIL</span></a></section>
                    </aside>
                    <section className="newsfeed-main">
                        <NewsFeedPostForm />
                        <NewsFeedPostIndex />
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
    currentUser: state.entities.users[state.session.id]
})

export default withRouter(connect(msp)(NewsFeed))