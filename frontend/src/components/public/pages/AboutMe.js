import React, { Component } from 'react';

class AboutMe extends Component{
    render(){
        return(
            <div className="about-me-block">
                <img src="assets/images/about-me-full.jpg" alt="About" />
                <div className="about-content">
                    <h3>About Me</h3>
                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking.</p>
                    <blockquote>
                        <p><i>“ </i> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, aliquam quaerat voluptatem. Eque porro quisquam est, qui dolorem ipsum quia dolor sit amet?</p>
                    </blockquote>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how.</p>
                    <div className="about-share">
                        <h4>john woodsman</h4>
                        <ul>
                            <li><a href="#" title="Instagram"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#" title="Youtube"><i className="fa fa-youtube"></i></a></li>
                            <li><a href="#" title="Google Plus"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;