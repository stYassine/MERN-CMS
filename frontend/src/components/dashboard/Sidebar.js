import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Sidebar extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
      
                <div className="logo">
                    <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                    Creative Tim
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                    <li className="nav-item active  ">
                        <NavLink className="nav-link" to="/admin">
                            <i className="material-icons">dashboard</i>
                            <p>Dashboard</p>
                        </NavLink>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Users
                            <i className="material-icons">person</i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <NavLink className="dropdown-item" to="/admin/users">Users List</NavLink>
                            <NavLink className="dropdown-item" to="/admin/users/create">Create User</NavLink>
                        </div>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Posts
                            <i className="material-icons">library_books</i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <NavLink className="dropdown-item" to="/admin/posts">Posts List</NavLink>
                            <NavLink className="dropdown-item" to="/admin/posts/create">Create Post</NavLink>
                        </div>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Comments
                            <i className="material-icons">library_books</i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <NavLink className="dropdown-item" to="/admin/comments">Comments List</NavLink>
                            <NavLink className="dropdown-item" to="/admin/comments/create">Create Comment</NavLink>
                        </div>
                    </li>
                
                </ul>
            </div>
            </div>
        )
    }
}


export default Sidebar;