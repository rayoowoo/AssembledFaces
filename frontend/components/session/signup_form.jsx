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
            birth_date: "1/1/1901",
            first_name: "",
            last_name: "",
            gender: ""
        }
        this.demo = this.demo.bind(this);
        this.updateBirthday = this.updateBirthday.bind(this);
        this.touch = this.touch.bind(this);
        this.clear = this.clear.bind(this);
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state).then(
        this.setState({
            email: "",
            password: "",
            birth_date: "1/1/1901",
            first_name: "",
            last_name: "",
            gender: ""
        }))
    }

    demo(e) {
        e.preventDefault();
        this.props.login({email: "tonystark@gmail.com", password: "tonystark"})
    }

    touch(e) {
        e.preventDefault();
        if (e.target.classList.contains("touched")){
            e.target.classList.add("check")
        }
        e.target.classList.add("touched");
    }

    clear(e) {
        e.preventDefault();
        e.target.classList.remove("check");
    }

    render() {

        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <span className="signup-name"><input className="text-input" type="text" 
                        onClick={this.validate} 
                        onChange={this.update("first_name")} 
                        value={this.state.first_name} 
                        required 
                        onInput={this.clear}
                        onClick={this.touch}
                        placeholder="First name" />
                            <div>
                                What's your name?
                                <div className="error-arrow-right"></div>    
                                <div className="error-arrow-right error-arrow-shadow"></div>    
                            </div>
                            <i className="fas fa-exclamation-circle"></i>
                        </span>

                    <span className="signup-name"><input className="text-input" type="text" 
                        onClick={this.validate} 
                        onChange={this.update("last_name")}
                        value={this.state.last_name}
                        required 
                        onInput={this.clear}
                        onClick={this.touch}
                            placeholder="Last name" />
                            <i className="fas fa-exclamation-circle"></i>
                        </span>
                </div>
                
                <div>
                    <span className="signup-email-password"><input className="signup-main text-input" type="email" 
                        onClick={this.validate}
                        onChange={this.update("email")} 
                        value={this.state.email} 
                        required
                        onInput={this.clear}
                        onClick={this.touch}
                        placeholder="Email address"/>
                            <div id="email-invalid">
                                You'll use this when you log in and if you ever need to reset your password.
                                <div className="error-arrow-right"></div>
                                <div className="error-arrow-right error-arrow-shadow"></div>
                            </div>
                            <i className="fas fa-exclamation-circle"></i>
                    </span>

                    <span className="signup-email-password"><input className="signup-main text-input" type="password" 
                        onClick={this.validate}
                        onChange={this.update("password")}
                        value={this.state.password}
                        required
                        onInput={this.clear}
                        onClick={this.touch}
                        placeholder="New password"/>
                            <div id="password-invalid">
                                {`Enter a password of at least six numbers, letters, and punctuation marks (like ! and &).`}
                                <div className="error-arrow-right"></div>
                                <div className="error-arrow-right error-arrow-shadow"></div>
                            </div>
                            <i className="fas fa-exclamation-circle"></i>
                        </span>
                </div>
                        
                <BirthdayForm updateBirthday={this.updateBirthday} birthDate={this.state.birth_date}/>
                <GenderForm update={this.update} touch={this.touch}/> 

                <p id="disclaimer">
                        By clicking Sign Up, you agree to our <a href="https://marvelcinematicuniverse.fandom.com/wiki/Sokovia_Accords" target="_blank">Terms</a>,
                    <a href="https://marvelcinematicuniverse.fandom.com/wiki/Sokovia_Accords" target="_blank"> Data Policy</a> and <a href="https://marvelcinematicuniverse.fandom.com/wiki/Sokovia_Accords" target="_blank">Cookies Policy</a>. You will
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