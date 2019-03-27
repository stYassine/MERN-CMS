import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SideBarProfile from './SideBarProfile';
import SideBarPosts from './SideBarPosts';

class Sidebar extends Component{
    render(){
        return(
            <div>
                {/*  Widget : Search */}
                <SearchBar />
                {/*  Widget : Search /- */}
                
                {/*  Widget : About */}
                <SideBarProfile />
                {/*  Widget : About /- */}
                
                {/*  Widget : Post */}
                <SideBarPosts />
                {/*  Widget : Post /- */}
                
                {/*  Widget Area */}							
            </div>
        )
    }   
}

export default Sidebar;