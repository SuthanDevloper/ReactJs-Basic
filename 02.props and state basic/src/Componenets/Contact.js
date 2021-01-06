import React from 'react';


class Contact extends React.Component {

    render() {
        return (

            <React.Fragment>
               <div className="container">
                   <div className="row">

                        <div className="col-md-6 bg-light">
                                    <div className="card">
                                            <div className="card-body">

                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15830.192266641548!2d80.63451!3d7.292147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb88e8734738d10e6!2sKandy%20Municipal%20Central%20Market!5e0!3m2!1sen!2slk!4v1603822657763!5m2!1sen!2slk"
                                                    width="500" height="390" frameBorder="1"
                                                    allowFullScreen="" aria-hidden="false" tabIndex="0"/>
                                            </div>
                                    </div>
                            </div>
                                <div className="col-md-6 " >
                                    <div className="card">
                                            <div className="card-header bg-dark text-white">
                                                <p className="h4">Contact Us</p>
                                            </div>
                                        <div className="card-body">

                                            <form>
                                            <div className="form-group" >
                                                <input  type="text" className="form-control" placeholder="Name"/>
                                            </div>
                                                <div className="form-group">
                                                    <input  type="text" className="form-control" placeholder="Mobile"/>
                                                </div>
                                                <div className="form-group">
                                                    <input  type="text" className="form-control" placeholder="Email"/>
                                                </div>
                                                <div className="form-group">
                                                    <input  type="text" className="form-control" placeholder="Address"/>
                                                </div>
                                                <div className="form-group">
                                                    <input  type="text" className="form-control" placeholder="Whatsup"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="button" className="btn btn bg-info" value="submit"/>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>

                   </div>
               </div>
            </React.Fragment>

        );
    }
}

export  default Contact;