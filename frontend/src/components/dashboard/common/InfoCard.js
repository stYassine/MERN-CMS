import React from 'react';
import classnames from 'classnames';

const InfoCard =({
    header_color, header_icon, title, value,
    link, footer_icon, footer_text
}) => {
    return(
        <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats">
            <div 
                className={classnames('card-header  card-header-icon', 
                    header_color != "" ? header_color : ""
                )}
                >
            <div className="card-icon">
                <i className="material-icons">{header_icon}</i>
            </div>
            <p className="card-category">{title}</p>
                <h3 className="card-title">
                    {value}
                </h3>
            </div>
            <div className="card-footer">
            <div className="stats">
                <i className="material-icons text-danger">{footer_icon}</i>
                <a href="#pablo">{footer_text}</a>
            </div>
            </div>
        </div>
        </div>
    )
}

export default InfoCard;