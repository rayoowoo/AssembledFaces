import React from 'react'


class RecoverPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.props.signup(this.state).then(
            this.setState({
                email: ""
            }))
        }

    render() {
        return (
            <div className="splash-recover-container">
                <h2>Find Your Account</h2>
                <form  className="splash-recover-form">
                    <span className="recover-input-container">
                        <p>Please enter you email or phone number to search for your account.</p>
                        <input ref="input1" className="text-input recover-input" type="email"
                        placeholder="Email address" />
    
                    </span>
                    
                    <button onClick={this.handleClick} className="demo recover-input-btn-1">Search</button>
                    <button onClick={this.handleClick} className="demo recover-input-btn-2">Cancel</button>

                </form>
                    <div className="recover-btns">
                    </div>              
            </div>
        )
    }
}

export default RecoverPage