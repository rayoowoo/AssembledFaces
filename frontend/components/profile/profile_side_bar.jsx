import React from 'react'

class ProfileSideBar extends React.Component {

    render() {
        return (
            <aside className="profile-sidebar">
                <section className="profile-sidebar-intro">
                    <section>
                        <span className="profile-sidebar-intro-globe">
                            <i className="fa fa-globe-americas"></i>
                        </span>
                        <span>Intro</span>

                       <div className="profile-sidebar-intro-bio"> 
                           <i className="fa fa-comment-alt"></i>
                            <p>Add a short bio to tell people more about yourself.</p>
                            <a onClick={e => alert("not yet implemented")}>Add Bio</a>
                        </div>
                    </section>

                    <ul className="profile-sidebar-intro-bio-content">
                        <li><a onClick={e => alert("not yet implemented")}><i className="fa fa-home"></i> <span>Current City</span></a></li>
                        <li><a onClick={e => alert("not yet implemented")}><i className="fa fa-briefcase"></i><span>Workplace</span></a></li>
                        <li><a onClick={e => alert("not yet implemented")}><i className="fa fa-graduation-cap"></i><span>School</span></a></li>
                        <li><a onClick={e => alert("not yet implemented")}><i className="fa fa-map-marker-alt"></i><span>Hometown</span></a></li>
                    </ul>

                </section>
                
                <section className="profile-sidebar-photos">
                    
                    <div className="profile-sidebar-header">
                        <div>
                            <span className="profile-sidebar-icon">
                                <i className="fas fa-image"></i>
                            </span> <a className="profile-sidebar-link">Photos</a>
                        </div>

                        <a className="profile-sidebar-add">Add Photo</a>
                       
                    </div>
                    

                    <section className="profile-sidebar-gallery">
                        <div className="replace">_</div>
                        <div className="replace">_</div>
                        <div className="replace">_</div>

                        <div className="replace">_</div>
                        <div className="replace">_</div>
                        <div className="replace">_</div>

                        <div className="replace">_</div>
                        <div className="replace">_</div>
                        <div className="replace">_</div>
                    </section>
   
                    
                    
                </section>

                <section className="profile-sidebar-friends">
                    <div className="profile-sidebar-header">
                        <div>
                            <span className="profile-sidebar-icon">
                                <i className="fas fa-user-friends"></i>
                            </span> <a className="profile-sidebar-link">Friends</a>
                        </div>

                        <a className="profile-sidebar-add">Find Friends</a>

                    </div>


                    <section className="profile-sidebar-gallery">
                        <div className="replace">_</div>
                        <div className="replace">_</div>
                        <div className="replace">_</div>

                        <div className="replace">_</div>
                        <div className="replace">_</div>
                        <div className="replace">_</div>

                        <div className="replace">_</div>
                        <div className="replace">_</div>
                        <div className="replace">_</div>
                    </section>
                </section>

                <footer>
                    <section ><a href="https://github.com/rayoowoo/AssembledFaces" target="_blank">GITHUB</a><a href="https://www.linkedin.com/in/ruiyu-wu-173604134/" target="_blank">LINKEDIN</a><a href="#" target="_blank">EMAIL</a></section>
                    <p >Made by Ruiyu Wu. Inspired by Facebook and Marvel Studios.</p>
                </footer>
                <div className="sticky-hold"></div>
            </aside>
        )
    }
}

export default ProfileSideBar;