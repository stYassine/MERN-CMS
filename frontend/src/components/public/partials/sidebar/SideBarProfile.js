import React, { Component } from 'react';

class Sidebar extends Component{
    render(){
        return(
            <aside className="widget widget_about">
                <div className="img-box">
                    <img src="assets/images/wid-about-img.jpg" alt="About" />
                </div>
                <h3>John Woodsman</h3>
                <p>On the other hand, we denounce with righteous indignation and dislike men who are  beguiled and demoralized charms.</p>
                <ul>
                    <li><a href="#" title="Instagram"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#" title="Youtube"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="#" title="Google Plus"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                </ul>
            </aside>
        )
    }   
}

export default Sidebar;