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
            src="https://preview.free3d.com/img/2019/11/2202389252124182147/gv3zplpi-900.jpg"
          />
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="h1">
              Air Jordan 5 Retro 'Stealth 2.0
            </Typography>
          </CardContent>
          <div style={{textAlign: "center"}}>
          147,300 RF
          </div>
        </div>
        </div>

      );
 }
}
