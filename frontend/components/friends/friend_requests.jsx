import React from 'react';

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


        return (
            <div>
                <h1>Respond to Your {count} Friend Requests</h1>

            </div>
            
        )
    }
}


export default FriendRequests;