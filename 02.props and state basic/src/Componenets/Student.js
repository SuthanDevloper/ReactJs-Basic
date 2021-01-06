import  React from 'react';

class Student extends  React.Component{

    constructor(props) {
        super(props);

        this.state={
            image:"data:image/jpeg;base64,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",
            name:"Suriya",
            age:"34",
            course:"ReactJs",
            address:"Kandy",
            college:"London city college"
        }
    }

    render() {
        return (
           <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-light">
                                    <p className="h4">Student Details</p>
                                </div>

                                <div className="card-body ">
                                    <div className="row">
                                        <div className="col-md-4" >
                                            <img src={this.state.image}/>
                                        </div>
                                        <div className="col-md-8 ">
                                            <div className="list-group ">
                                                <li className="list-group-item">
                                                    Name:{this.state.name}
                                                </li>
                                                <li className="list-group-item">
                                                    Age:{this.state.age}
                                                </li>
                                                <li className="list-group-item">
                                                    Course:{this.state.course}
                                                </li>
                                                <li className="list-group-item">
                                                    Address:{this.state.address}
                                                </li>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
           </React.Fragment>
        );
    }
}

export default Student;