import React, { Component } from 'react';

class Sidebar extends Component{
    render(){
        return(
            <aside className="widget widget_post">
                <div className="post-tabs">
                    {/*  Nav tabs */}
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active"><a href="#popular-post" aria-controls="popular-post" role="tab" data-toggle="tab">Popular Post</a></li>
                        <li role="presentation"><a href="#recent-post" aria-controls="recent-post" role="tab" data-toggle="tab">recent post</a></li>
                    </ul>
                    {/*  Tab panes */}
                    <div className="tab-content">
                        {/* Popular Posts */}
                        <div role="tabpanel" className="tab-pane active" id="popular-post">
                            <div className="post-box">
                                <a href="#"><img src="assets/images/wid-pop-post-1.jpg" alt="Popular Post" /></a>
                                <div className="post-content">
                                    <h3><a href="#">Wild River Big Adventure</a></h3>
                                    <span><a href="#">AUGUST 19, 2016</a></span>
                                </div>
                            </div>
                            <div className="post-box">
                                <a href="#"><img src="assets/images/wid-pop-post-2.jpg" alt="Popular Post" /></a>
                                <div className="post-content">
                                    <h3><a href="#">Beautiful Lake in Alaska</a></h3>
                                    <span><a href="#">AUGUST 17, 2016</a></span>
                                </div>
                            </div>
                            <div className="post-box">
                                <a href="#"><img src="assets/images/wid-pop-post-3.jpg" alt="Popular Post" /></a>
                                <div className="post-content">
                                    <h3><a href="#">Best Mountaineering</a></h3>
                                    <span><a href="#">AUGUST 12, 2016</a></span>
                                </div>
                            </div>
                            <div className="post-box">
                                <a href="#"><img src="assets/images/wid-pop-post-4.jpg" alt="Popular Post" /></a>
                                <div className="post-content">
                                    <h3><a href="#">Unique Camping</a></h3>
                                    <span><a href="#">AUGUST 8, 2016</a></span>
                                </div>
                            </div>
                        </div>
                        {/* END Popular Posts */}

                        {/* Recent Posts */}
                        <div role="tabpanel" className="tab-pane" id="recent-post">
                            <div className="post-box">
                                <a href="#"><img src="assets/images/wid-pop-post-2.jpg" alt="Popular Post" /></a>
                                <div className="post-content">
                                    <h3><a href="#">Beautiful Lake in Alaska</a></h3>
                                    <span><a href="#">AUGUST 17, 2016</a></span>
                                </div>
                            </div>
                            <div className="post-box">
                                <a href="#"><img src="assets/images/wid-pop-post-3.jpg" alt="Popular Post" /></a>
                                <div className="post-content">
                                    <h3><a href="#">Best Mountaineering</a></h3>
                                    <span><a href="#">AUGUST 12, 2016</a></span>
                                </div>
                            </div>
                            <div className="post-box">
                                <a href="#"><img src="assets/images/wid-pop-post-1.jpg" alt="Popular Post" /></a>
                                <div className="post-content">
                                    <h3><a href="#">Wild River Big Adventure</a></h3>
                                    <span><a href="#">AUGUST 19, 2016</a></span>
                                </div>
                            </div>
                            <div className="post-box">
                                <a href="#"><img src="assets/images/wid-pop-post-4.jpg" alt="Popular Post" /></a>
                                <div className="post-content">
                                    <h3><a href="#">Unique Camping</a></h3>
                                    <span><a href="#">AUGUST 8, 2016</a></span>
                                </div>
                            </div>
                        </div>
                        {/* END Recent Posts */}

                    </div>
                </div>
            </aside>
        )
    }   
}

export default Sidebar;