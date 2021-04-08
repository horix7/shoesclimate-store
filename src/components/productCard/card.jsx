import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class ProductCard extends Component {

 render () {

    return (
        <div style={{margin: "0px", width: "100%", padding: "10px"}}>
        <div className='product_cardroot'>
          <img
            className='product_cardmedia'
            src={this.props.product.imageUrl}
          />
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="h1">
              {this.props.product.title}
            </Typography>
          </CardContent>
          <div style={{textAlign: "center"}}>
          {this.props.product.price} RWF 

          </div>
        </div>
        </div>

      );
 }
}
