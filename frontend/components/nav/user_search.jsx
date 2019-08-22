import React from 'react'
import SearchResults from './search_results'
import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions'

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
        this.debounce(this.props.fetchUsers, 1000)(this.state.search)
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
                <SearchResults type={this.props.type} users={users} clear={this.clear.bind(this)} blur={this.blur.bind(this)} search={this.state.search}/>
            </>
        )
    }
}

const msp = state => ({
    users: Object.values(state.entities.users),
    type: "users"
})

const mdp = dispatch => ({
    fetchUsers: string => dispatch(fetchAllUsers(string))
})

export default connect(msp, mdp)(Search)