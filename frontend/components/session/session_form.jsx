import React from 'react'


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }

    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e) {
        this.props.processForm(this.state);
    }

    render() {
        const {formType} = this.props;
        return (
        <form onSubmit={this.handleSubmit}>
            <label>Email:
                <input type="text" onChange={this.update("email")} value={this.state.email}/>
            </label>
            <label>Password:
                <input type="password" onChange={this.update("password")} value={this.state.password}/>
            </label>
            <input type="submit" value={formType === "login" ? "Log In" : "Sign Up"}/>
        </form>
        )
    }
}

export default SessionForm