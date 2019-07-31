import React from 'react'

export default (props) => {
    return (
        <div className="gender-form" onClick={props.update("gender")}>
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
            
            <i className="fas fa-question-circle gender-question"></i>
        </div>
    )
}