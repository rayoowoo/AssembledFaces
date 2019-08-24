import React from 'react';
import {Link} from 'react-router-dom'

class FriendRequests extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUserId)
    }

    render() {
        const {requests} = this.props;
        const count = requests.length;

        const display = requests.map( request => {
            const {id, first_name, last_name} = request;
            return <li key={`request-${id}`}><Link to={`/user/${id}`}>{first_name} {last_name}</Link></li>
        })


        return (
            <section className="friend-request-index">
                <h1>Respond to Your {count} Friend Requests</h1>
                <ul>
                    {display}
                </ul>
            </section>
            
        )
    }
}


export default FriendRequests;