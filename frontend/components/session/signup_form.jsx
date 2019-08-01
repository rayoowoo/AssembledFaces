import React from 'react'
import BirthdayForm from '../splash/birthday_form'
import GenderForm from '../splash/gender_form'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
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
        this.nobubble = this.nobubble.bind(this);
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

    handleClick(e) {
        let stop = false;
        let firstInvalid = null;
        let inputs = Object.values(this.refs).slice(0, 4);
        let others = Object.values(this.refs.gender.refs).slice(0,3);
        debugger
        Object.values(this.refs.gender.refs).slice(0,3).forEach (other => {
            if (other.children[0].checkValidity()) {
                others = [];
            }
        })
        inputs = inputs.concat(others)

        if (this.refs.gender.refs.customGender.classList.contains("display-block")) {
            inputs = inputs.concat([this.refs.gender.refs.customGender.children[0]])
        }

        inputs.forEach( (input) => {
            if (input.nodeName === "SELECT") {
                if (input.value === "DEFAULT") {
                    input.classList.add("touched", "checked")
                    stop = true;
                    firstInvalid = firstInvalid === null ? input : firstInvalid;
                    return
                }
            }

            input.classList.add("touched", "checked")
            if ( input.nodeName !== "INPUT" ) {
                input = input.children[0];
            }
            
            if ( !input.checkValidity() ) { 
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

    nobubble(e) {
        e.preventDefault();
    }

    render() {

        return (
            <>
            <form onInvalid={this.nobubble}>
                <div>
                    <span className="signup-name"><input ref="input1" className="text-input" type="text" 
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

                    <span className="signup-name"><input ref="input2" className="text-input" type="text" 
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
                    <span className="signup-email-password"><input ref="input3" className="signup-main text-input" type="email" 
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

                    <span className="signup-email-password"><input ref="input4" className="signup-main text-input" type="password" 
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
                <GenderForm ref="gender" update={this.update}/> 

                <p id="disclaimer">
                        By clicking Sign Up, you agree to our <a href="https://marvelcinematicuniverse.fandom.com/wiki/Sokovia_Accords" target="_blank">Terms</a>,
                    <a href="https://marvelcinematicuniverse.fandom.com/wiki/Sokovia_Accords" target="_blank"> Data Policy</a> and <a href="https://marvelcinematicuniverse.fandom.com/wiki/Sokovia_Accords" target="_blank">Cookies Policy</a>. You will
                            also be seen by Heimdall from Asgard. Because he sees through the Nine Realms
                    you will always be under his eye. <a href="https://www.youtube.com/watch?v=PYeCiOzIIhQ" target="_blank">Unless you have the reality stone.</a></p>

                <button className="signup-submit-btn" onClick={this.handleClick}>Sign Up</button>
            </form>
            <button className="demo" onClick={this.demo}>Demo Login</button>
            </>
        )
    }
}

export default SignupForm