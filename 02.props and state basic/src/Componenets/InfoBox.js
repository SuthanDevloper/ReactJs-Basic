import React from 'react';


class InfoBox extends React.Component{

    render()  {

        return(
            <React.Fragment>

                <section className="p-3 bg-dark text-white mt-3" >

                    <div className="container">
                            <div className="row">
                                    <div className="col">

                                    <h4 className="display-4"> Frindly Service</h4>
                                    </div>
                            </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default  InfoBox;