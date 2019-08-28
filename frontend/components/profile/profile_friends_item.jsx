import React from 'react';
import {withRouter} from 'react-router-dom';


class ProfileFriendItem extends React.Component {

    goToFriend(friend) {
        return e => {
            e.preventDefault();
            this.props.history.push(`/user/${friend.id}`)
        }
    }

    render() {
        const {friend} = this.props;
        return (
            <div className="profile-friends-index-item">
                <div onClick={e => this.props.history.push(`/user/${friend.id}`)} className="profile-friends-index-item-picture">
                    <img src={friend.photoUrl} alt="" />
                </div>
                <section>
                    <div className="profile-friends-index-item-label">
                        <span className="profile-friends-index-item-name" onClick={this.goToFriend(friend).bind(this)}>{friend.firstName} {friend.lastName}</span>
                        <span className="profile-friends-index-item-count">{friend.friendIds.length} friends</span>
                    </div>
                </section>
            </div>
        )
    }
}



export default withRouter(ProfileFriendItem);