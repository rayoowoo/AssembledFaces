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
            birth_date: "//",
            first_name: "",
            last_name: "",
            gender: ""
        }
        this.validate = this.validate.bind(this);
        this.demo = this.demo.bind(this);
    }

    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    updateBirthday({month, date, year}) {
        const birthday = month + "/" + date + "/" + year;
        this.setState({birth_date: birthday})
    }

    validate(e) {
        debugger
        e.preventDefault();
        e.target.classList.add("validate")
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }

    demo(e) {
        e.preventDefault();
        this.props.login({email: "tonystark@gmail.com", password: "tonystark"})
    }

    render() {

        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <span className="signup-name"><input  type="text" 
                        onClick={this.validate} 
                        onChange={this.update("first_name")} 
                        value={this.state.first_name} 
                        required 
                        placeholder="First name" /></span>

                    <span className="signup-name"><input  type="text" 
                        onClick={this.validate} 
                        onChange={this.update("last_name")}
                        alue={this.state.last_name} required 
                        placeholder="Last name" /></span>
                </div>
                
                <div>
                    <input className="signup-main" type="text" 
                        onClick={this.validate}
                        onChange={this.update("email")} 
                        value={this.state.email} 
                        required 
                        placeholder="Email address"/>

                    <input className="signup-main" type="password" 
                        onClick={this.validate} 
                        onChange={this.update("password")}
                        value={this.state.password}
                        required
                        placeholder="New password"/>
                </div>
                        
                <BirthdayForm update={this.updateBirthday} birthDate={this.state.birth_date}/>
                <GenderForm update={this.update}/> 

                <p id="disclaimer">
                    By clicking Sign Up, you agree to our <a href="">Terms</a>,
                    <a href=""> Data Policy</a> and <a href="">Cookies Policy</a>. You will
                    also be seen by Heimdall from Asgard. Because he sees through the Nine Realms
                    you will always be under his eye. Unless you have the space stone.</p>
                <input type="submit" value="Sign Up"/>
            </form>
            <button className="demo" onClick={this.demo}>Demo Login</button>
            </>
        )
    }
}

export default SignupForm