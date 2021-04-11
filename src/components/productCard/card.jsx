import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { useRouteMatch } from 'react-router-dom'

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
          {this.props.product.price} RWF 

          </div>
        </div>
        </div>
      </a>


      );
 }
}
