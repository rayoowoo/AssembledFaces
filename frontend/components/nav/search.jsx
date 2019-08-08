import React from 'react'
import { connect } from 'react-redux';
import {fetchAllUsers} from '../../actions/user_actions'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
        this.debounce = this.debounce.bind(this);
    }

    search(e) {
        e.preventDefault();
        this.setState({ search: e.target.value });
        this.debounce(this.props.fetchAllUsers, 1000)(e.target.value)
    }
    

    debounce(func, interval) {
        let test;
        return (...args) => {
            clearTimeout(test);
            test = setTimeout(() => func(...args), interval);
        }
    }
 
    render() {
        return (
            <input type="text" onChange={this.search.bind(this)} placeholder="Search" value={this.state.search} />
        )
    }
}

const msp = state => ({
    users: state.entities.users
})

const mdp = dispatch => ({
    fetchAllUsers: string => dispatch(fetchAllUsers(string))
})

export default connect(msp, mdp)(Search)