import React from 'react'


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.state = {
            email: "",
            password: "",
            birth_date: "",
            first_name: "",
            last_name: ""
        }
    }

    update(field) {
        debugger
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e) {
        this.props.processForm(this.state);
    }

    render() {
        const {formType} = this.props;
        const signupFormElements = formType === "login" ? null : (
            <>
                <label>Birth Date:
                    <input type="date" onChange={this.update("birth_date")} value={this.state.birth_date} />
                </label>
                <label>First Name:
                    <input type="text" onChange={this.update("first_name")} value={this.state.first_name} />
                </label>
                <label>Last Name:
                    <input type="text" onChange={this.update("last_name")} value={this.state.last_name} />
                </label>
            </>
        )
        return (
        <form onSubmit={this.handleSubmit}>
            <label>Email:
                <input type="text" onChange={this.update("email")} value={this.state.email}/>
            </label>
            <label>Password:
                <input type="password" onChange={this.update("password")} value={this.state.password}/>
            </label>
            {signupFormElements}
            <input type="submit" value={formType === "login" ? "Log In" : "Sign Up"}/>
        </form>
        )
    }
}

export default SessionForm