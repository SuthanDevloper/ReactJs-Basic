import React from 'react';

class RegisterNew extends React.Component{



    constructor(props) {
        super(props);

        this.state= {
            user: {
                username: '',
                email: '',
                password: '',
                job: '',
                term: 'false'
            }
        }
    }

    //updatename
    updateUsername=(event)=>{

        this.setState(
            {

                username:event.target.value
            }
        )

    }

    updateRegister=(event)=>{
        this.setState({

            user:{
                ...this.state.user,
                [event.target.name]:event.target.value,
                term:event.target.checked
            }


            // console.log();
        })

    }
    //updateEmail

    updateEmail=(event)=>{
        this.setState(
            {
                email:event.target.value
            }
        )
    }

    updatePassword=(event)=>{
        this.setState(
            {
                password:event.target.value
            }
        )
    }


    updateJob=(event)=>{
        this.setState(
            {
                job:event.target.value
            }
        )
    }

    updateSubmit=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }


    render() {

        return(
            <React.Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="container mt-4 " >
                    <div className="row">

                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg bg-success text-white">
                                    <h1>Register Form</h1>
                                </div>
                                <div className="card-body bg badge-default">
                                    <form onSubmit={this.updateSubmit}>
                                        <div className="form-group">
                                            <input
                                                name="username"
                                                value={this.state.username}
                                                onChange={this.updateRegister}
                                                type="text" className="form-control" placeholder="Type ur Username"/>
                                        </div>


                                        <div className="form-group">
                                            <input
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.updateRegister}
                                                type="text" className="form-control" placeholder="Type ur Email"/>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.updateRegister}
                                                type="text" className="form-control" placeholder="Type Password"/>
                                        </div>
                                        <div className="form-group">
                                            <select
                                                name="job"
                                                value={this.state.job}
                                                onChange={this.updateRegister}
                                                className="form-control">
                                                <option value="Select degination"></option>
                                                <option value="Software Engineer">Software Engineer</option>
                                                <option value="Team Leader">Team Leader</option>
                                                <option value="Director">Director</option>

                                            </select>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="term"

                                                onChange={this.updateRegister}
                                                type="checkbox" className="form-check-input"  id="defaultCheck1"/>
                                            <label className="form-check-label" htmlFor="defaultCheck1"> Accept Term & Condition</label>
                                        </div>
                                        <div className="form-group text-center">
                                            <input

                                                type="submit"  className="btn btn-danger btn-sm" value="Register"/>
                                        </div>

                                    </form>
                                </div>
                                <div className="card-footer">
                                    <span className="font-weight-bold">{}</span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </React.Fragment>
        );
    }


}

export  default RegisterNew