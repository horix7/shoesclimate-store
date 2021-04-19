import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';

export default class ProductCard extends Component {

 render () {

    return (
      <a   href={`/product/${this.props.product.id}`}>

        <div className="product-holder">
        <div className='product_cardroot'>
          <img
            className='product_cardmedia'
            src={this.props.product.imageUrl}
          />
          <CardContent>
            <p className="product-name">
              {this.props.product.title}
            </p>
          </CardContent>
          <div style={{textAlign: "center"}}>
          {(this.props.product.price * Number(JSON.parse(localStorage.currency).rate)).toFixed(2)} {JSON.parse(localStorage.currency).name}


          </div>
        </div>
        </div>
      </a>


      );
 }
}
