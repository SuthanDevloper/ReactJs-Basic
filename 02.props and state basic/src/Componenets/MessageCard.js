import  React from "react";
import './MessageCard.css';

class MessageCard  extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
            let {name,age,desgination} =this.props;

        return (
           <React.Fragment>
                <div className="container">
                    <div className="row">
                             <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-body bg-info">
                                            <ul className="list-group">

                                                <li className="list-group-item">Name :{name} </li>
                                                <li className="list-group-item">Age: {age}</li>
                                                <li className="list-group-item">Desgination:{desgination} </li>
                                            </ul>
                                    </div>
                         </div>
                        </div>
                    </div>

                </div>

    </React.Fragment>
        );
    }
}

export default MessageCard;