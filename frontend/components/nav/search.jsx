import React from 'react'
import { connect } from 'react-redux';
import {fetchAllUsers} from '../../actions/user_actions'
import SearchResults from './search_results'

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

    clear(e) {
        this.setState({search: ""})
    }
    

    debounce(func, interval) {
        let test;
        return (...args) => {
            clearTimeout(test);
            test = setTimeout(() => func(...args), interval);
        }
    }

    focus(e) {
        e.target.classList.add("search-focused");
        this.props.toggleSearchBtn();
    }

    blur(e) {
        e.target.classList.remove("search-focused")
    }
 
    render() {
        const { users = [] } = this.props;
        return (
            <>
                <input type="text" className="search" onBlur={this.props.toggleSearchBtn} onFocus={this.focus.bind(this)} onChange={this.search.bind(this)} placeholder="Search" value={this.state.search} />
                <SearchResults users={users} clear={this.clear.bind(this)} blur={this.blur.bind(this)} search={this.state.search}/>
            </>
        )
    }
}

const msp = state => ({
    users: Object.values(state.entities.users)
})

const mdp = dispatch => ({
    fetchAllUsers: string => dispatch(fetchAllUsers(string))
})

export default connect(msp, mdp)(Search)