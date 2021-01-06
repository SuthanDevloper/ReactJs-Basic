import React from "react";

class MessageCard extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            message:'Java'
        }
    }

    sayGoodEvening=()=>{
       // this.state.message="React Js"; // Not working
        this.setState({
            message:'React Js'
        });
};

    sayGoodMorning=(value,name)=>{
        this.setState({
            message:[value , name]
        });
    }

    render() {
        return (
           <React.Fragment>
                <div className="container">
                    <div className="row">

                        <div className="col">
                            <div className="card">
                                <div className="card-header btn-blue-grey">
                                        <h1>Wishes</h1>
                                </div>
                                    <div className="card-body">
                                        <h2>{this.state.message}</h2>
                                        <button onClick={this.sayGoodEvening} className="btn btn-success btn-sm">Good Evening</button>
                                        <button onClick={this.sayGoodMorning.bind(this,'Good Morning ','java')} className="btn btn-success btn-sm">Good Morning</button>
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>
           </React.Fragment>

        );
    }



}

export  default MessageCard;