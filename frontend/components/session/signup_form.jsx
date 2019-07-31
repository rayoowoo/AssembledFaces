import React from 'react'
import BirthdayForm from '../splash/birthday_form'
import GenderForm from '../splash/gender_form'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.state = {
            email: "",
            password: "",
            birth_date: "",
            first_name: "",
            last_name: "",
            gender: ""
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
            <div className="signup-name">
                <input type="text" onChange={this.update("first_name")} value={this.state.first_name} placeholder="First name" />
                <input type="text" onChange={this.update("last_name")} value={this.state.last_name} placeholder="Last name" />
            </div>
                <label><span className="baseform">Email</span>
                <input className="signup-main" type="text" onChange={this.update("email")} value={this.state.email} placeholder="Email address"/>
            </label>
                <label><span className="baseform">Password</span>
                <input className="signup-main" type="password" onChange={this.update("password")} value={this.state.password} placeholder="New password"/>
            </label>
            <BirthdayForm />
            <GenderForm /> 
            <p id="disclaimer">
                By clicking Sign Up, you agree to our <a href="">Terms</a>,
                <a href=""> Data Policy</a> and <a href="">Cookies Policy</a>.
                You may receive SMS Notifications from us and can opt out any time.
            </p>
            <input type="submit" value="Sign Up"/>
        </form>
        )
    }
}

export default SignupForm