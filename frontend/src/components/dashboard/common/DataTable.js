import React from 'react';

const DataTable =({
    title
}) => {
    return(
        <div className="col-lg-12 col-md-12">

        <div className="card">
            <div className="card-header card-header-warning">
            <h4 className="card-title">{title}</h4>
            </div>
            <div className="card-body table-responsive">
            <table className="table table-hover">
                <thead className="text-warning">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
            </div>
        </div>
        </div>
    )
}


export default DataTable;