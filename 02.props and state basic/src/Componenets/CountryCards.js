import React from 'react';

import card1 from '../assets/img/Rathi 400g.jpg';
import card2 from '../assets/img/card_2.jpg';
import card3 from '../assets/img/card_3.jpg';
import card4 from '../assets/img/card_4.jpg';
import CountryCard from "./CountryCard";

class CountryCards extends React.Component{

    render(){

        let country=['Ratthi 400g','CHINA','FRANCE','INDIA'];

        return(

            <React.Fragment>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-3">
                                <CountryCard cardImg={card1} CountryName={country[0]}/>
                            </div>
                            <div className="col-md-3">
                               <CountryCard cardImg={card2} CountryName={country[1]}/>
                            </div>
                            <div className="col-md-3">
                                <CountryCard cardImg={card3} CountryName={country[2]}/>
                            </div>
                            <div className="col-md-3">
                                <CountryCard cardImg={card4}CountryName={country[3]}/>
                            </div>
                        </div>
                    </div>

            </React.Fragment>
        );

    }


}

export  default CountryCards;