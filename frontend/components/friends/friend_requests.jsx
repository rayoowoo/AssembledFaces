import React from 'react';
import FriendRequestItem from './friend_request_item'
import { Link, withRouter } from 'react-router-dom'

class FriendRequests extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.currentUser.id !== parseInt(this.props.match.params.userId)) {
            this.props.history.push(`/user/${parseInt(this.props.match.params.userId)}`)
            return;
        }
        this.props.fetchUser(this.props.currentUser.id)
        window.scrollTo(0, 0);
    }

    render() {
        const {requests} = this.props;
        const count = requests.length;

        const search = this.props.type === "received" ? "requesterId" : "requestedId";
        
        let friendships = {};
        this.props.friendships.forEach(el => {
            const change = Object.assign({}, el);
            const id = change[search];
            friendships[id] = change;
        })

        const display = requests.map( request => {
            return <FriendRequestItem
                        type={this.props.type}
                        deleteFriendship={this.props.deleteFriendship}
                        approveFriendship={this.props.approveFriendship}
                        friendship={friendships[request.id]}
                        key={`request-${request.id}`}
                        currentUser={this.props.currentUser}
                        user={request}
                    />
        })

        const header = this.props.type === "sent" ? "Friend Requests Sent" : `Respond to Your ${count} Friend Requests`;

        const link = this.props.type === "sent" ? "Received" : "Sent";

        return (
            <section className="friend-request-index">
                <div className="friend-request-index-headers">
                    <h1>{header}</h1>
                    <Link to={`/user/${this.props.currentUser.id}/${link.toLowerCase()}-requests`}>View {link} Requests</Link>
                </div>
                
                <ul className="friend-request-list">
                    {display}
                </ul>
            </section>
            
        )
    }
}


export default withRouter(FriendRequests);