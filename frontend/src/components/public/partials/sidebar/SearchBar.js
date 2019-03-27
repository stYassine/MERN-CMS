import React, { Component } from 'react';

class Sidebar extends Component{
    render(){
        return(
            <aside className="widget widget_search">
                <form method="get" className="searchform" action="#">
                    <div className="input-group">
                        <input placeholder="Search..." className="form-control" required="" type="text"/>
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
                        </span>
                    </div>
                </form>
            </aside>
        )
    }   
}

export default Sidebar;