import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.state = {
            email: "",
            password: "",
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

        return (
        <form onSubmit={this.handleSubmit}>
                <label><span className="baseform">Email</span>
                <input className="signup-main" type="text" onChange={this.update("email")} value={this.state.email}/>
            </label>
                <label><span className="baseform">Password</span>
                <input className="signup-main" type="password" onChange={this.update("password")} value={this.state.password}/>
                <a href="#">Forgot account?</a>
            </label>
            <input type="submit" value="Log In"/>
        </form>
        )
    }
}

export default LoginForm