import React from 'react'
import {Link} from 'react-router-dom'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.assignSelect = this.assignSelect.bind(this);
        this.focusForm = this.focusForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            body: "",
            user_id: parseInt(this.props.match.params.userId),
            author_id: this.props.currentUser.id
        }
    }

    componentDidMount() {
        this.setState({user_id: parseInt(this.props.match.params.userId)})
    }

    assignSelect(e) {
        e.preventDefault();
        Object.values(this.refs).forEach( ref => {
            ref.classList.remove("postform-selected");
        })
        e.currentTarget.classList.add("postform-selected")
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({body: e.target.value})
        // this.refs.btn.classList.add("disabled-btn")
    }

    focusForm(e) {
        // some logic to gray out everything else except for this form. maybe a class that turns this into a position relative,
        // and then z-indexes above everything. and then the input font increases, and the post button appears, the form lengthens,
        // there's an X button, and probaby there's an empty div underneath listening for a click, which will take focus off of the form.
        e.preventDefault();
        this.refs.postformText.classList.add("focused");
        this.refs.x.classList.add("focused");
        this.refs.fakemodal.classList.add("display");
    }

    clearFocus(e) {
        e.preventDefault();
        this.refs.postformText.classList.remove("focused");
        this.refs.x.classList.remove("focused");
        this.refs.fakemodal.classList.remove("display");
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.createPost(this.state);
        this.setState({body: ""})
    }

    render() {
        let submit;
        // eventually this will account for is there's a picture attached
        if (this.state.body === "") {
            submit = <input className="postform-submit disabled-btn" disabled type="submit" value="Post" />
        } else {
            submit = <input className="postform-submit" type="submit" value="Post" />
        }
        return (
            <>


            <section className="postform-container">
                <section ref="postformText" className="postform">
                    <ul className="postform-headers">
                        <li ref="header1" onClick={this.assignSelect} className="postform-selected"><span><i className="fa fa-pencil-alt"></i>Create Post</span></li>
                        <li ref="header2" onClick={this.assignSelect} ><span><i className="fa fa-camera"></i>Photo/Video</span></li>
                        <li ref="header3" onClick={this.assignSelect} ><span><i className="fa fa-video"></i>Live Video</span></li>
                        <li ref="header4" onClick={this.assignSelect} ><span id="postform-headers-last"><i className="fa fa-flag"></i>Life Event</span></li>
                    </ul>
                
                        
                    <form onSubmit={this.handleSubmit.bind(this)} className="postinput">
                        <section className="postinput-top">
                            <div className="post-picture">
                                    <Link to={`/user/${this.props.currentUser.id}`}><img src={`https://fsmedia.imgix.net/32/97/14/c9/033f/4ac9/a023/bbdc07fe72a0/avengers-endgame-iron-man-death-scene.png?rect=0%2C0%2C972%2C487&auto=format%2Ccompress&w=650`} alt="" /></Link>
                                {/* FROM 1000logos.net/iron-man-logo. All rights go to Marvel Studios. */}
                            </div>
                            <textarea onChange={this.handleChange} onFocus={this.focusForm} type="text" placeholder={`What's on your mind?`} value={this.state.body}></textarea>
                        </section>

                        <section className="postinput-buttons-container">
                            <button className="postinput-buttons"><i className="far fa-image"></i>Photo/Video</button>{/* some button to upload photos */}
                            <button className="postinput-buttons"><i className="fas fa-user"></i>Tag Friends</button>
                            <button className="postinput-buttons"><i className="far fa-smile"></i>Feeling/Activity</button>
                        </section>

                        <div className="postform-submit-container">
                            {submit}
                        </div>
                    </form>
                </section>
                <p id="x-btn" ref="x" onClick={this.clearFocus.bind(this)}>x</p>
            </section>
                <div onClick={this.clearFocus.bind(this)} ref="fakemodal"></div>
            </>
        )
    }
}

export default PostForm