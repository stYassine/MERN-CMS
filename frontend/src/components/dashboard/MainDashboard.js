import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/// Css
import '../../assets/admin/css/material-dashboard.css';
import '../../assets/admin/css/material-dashboard.css.map';
import '../../assets/admin/css/material-dashboard.min.css';
import '../../assets/admin/demo/demo.css';

/// Partials
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

/// Common Components
import DataTable from './common/DataTable';

/// Main Content
import DashboardContent from './DashboardContent';

/// Statitics
import DashboardStatitics from './DashboardStatitics';

/// Posts
import PostsList from './posts/PostsList';
import CreatePost from './posts/CreatePost';
import UpdatePost from './posts/UpdatePost';

/// Users
import UsersList from './users/UsersList';
import CreateUser from './users/CreateUser';
import UpdateUser from './users/UpdateUser';

/// Comments
import CommentsList from './comments/CommentsList';
import CreateComment from './comments/CreateComment';
import UpdateComment from './comments/UpdateComment';


class MainDashboard extends Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <div className="wrapper ">

            <Sidebar />

            <div className="main-panel">

            {/* <!-- Navbar --> */}
            <Navbar />
            {/* <!-- End Navbar --> */}

            <div className="content">
                <div className="container-fluid">

                {/* Site Statitics */}
                <Route path="/admin" exact component={DashboardStatitics} />

                <div className="row">
                    
                    <Switch>
                    <Route exact path="/admin/users" component={UsersList} />
                    <Route exact path="/admin/users/create" component={CreateUser} />
                    <Route exact path="/admin/users/update/:id" component={UpdateUser} />

                    <Route exact path="/admin/posts" component={PostsList} />
                    <Route exact path="/admin/posts/create" component={CreatePost} />
                    <Route exact path="/admin/posts/update" component={UpdatePost} />
                    
                    <Route exact path="/admin/comments" component={CommentsList} />
                    <Route exact path="/admin/comments/create" component={CreateComment} />
                    <Route exact path="/admin/comments/update" component={UpdateComment} />
                    </Switch>
                    
                </div>

                </div>
            </div>
                <Footer />
            </div>
        </div>
        )
    }

}

export default MainDashboard;