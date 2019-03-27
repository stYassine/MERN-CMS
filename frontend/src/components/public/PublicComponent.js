import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


/// Parials
import Footer from './partials/Footer';
import Navbar from './partials/Navbar';
import SideBar from './partials/sidebar/SideBar';

/// Pages
import Posts from './pages/Posts';
import SinglePostPage from './pages/SinglePostPage';
import AboutMe from './pages/AboutMe';


class PublicComponent extends Component{
    render(){
        return(
            <Router>
            <div>
                <Navbar />

                {/* <!-- Content Block --> */}
			<div className="container-fluid no-left-padding no-right-padding content-block blog-parallel">
				{/* <!-- Container --> */}
				<div className="container">
					{/* <!-- Row --> */}
					<div className="row">
                        {/* <!-- Content Area --> */}
                        
						<div className="col-md-8 col-xs-6 content-area">
                            <Switch>
                                <Route exact path="/" component={Posts} />
                                <Route exact path="/single" component={SinglePostPage} />
                                <Route exact path="/about" component={AboutMe} />
                            </Switch>
                        </div>
                
                        <div className="col-md-4 col-xs-6 widget-area">
                            <SideBar />
                        </div>

                    </div>
                </div>
            </div>

                <Footer />
            </div>
            </Router>
        )
    }
}

export default PublicComponent;