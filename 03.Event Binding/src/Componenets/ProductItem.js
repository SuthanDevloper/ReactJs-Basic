import React from 'react';


class ProductItem extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            product:{
                id:"AOO1",
                image:"data:image/jpeg;base64,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",
                name:"Apple 11",
                price:1000,
                qty:2


            }
        }
    }

    reduceQty =()=>{
            this.setState(
                {
                    product:{
                        ...this.state.product,
                        qty:(this.state.product.qty-1 )>0 ?this.state.product.qty-1 :1

                        // taking one property ,, error so other property will disappear // so add one code above
                    }
                }

            )

    };

    increaseQty=()=>{

        this.setState(
            {
                product:{
                    ...this.state.product,
                    qty:this.state.product.qty+1
                }
            }

        )

    };

    render() {

        let {id,image,name,price,qty}=this.state.product;
        return (
            <React.Fragment>
                    <div className="container">

                        <div className="row">
                            <div className="col">

                                <p></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">

                              <table className="table table-hover text-center table-striped table-light">
                                  <thead className="bg-dark text-white">
                                        <th>id</th>
                                        <th>image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                  </thead>
                                    <tbody>
                                    <tr>
                                        <td>{id}</td>
                                        <td>
                                            <img src={image} alt="" width="60" height="80"/>
                                        </td>
                                        <td>{name}</td>
                                        <td>{price}</td>
                                        <td>
                                            <i className="fa fa-minus-circle mx-1 m " onClick={this.reduceQty}></i>

                                            {qty}
                                        <i className="fa fa-plus-circle mx-1n" onClick={this.increaseQty}></i></td>
                                        <td>{price*qty}</td>

                                    </tr>
                                    </tbody>



                              </table>
                            </div>
                        </div>
                    </div>

            </React.Fragment>
        );
    }


}
export default ProductItem;