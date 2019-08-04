import React from 'react'

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.assignSelect = this.assignSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            body: "",
            // post_id: parseInt(this.props.match.params.userId),
            // author_id: this.props.currentUser.id
        }
    }

    assignSelect(e) {
        // e.preventDefault();
        // Object.values(this.refs).forEach(ref => {
        //     ref.classList.remove("postform-selected");
        // })
        // e.currentTarget.classList.add("postform-selected")
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ body: e.target.value })
        // this.refs.btn.classList.add("disabled-btn")
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPost(this.state);
        this.setState({ body: "" })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="commentinput">
                    <div className="comment-picture">
                        <img src={`https://fsmedia.imgix.net/32/97/14/c9/033f/4ac9/a023/bbdc07fe72a0/avengers-endgame-iron-man-death-scene.png?rect=0%2C0%2C972%2C487&auto=format%2Ccompress&w=650`} alt="" />
                        {/* FROM 1000logos.net/iron-man-logo. All rights go to Marvel Studios. */}
                    </div>
                <textarea onChange={this.handleChange} type="text" placeholder={`Write a comment...`} value={this.state.body}></textarea>

                <span className="commentinput-buttons-container">
                    <i className="far fa-smile"></i>
                    <i className="fas fa-camera"></i>
                    <i className="far fa-file-video"></i>
                    <i className="far fa-sticky-note"></i>
                </span>
                {/* 
                <div className="postform-submit-container">
                    {submit}
                </div> */}
            </form>
        )
    }
}

export default CommentForm