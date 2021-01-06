import React from 'react';

class Employee extends React.Component {
    render()

{
    return(
        <React.Fragment>
        <div className="card">
            <img src={this.props.profile} className="img-thumbnail" alt=""/>
            <div className="card-body">
        <h1>{this.props.name}</h1>
            </div>
        </div>
        </React.Fragment>
);
}

}

export default Employee;