import React from 'react'
import {withRouter} from 'react-router-dom'

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick(id) {
        return e => {
            e.preventDefault();
            debugger
            this.props.history.push(`/user/${id}`);
            this.props.blur(e);
            this.props.clear(e);
        }
    }

    render() {
        const { users = [], search = "" } = this.props;
        const people = users
            .filter(user => {
                return user.first_name.toLowerCase().includes(search.toLowerCase()) || user.last_name.toLowerCase().includes(search.toLowerCase())
            })
            .map(user => {
                return <div>
                    <span key={`result-${user.id}`} onClick={this.handleClick(user.id).bind(this)}>{user.first_name.toLowerCase()} {user.last_name.toLowerCase()}</span>
                </div>
            })  
       
        
        const results = people.length === 0 || search === "" ? null : <div className="search-results">{people}</div>

        return (
            <section className="search-results-index">
                {results}
            </section>
        )
    }
}

export default withRouter(SearchResults);