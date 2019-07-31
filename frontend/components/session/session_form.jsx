import React from 'react'
import BirthdayForm from './birthday_form'
import GenderForm from './gender_form'

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
        let firstLastName = null;
        let birthdayGender = null;
        let forgot = (<a href="#">Forgot account?</a>);
        let email = "";
        let password = "";
        if (formType === "signup") {
            firstLastName = (
                <div className="signup-name">
                    <input type="text" onChange={this.update("first_name")} value={this.state.first_name} placeholder="First name"/>
                    <input type="text" onChange={this.update("last_name")} value={this.state.last_name} placeholder="Last name"/>
                </div>
            );
            birthdayGender = (
                <>
                    {<BirthdayForm />}
                    {<GenderForm />}
                    
                    <p id="disclaimer">
                        By clicking Sign Up, you agree to our <a href="">Terms</a>,
                        <a href=""> Data Policy</a> and <a href="">Cookies Policy</a>.
                        You may receive SMS Notifications from us and can opt out any time.
                    </p>
                </>
            );
            forgot = null;
            email = "Email address";
            password = "New password"
        } 

        return (
        <form onSubmit={this.handleSubmit}>
            {firstLastName}
                <label><span className="baseform">Email</span>
                <input className="signup-main" type="text" onChange={this.update("email")} value={this.state.email} placeholder={email}/>
            </label>
                <label><span className="baseform">Password</span>
                <input className="signup-main" type="password" onChange={this.update("password")} value={this.state.password} placeholder={password}/>
                {forgot}
            </label>
            {birthdayGender}
            <input type="submit" value={formType === "login" ? "Log In" : "Sign Up"}/>
        </form>
        )
    }
}

export default SessionForm