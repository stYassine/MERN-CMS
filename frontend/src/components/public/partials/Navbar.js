import React from 'react';

const Navbar =() => {
    return(
        <header className="header_s">
            {/* SidePanel */}
            <div id="slidepanel-1" className="slidepanel">
                {/* Top Header */}
                <div className="container-fluid no-right-padding no-left-padding top-header">
                    {/* Container */}
                    <div className="container">						
                        <div className="top-left">
                            <ul>
                                <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" title="Google Plus"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#" title="Dribbble"><i className="fa fa-dribbble"></i></a></li>
                                <li><a href="#" title="Vimeo"><i className="fa fa-vimeo"></i></a></li>
                                <li><a href="#" title="Instagram"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <div className="logo-block">
                            <a href="index.html" title="Logo"><img src="assets/images/logo.png" alt="Logo"/></a>
                        </div>
                        <div className="top-right">
                            <span><a href="javascript:void(0);" id="search" title="Search"><i className="pe-7s-search"></i></a></span>
                            <span><a href="#" title="Search"><i className="pe-7s-user"></i></a></span>
                            <div className="cart-dropdown">
                                <ul>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false"><i className="pe-7s-cart"></i><span>0</span></a>										
                                        <ul className="dropdown-menu">
                                            <li className="mini-cart-item">
                                                <a href="#"><img src="assets/images/mini-cart-1.jpg" alt="Cart" /></a>
                                                <div className="mini-cart">
                                                    <a href="#"> Mountain Axe</a>
                                                    <span>Quantity: 1 <span>$25.00</span></span>
                                                </div>
                                                <span><a href="#"><i className="fa fa-times"></i></a></span>
                                            </li>
                                            <li className="mini-cart-item">
                                                <a href="#"><img src="assets/images/mini-cart-2.jpg" alt="Cart" /></a>
                                                <div className="mini-cart">
                                                    <a href="#">Backpack 40L</a>
                                                    <span>Quantity: 1 <span>$130.00</span></span>
                                                </div>
                                                <span><a href="#"><i className="fa fa-times"></i></a></span>
                                            </li>
                                            <li className="mini-subtotal">SUBTOTAL <span>$155.00</span></li>
                                            <li className="cart-button">
                                                <a href="#" title="View shopping cart">view shopping cart</a>
                                                <a href="#" title="Proceed to checkout">proceed to checkout</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>						
                        {/* Search Box */}
                        <div className="search-box search-block1">
                            <span><i className="icon_close"></i></span>
                            <form><input type="text" className="form-control" placeholder="Enter a keyword and press enter..." /></form>
                        </div> {/* Search Box /- */}
                    </div>{/* Container /- */}
                </div>{/* Top Header /- */}				
            </div>{/* SidePanel /- */}
            
            {/* Menu Block */}
            <div className="menu-block">
                {/* Container */}
                <div className="container">
                    {/* Ownavigation */}
                    <nav className="navbar ownavigation">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html"><img src="assets/images/logo.png" alt="Logo"/></a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className="dropdown active">
                                    <a href="index.html" title="Home" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                                    <i className="ddl-switch fa fa-angle-down"></i>
                                    <ul className="dropdown-menu">
                                        <li><a href="index2.html" title="Home 2">Home 2</a></li>
                                        <li><a href="index3.html" title="Home 3">Home 3</a></li>
                                        <li><a href="index4.html" title="Home 4">Home 4</a></li>
                                        <li><a href="index5.html" title="Home 5">Home 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#" title="Posts">Posts</a></li>
                                <li><a href="#" title="Courses">Courses</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" title="Pages">Pages</a>
                                    <i className="ddl-switch fa fa-angle-down"></i>
                                    <ul className="dropdown-menu">
                                        <li><a href="header-page.html" title="Header Page">Header Page</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" title="Blog" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                                    <i className="ddl-switch fa fa-angle-down"></i>
                                    <ul className="dropdown-menu">
                                        <li><a href="post-fullwidth.html" title="Post Fullwidth">Post Fullwidth</a></li>
                                        <li><a href="post-sidebar.html" title="Post Sidebar">Post Sidebar</a></li>
                                        <li><a href="post-courses.html" title="Post Courses">Post Courses</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="shop.html" title="Shop" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                                    <i className="ddl-switch fa fa-angle-down"></i>
                                    <ul className="dropdown-menu">
                                        <li><a href="shop-detail.html" title="Shop Detail">Shop Detail</a></li>
                                        <li><a href="cart.html" title="Cart">Cart</a></li>
                                        <li><a href="checkout.html" title="Checkout">Checkout</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" title="About us" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">About us</a>
                                    <i className="ddl-switch fa fa-angle-down"></i>
                                    <ul className="dropdown-menu">
                                        <li><a href="about-us.html" title="About Us">About Us</a></li>
                                        <li><a href="about-us-sidebar.html" title="About Us Sidebar">About Us Sidebar</a></li>
                                        <li><a href="about-me.html" title="About Me Fullwidth">About Me Fullwidth</a></li>
                                        <li><a href="about-me-sidebar.html" title="About Me Sidebar">About Me Sidebar</a></li>
                                    </ul>
                                </li>
                                <li><a href="#" title="Contact Us">Contact</a></li>
                            </ul>
                        </div>
                        <div id="loginpanel-1" className="desktop-hide">
                            <div className="right toggle" id="toggle-1">
                                <a id="slideit-1" className="slideit" href="#slidepanel"><i className="fo-icons fa fa-inbox"></i></a>
                                <a id="closeit-1" className="closeit" href="#slidepanel"><i className="fo-icons fa fa-close"></i></a>
                            </div>
                        </div>
                    </nav>{/* Ownavigation /- */}
                </div>{/* Container /- */}
            </div>{/* Menu Block /- */}
            {/* Header Section */}
        </header> 
    )
}

export default Navbar;