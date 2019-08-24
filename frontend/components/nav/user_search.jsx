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
        this.ready = false;
    }

    search(e) {
        e.preventDefault();
        this.setState({ search: e.target.value });
        this.debounce(() => {
            this.props.fetchUsers(this.state.search);
            this.ready = true;
        }, 500)()
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
        e.target.classList.remove("search-focused");
        this.ready = false;
    }
 
    render() {
        const { users = [] } = this.props;
        const search = this.ready ? (
            <SearchResults type={this.props.type} users={users} clear={this.clear.bind(this)} blur={this.blur.bind(this)} search={this.state.search} />
        ) : null
        return (
            <>
                <input type="text" className="search" onBlur={this.props.toggleSearchBtn} onFocus={this.focus.bind(this)} onChange={this.search.bind(this)} placeholder="Search" value={this.state.search} />
                {search}
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