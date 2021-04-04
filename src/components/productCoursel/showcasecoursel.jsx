import React, {Component , Fragment } from 'react'
import Slider from "react-slick";
import ProductBox from 'components/productCard/card'


export default class ProductCoursel extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4 ,
            slidesToScroll: 1,
            autoplay: this.props.play,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
          };

        return (
            <Fragment>  
        <div style={{width:"98%", paddingLeft: "1%"}}>
        <h2> </h2>
        <Slider {...settings}>
          <div>
            <ProductBox />
          </div>
          <div>
            <ProductBox />
          </div>
          <div>
            <ProductBox />
          </div>
          <div>
            <ProductBox />
          </div>
          <div>
            <ProductBox />
          </div>
          <div>
            <ProductBox />
          </div>
        </Slider>
      </div>
            </Fragment>
        )
    }
}