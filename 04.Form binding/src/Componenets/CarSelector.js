import React from 'react';


class CarSelector extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            carname: 'suthan'
        }
    }

    updateSelector=(event)=>{
            this.setState({
                carname: event.target.value
            })
    }


    render(){

        return(
            <React.Fragment>

                <div className="container">
                    <div className="row">

                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header bg bg-primary text-white">
                                    <h1>Select the car </h1>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <form className="form-group">
                                                <div>
                                                <select className="form-control"
                                                        onChange={this.updateSelector}
                                                >
                                                    <option value="">Select car</option>
                                                    <option value="BMW">BMW</option>
                                                    <option value="AUDI">AUDI</option>
                                                    <option value="BENZ">BENZ</option>

                                                </select>

                                                </div>
                                            </form>

                                        </div>
                                        <h2>{this.state.carname}</h2>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }





}

export default CarSelector