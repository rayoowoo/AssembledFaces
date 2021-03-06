import React from 'react'
import {withRouter} from 'react-router-dom'

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick(user) {
        return e => {
            e.preventDefault();
            if (this.props.type === "users") {
                this.props.history.push(`/user/${user.id}`);
            } else {
                this.props.addTag(user)(e);
            }
            this.props.blur(e);
            this.props.clear(e);
        }
    }

    render() {
        const { users, search = "" } = this.props;
        let people;
        if (Boolean(users)) {
            people = users
            .slice(0, 9)
            .filter(user => {
                return user.firstName.toLowerCase().includes(search.toLowerCase()) || user.lastName.toLowerCase().includes(search.toLowerCase())
            })
            .map(user => {
                return <div key={`result-${user.id}`}>
                    <span onClick={this.handleClick(user).bind(this)}>{user.firstName.toLowerCase()} {user.lastName.toLowerCase()}</span>
                </div>
            })
        }
        const results = people.length === 0 || search === "" ? null : <div className="search-results">{people}</div>

        return (
            <section className="search-results-index">
                {results}
            </section>
        )
    }
}

export default withRouter(SearchResults);