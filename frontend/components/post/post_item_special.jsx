import React from 'react'
import { Link } from 'react-router-dom'


class PostItemSpecial extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { user = {} } = this.props;
        const content = Boolean(this.props.date) ? 
        <p className="post-content-body post-special-content">Joined AssembledFaces on {this.props.date}.</p> : 
            <p className="post-content-body post-special-content">Born on {this.props.user.birth_date}</p>

        const photo = user.photoUrl ? <img src={user.photoUrl} alt="" /> : null

        return (
            <section className="postitem">
                <section className="postitem-top">

                    <div className="post-content-picture post-picture">
                        <Link to={`/user/${user.id}`}>{photo}</Link>
                        {/* FROM 1000logos.net/iron-man-logo. All rights go to Marvel Studios. */}
                    </div>
                    <div className="post-content">
                        <p className="post-content-author"><Link to={`/user/${user.id}`} user={user} >{user.first_name} {user.last_name}</Link></p>
                        <p className="post-content-time"><i className="fa fa-clock"></i></p>
                    </div>

                </section>
                {content}

            </section>
        )
    }
}


export default PostItemSpecial;

