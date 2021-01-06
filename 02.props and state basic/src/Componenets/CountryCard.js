import React from 'react';
import card1 from "../assets/img/card_1.jpg";

class CountryCard extends React.Component {
    render() {
        console.log(this.props);
        return(
            <React.Fragment>
                            <div className="card">
                                <img src={this.props.cardImg} className="img-thumbnail" alt=""/>
                                <div className="card-body">
                                    <h1>{this.props.CountryName}</h1>
                                    <button className="btn btn-dark btn-sm">Buy This</button>
                                </div>
                            </div>
            </React.Fragment>

        );
    }
}

export default CountryCard;