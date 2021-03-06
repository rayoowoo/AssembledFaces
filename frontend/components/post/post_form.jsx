import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import FriendSearch from '../friends/friends_search'
import {fetchLastPost} from '../../utils/post_utils'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.assignSelect = this.assignSelect.bind(this);
        this.focusForm = this.focusForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clickTextarea = this.clickTextarea.bind(this);

        const { location, currentUser = {} } = this.props;
        let id;
        if ( location.pathname === "/") {id = currentUser.id }
        else { id = parseInt(this.props.match.params.userId)  }
        this.state = {
            body: "",
            userId: id,
            authorId: currentUser.id,
            photo: null,
            photoUrl: "",
            tags: []
        }
    }

    componentDidMount() {
        if (this.props.location.pathname === "/") {
            this.setState({userId: this.props.currentUser.id})
            return
        }
        this.setState({userId: parseInt(this.props.match.params.userId)})
    }

    assignSelect(e) {
        e.preventDefault();
        Object.values(this.refs).forEach( ref => {
            ref.classList.remove("postform-selected");
        })
        e.currentTarget.classList.add("postform-selected");
    }

    assignPhotoSelect(e) {
        this.assignSelect(e);
        this.upload.bind(this)(e);
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
        if (this.state.photoUrl) {
            this.refs.photoPreview.classList.add("photo-display")
        }
        if (this.state.tags.length > 0) {
            this.refs.tags.classList.add("tag-display");
        } else {
            this.refs.tags.classList.remove("tag-display");
        }
        
    }

    clearFocus(e) {
        e.preventDefault();
        this.refs.postformText.classList.remove("focused");
        this.refs.x.classList.remove("focused");
        this.refs.fakemodal.classList.remove("display");
        this.refs.photoPreview.classList.remove("photo-display");
        this.refs.tags.classList.remove("tag-display");
    }

    handleSubmit(e) {
        e.preventDefault();
        const that = this;
        const formData = new FormData();
        formData.append('post[body]', this.state.body)
        formData.append('post[user_id]', this.state.userId)
        formData.append('post[author_id]', this.state.authorId)
        formData.append('post[photo]', this.state.photo)
        this.props.createPost(this.state.userId, formData)
            .then(() => {
                return fetchLastPost()})
            .then( post => {
                that.state.tags.forEach(taggedUser => {
                    that.props.createTag({ user_id: taggedUser.id, post_id: post.id});
                })
                this.setState({ body: "", photo: null, photoUrl: "", tags: [] })
            })
    
        this.refs.photoPreview.classList.remove("photo-display");
        this.clearFocus(e);
    }

    upload(e) {
        e.stopPropagation();
        this.refs.photoUpload.click();
        this.focusForm(e);
        this.refs.photoPreview.classList.add("photo-display");
    }

    handleCancel(e) {
        if (this.refs.photoUpload.checkValidity() === false) {
            e.target.value.classList.remove("postform-selected")
            this.setState({ body: "", photo: null, photoUrl: "" })
        }
    }

    clickTextarea(e) {
        e.preventDefault();
        this.refs.postTextarea.focus();
        this.refs.postTextarea.click();
    }

    handleFile(e) {
        e.preventDefault();
        e.stopPropagation();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photo: file, photoUrl: fileReader.result})
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    tag(e) {
        e.preventDefault();
        // some code to open up the div that has the list of tagged friends. 
        if (this.refs.postformText.classList.contains("focused")) {
            this.refs.tags.classList.toggle("tag-display");
        } else {
            this.focusForm(e);
            this.refs.tags.classList.toggle("tag-display");
        }
        document.querySelector("#search").focus();
    }

    addTag(user) {
        const that = this;
        return e => {
            e.preventDefault();
            const newTags = Object.assign(that.state.tags);
            if (this.state.tags.includes(user) === false) {
                newTags.push(user);
                that.setState({tags: newTags})
                document.querySelector('#search').focus();
            }
        }
    }

    deleteTag(id) {
        const that = this;
        return e => {
            e.preventDefault();
            if (id) {
                const newTags = that.state.tags.filter(user => user.id !== id);
                that.setState({tags: newTags})
            } else {
                const newerTags = that.state.tags;
                newerTags.pop();
                that.setState({tags: newerTags})
            }
        }
    }

    render() {
        let submit;
        if (this.state.body === "" && this.state.photoUrl === "") {
            submit = <input className="postform-submit disabled-btn" disabled type="submit" value="Post" />
        } else {
            submit = <input className="postform-submit" type="submit" value="Post" />
        }
        const { currentUser = {} } = this.props;
        const photo = currentUser.photoUrl ? <img src={currentUser.photoUrl} alt="user-profile" /> : null

        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} alt="tagged-profile"/> : null

        const otherHeaders = this.props.location.pathname === "/" ? null : (
            <>
                <li ref="header2" onClick={this.assignPhotoSelect.bind(this)}><span><i className="fa fa-camera"></i>Photo/Video</span></li>
                <li ref="header3" onClick={e => {this.assignSelect(e); alert("sorry, not implemented yet.")}} ><span><i className="fa fa-video"></i>Live Video</span></li>
                <li ref="header4" onClick={e => {this.assignSelect(e); alert("sorry, not implemented yet.")}} ><span ><i className="fa fa-flag"></i>Life Event</span></li>
            </>
        )

        const placeholder = this.props.location.pathname === "/" ? `What's on your mind, ${currentUser.firstName}?` : "What's on your mind?";

        // displaying the tagged people
        let tagged;

        if (this.state.tags.length > 0) {
                tagged = <span className="post-tag">{this.state.tags.map((thisUser, i) => {
                    return <span key={`friend-${thisUser.id}`} className="post-form-tags">{thisUser.firstName} {thisUser.lastName} <span onClick={this.deleteTag(thisUser.id).bind(this)} className="post-form-tags-delete"><i className="fas fa-times"></i></span></span>;
            })
            }</span>
        }

        return (
            <>

            <section className="postform-container">
                <section ref="postformText" className="postform">
                    <ul className="postform-headers">
                        <li ref="header1" onClick={e => { this.assignSelect(e); this.clickTextarea(e) }} className="postform-selected"><span id="postform-headers-first" ><i className="fa fa-pencil-alt"></i>Create Post</span></li>
                        {otherHeaders}
                    </ul>
                
                        
                    <form onSubmit={this.handleSubmit.bind(this)} className="postinput">
                        <section className="postinput-top">
                            <div className="post-picture">
                                    <Link to={`/user/${currentUser.id}`}>{photo}</Link>
                                {/* FROM 1000logos.net/iron-man-logo. All rights go to Marvel Studios. */}
                            </div>
                            <textarea ref="postTextarea" onChange={this.handleChange} onFocus={this.focusForm} type="text" placeholder={placeholder} value={this.state.body}></textarea>
                        </section>

                        <section ref="tags" className="tags-index"><span className="tags-with">With</span>{tagged}<FriendSearch addTag={this.addTag.bind(this)} tags={this.state.tags.length} deleteTag={this.deleteTag.bind(this)}/></section>

                        <div ref="photoPreview" className="postform-img-preview">{preview}</div>

                        <section className="postinput-buttons-container">
                            <button onClick={this.upload.bind(this)} className="postinput-buttons"><i className="far fa-image"></i>Photo/Video</button>{/* some button to upload photos */}
                            <button onClick={this.tag.bind(this)} className="postinput-buttons"><i className="fas fa-user"></i>Tag Friends</button>
                            <button onClick={e => {e.preventDefault(); e.stopPropagation(); alert("sorry, not implemented yet")}} className="postinput-buttons"><i className="far fa-smile"></i>Feeling/Activity</button>
                        </section>


                        <input ref="photoUpload" onChange={this.handleFile.bind(this)} className="photo-upload" type="file"/> 

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

export default withRouter(PostForm);