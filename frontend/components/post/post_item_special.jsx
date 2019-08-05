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



        return (
            <section className="postitem">
                <section className="postitem-top">

                    <div className="post-content-picture post-picture">
                        <Link to={`/user/${user.id}`}><img src={`https://fsmedia.imgix.net/32/97/14/c9/033f/4ac9/a023/bbdc07fe72a0/avengers-endgame-iron-man-death-scene.png?rect=0%2C0%2C972%2C487&auto=format%2Ccompress&w=650`} alt="" /></Link>
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

