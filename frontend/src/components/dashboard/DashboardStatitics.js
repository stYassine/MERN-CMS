import React from 'react';
import InfoCard from './common/InfoCard';

const DashboardStatitics =() => {
    return(
        <div className="row">
            <InfoCard 
                header_color="card-header-warning"
                header_icon="content_copy"
                title="Used Space"
                value="49/50"
                footer_icon="warning"
                footer_text="Get More Space..."
            />

            <InfoCard 
                header_color="card-header-success"
                header_icon="store"
                title="Revenue"
                value="$34,245"
                footer_icon="date_range"
                footer_text="Last 24 Hours"
            />

            <InfoCard 
                header_color="card-header-danger"
                header_icon="info_outline"
                title="Fixed Issues"
                value="75"
                footer_icon="local_offer"
                footer_text="Tracked from Github"
            />

            <InfoCard 
                header_color="card-header-info"
                header_icon="store"
                title="Followers"
                value="+245"
                footer_icon="update"
                footer_text="Just Updated"
            />
        </div>
    )
}


export default DashboardStatitics;