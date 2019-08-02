import React from 'react'
import { connect } from 'react-redux'
import {clearSessionErrors, login} from '../../actions/session_actions'

class BlankLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.touch = this.touch.bind(this);
        this.clear = this.clear.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.update = this.update.bind(this);
        this.nobubble = this.nobubble.bind(this);

    }

    componentDidMount() {
        if (this.props.errors.includes("wrong password")) {
            const passwordField = this.refs.input2;
            passwordField.classList.add("touched","check")
            this.setState({email: this.props.errors[1].attempted_email})
            passwordField.focus();
            passwordField.click();
        }
        if (this.props.errors.includes("email address was not found")) {
            const emailField = this.refs.input1;
            emailField.classList.add("touched", "check");
            emailField.focus();
            emailField.click();
        }
        this.props.clearSessionErrors();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleClick(e) {
        let stop = false;
        let firstInvalid = null;
        let inputs = Object.values(this.refs);
        inputs.forEach((input) => {
            input.classList.add("touched", "checked");
            if (!input.checkValidity()) {
                stop = true;
                firstInvalid = firstInvalid === null ? input : firstInvalid;
            }
        })
        if (stop) {
            firstInvalid.focus();
            firstInvalid.click();
            return
        }
        else {
            this.props.login(this.state)
        }
    }

    touch(e) {
        e.preventDefault();
        if (e.target.classList.contains("touched")) {
            e.target.classList.add("check")
        }
        e.target.classList.add("touched");
    }

    clear(e) {
        e.preventDefault();
        e.target.classList.remove("check", "touched");
    }

    nobubble(e) {
        e.preventDefault();
    }

    render() {

        return (
            <div className="splash-login-container">
                <h2>Log Into AssembledFaces</h2>
                <form onInvalid={this.nobubble} className="splash-login-form">
                    <span className="login-input-container"><input ref="input1" className="text-input login-input" type="email"
                        onChange={this.update("email")}
                        value={this.state.email}
                        required
                        onInput={this.clear}
                        onClick={this.validate} 

                        onClick={this.touch}
                        placeholder="Email address" />
                        <div id="login-email-invalid">
                            The email or phone number you've entered doesn't match any account. <a onClick={e => this.props.history.push("/")}>Sign up for an account.</a>
                            <div className="arrow-left splash-login-arrow"></div>
                        </div>
                        <i className="fas fa-exclamation-circle"></i>
                    </span>

                    <span className="login-input-container"><input ref="input2" className="text-input login-input" type="password"
                        onChange={this.update("password")}
                        value={this.state.password}
                        required
                        onInput={this.clear}
                        onClick={this.validate} 

                        onClick={this.touch}
                        placeholder="Password" />
                        <div id="login-password-invalid">
                            The password you’ve entered is incorrect. <a onClick={e => this.props.history.push("/")}>Forgot Password?</a>
                            <div className="arrow-left splash-login-arrow"></div>
                        </div>
                        <i className="fas fa-exclamation-circle"></i>

                        <button onClick={this.handleClick} className="demo login-input-btn">Log In</button>

                        <a onClick={(e) => this.props.history.push("/recover")}>Recover Your Account</a>
                    </span>
                </form>
            </div>
        )
    }
}

const msp = state => ({
    errors: state.errors.session
})

const mdp = dispatch => ({
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    login: user => dispatch(login(user))
})


export default connect(msp, mdp)(BlankLogin)