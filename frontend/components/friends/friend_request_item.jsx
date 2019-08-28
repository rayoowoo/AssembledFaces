import React from 'react'
import { Link } from 'react-router-dom';
import {arrayOverlap} from '../../utils/array_utils';
import { merge } from 'lodash';

class FriendRequestItem extends React.Component {
    constructor(props) {
        super(props);
    }

    friendship(friendStatus, friendshipToSubmit) {
        return e => {
            e.preventDefault();
            switch (friendStatus) {
                case "Reject Request":
                    this.props.deleteFriendship(friendshipToSubmit.id);
                    break
                case "Cancel Request":
                    this.props.deleteFriendship(friendshipToSubmit.id);
                    break
                case "Accept Request":
                    this.props.approveFriendship(merge(friendshipToSubmit, { status: "accepted" }));
                    break
                default:
                    return;
            }
        }
    }

    render() {
        const { id, first_name, last_name, friend_ids, photoUrl} = this.props.user;
        const {type, friendship} = this.props;
        let mutual, friendBtns;

        if (friend_ids) {
            mutual = arrayOverlap(friend_ids, this.props.currentUser.friend_ids);

            if (type === "received") {
                friendBtns = (<div className="friend-request-item-btns">
                    <button onClick={this.friendship("Accept Request", friendship).bind(this)} className="friend-request-item-accept">Confirm</button>
                    <a onClick={this.friendship("Reject Request", friendship).bind(this)} className="friend-request-item-reject">Delete Request</a>
                </div>)
            } else {
                friendBtns = (<div className="friend-request-item-btns">
                    <button onClick={this.friendship("Cancel Request", friendship).bind(this)} className="friend-request-item-reject">Cancel Request</button>
                </div>)
            }
        }

        const photo = photoUrl ? photoUrl : "/app/assets/images/default.png"

        return (
            <li className="friend-request-item">
                <div className="friend-request-item-picture picture-default">
                    <img src={photo} alt=""/>
                </div>
                <div className="friend-request-item-content">
                    <span className="friend-request-item-name"><Link to={`/user/${id}`}>{first_name} {last_name}</Link></span>
                    <span className="friend-request-item-mutual"><i className="fas fa-user-friends"></i>{mutual} mutual friends.</span>
                </div>
                {friendBtns}
            </li>
        )
    }
}

export default FriendRequestItem;