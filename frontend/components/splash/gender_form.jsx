import React from 'react'

class GenderForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="gender-form" onClick={this.props.update("gender")}>
                <h3>Gender</h3>
                    <label>
                        <input name="gender" type="radio" value="Female"/>
                        <span>Female</span>
                    </label>
                    <label>
                        <input name="gender" type="radio" value="Male"/>
                        <span>Male</span>
                    </label>
                    <label>
                        <input name="gender" type="radio" value="Custom"/>
                        <span>Custom</span>
                    </label>

                <div className="signup-question-container">
                    <i className="fas fa-question-circle signup-question"></i>
                    <span className="signup-question-text"><div className="arrow-right"></div>
                    <p>You can change who sees your gender on your profile later.
                        Select Custom to choose another gender, or if you'd rather not say.</p>
                        <button onClick={this.handleClick}>Close</button>
                    </span>
                </div>
            </div>
        )
    }

    
}

export default GenderForm