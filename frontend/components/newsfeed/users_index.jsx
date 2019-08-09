import React from 'react'
import { connect } from 'react-redux';
import { fetchUsersIndex } from '../../actions/user_actions'

class UsersIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsersIndex();
    }


    render() {


        return (
            <h1>USErS INDEX</h1>
        )
    }
}

const msp = state => ({
    allUsers: Object.values(state.entities.users) || []
})

const mdp = dispatch => ({
    fetchUsersIndex: () => dispatch(fetchUsersIndex())
})

export default connect(msp, mdp)(UsersIndex)