import React from 'react'
import { Link } from 'react-router-dom'


class PostItemSpecial extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { user = {}, date } = this.props;
        
        let content;

        if (Boolean(date)) {
            content = <p className="post-content-body post-special-content">Joined AssembledFaces on {date}.</p>
        } else if (user.birthDate) {
            const fullDate = user.birthDate.split("-").map(el => parseInt(el))
            const year = fullDate[0]
            const month = ["January", "February", "March", "Aprl", "May", "June", "July", "August", "September", "October", "November", "December"][fullDate[1]];
            const date = fullDate[2];
            const birthDate = month + " " + date.toString() + ", " + year.toString();
            content = <p className="post-content-body post-special-content">Born on {birthDate}.</p>
        }

        const photo = user.photoUrl ? <img src={user.photoUrl} alt="" /> : null

        return (
            <section className="postitem">
                <section className="postitem-top">

                    <div className="post-content-picture post-picture">
                        <Link to={`/user/${user.id}`}>{photo}</Link>
                        {/* FROM 1000logos.net/iron-man-logo. All rights go to Marvel Studios. */}
                    </div>
                    <div className="post-content">
                        <p className="post-content-author"><Link to={`/user/${user.id}`} user={user} >{user.firstName} {user.lastName}</Link></p>
                        <p className="post-content-time"><i className="fa fa-clock"></i></p>
                    </div>

                </section>
                {content}

            </section>
        )
    }
}


export default PostItemSpecial;

