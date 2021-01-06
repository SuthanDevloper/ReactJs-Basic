import React from 'react';

// Take for two way binging in form
class Welcome extends React.Component{

    //State
    constructor(props) {
        super(props);

        this.state={
            username:''
        }

    }

    // geting event from input event
    //and update to state
    updateInput =(event)=> {
        //alert('typing alert')

        this.setState({
           username: event.target.value
            }

        );
        //console.log(event.target.value);
    }

    //templete
    render() {
        return(

            <React.Fragment>

                    <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header bg-success text-white-50">
                                            <h3>Two way binding</h3>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="form-group">
                                                <input className="form-control"

                                                    onChange={this.updateInput}

                                                    type="text" placeholder="Type User Name"/>
                                                </div>
                                            </form>
                                            <h3>{this.state.username}</h3>
                                        </div>
                                    </div>



                                </div>
                            </div>


                    </div>
                {/**/}
            </React.Fragment>
        );
    }

}

export  default Welcome;