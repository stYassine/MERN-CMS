import React from 'react';

const Footer =() => {
    return(
        <div>
        {/* <!-- Footer Main --> */}
            <div className="container-fluid no-left-padding no-right-padding footer-main">
                <div className="instagram-block">
                    <h3>Follow Me <a href="#">@bushcraft</a></h3>
                    <div className="insta-image">
                        <div className="col-xs-2 no-left-padding no-right-padding">
                            <a href="#"><img src="assets/images/insta-1.jpg" alt="Instagram" /></a>
                        </div>
                        <div className="col-xs-2 no-left-padding no-right-padding">
                            <a href="#"><img src="assets/images/insta-2.jpg" alt="Instagram" /></a>
                        </div>
                        <div className="col-xs-2 no-left-padding no-right-padding">
                            <a href="#"><img src="assets/images/insta-3.jpg" alt="Instagram" /></a>
                        </div>
                        <div className="col-xs-2 no-left-padding no-right-padding">
                            <a href="#"><img src="assets/images/insta-4.jpg" alt="Instagram" /></a>
                        </div>
                        <div className="col-xs-2 no-left-padding no-right-padding">
                            <a href="#"><img src="assets/images/insta-5.jpg" alt="Instagram" /></a>
                        </div>
                        <div className="col-xs-2 no-left-padding no-right-padding">
                            <a href="#"><img src="assets/images/insta-1.jpg" alt="Instagram" /></a>
                        </div>
                    </div>
                </div>
                {/* <!-- Bottom Footer --> */}
                <div className="container-fluid no-left-padding no-right-padding bottom-footer">
                    {/* <!-- Container --> */}
                    <div className="container">
                        <div className="logo-block">
                            <a href="#"><img src="assets/images/logo.png" alt="Logo" /></a>
                        </div>
                        <div className="copyright">
                            <p>Copyright © 2017 Bushcraft</p>
                        </div>
                        <div className="ftr-social">
                            <ul>
                                <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" title="Google Plus"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#" title="Dribbble"><i className="fa fa-dribbble"></i></a></li>
                                <li><a href="#" title="Vimeo"><i className="fa fa-vimeo"></i></a></li>
                                <li><a href="#" title="Instagram"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Container /- --> */}
                </div>
                {/* <!-- Bottom Footer /- --> */}
            </div>{/* <!-- Footer Main /- --> */}
            
            
        </div>
    )
}

export default Footer;