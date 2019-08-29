import React from 'react'


class RecoverPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ""
        }
        this.cancel = this.cancel.bind(this);
    }

    cancel(e) {
        this.props.history.push("/")
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
                    
                    <button onClick={e => window.open(`https://www.youtube.com/watch?v=-qCNUex6rRc&start=41`, '_blank')} target="_blank" className="demo recover-input-btn-1">Search</button>
                    <button onClick={this.cancel} className="demo recover-input-btn-2">Cancel</button>

                </form>
                    <div className="recover-btns">
                    </div>              
            </div>
        )
    }
}

export default RecoverPage