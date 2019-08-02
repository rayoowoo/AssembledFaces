import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class ProfileNavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="profile-nav">
                <div className="profile-navbar">
                    <div className="profile-icon"><a onClick={e => this.props.history.push("/")}><img src="https://fontmeme.com/permalink/190802/dc70627ab06270ffdb933b4333bd4d14.png" alt="assembled-faces-small-logo" /></a></div>
                    {/* made using fontmeme.com/avengers-font */}
                    <div className="profile-search">
                        <form>
                            <input type="text"/>
                            <button>SEARCH</button>
                        </form>
                    </div>

                    <nav>
                        <div className="profile-nav-icons">
                            <a onClick={e => this.props.history.push(`/user/${this.props.currentUser.id}`)}>Name</a>
                            <a onClick={e => this.props.history.push("/")}>Home</a>
                            <a onClick={e => {e.preventDefault(); alert("sorry, doesn't work yet")} }>Create</a>
                        </div>


                        <div className="profile-nav-icons">
                            <i className="fas fa-user-friends"></i>
                            <i className="fas fa-comment"></i>
                            <i className="fas fa-bell"></i>
                        </div>

                        <i className="fas fa-question-circle"></i>
                        <i className="fas fa-caret-down"></i>

                    </nav>
                </div>
            </header>
        )
    }
}

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
})

export default withRouter(ProfileNavBar)