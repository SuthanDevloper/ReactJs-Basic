import React from 'react';
import Employee from "./Employee";
import card1 from "../assets/img/card_1.jpg"

class School extends React.Component {
        render() {
                let Name=['hello','arun','param'];

                return(
                    <React.Fragment>
                            <div className="container">
                                    <div className="row">
                                            <div className="col-md-2">
                                <Employee name={Name[0]} profile={card1}/>
                                            </div>
                                    </div>
                            </div>
                    </React.Fragment>
                );
        }

}

export default School;