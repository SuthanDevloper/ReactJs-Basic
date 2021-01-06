import React from 'react';

class SmsApp extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            maxCount:100,
            charCount:100
        }

    }

    updatecharCount=(event)=>{
            this.setState({
                charCount:(this.state.maxCount- event.target.value.length)
            })
    }

    render() {

        return(
            <React.Fragment>

                <div className="container mt-3">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="card">
                                    <div className="card-header bg bg-warning text-white">
                                    <h1>SMS APP</h1>
                                    </div>
                                     <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                            <textarea
                                                maxLength={this.state.maxCount}
                                                rows="6"  cols="6" className="form-control" onChange={this.updatecharCount}>

                                            </textarea>
                                            </div>

                                        </form>
                                    </div>
                                    <div className="card-footer">
                                            <span className="font-weight-bold">{this.state.charCount}</span>
                                     </div>

                                </div>
                            </div>

                        </div>
                    </div>

            </React.Fragment>
        );
    }

}

export default SmsApp;