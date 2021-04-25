import React, {Component , Fragment } from 'react'
import Slider from "react-slick";
import ProductBox from 'components/productCard/card'
import { getProductData } from "../../services/productService";
import GridSkeleton from "../../views/Components/skeleton/gridSkeleton"

export default class ProductCoursel extends Component {

  state = {
    products: []
  }
  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const products = await getProductData()
    this.setState({products: products.data.reverse()})


  }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4 ,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  dots: false,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  dots: false,
                  slidesToScroll: 1
                }}
            ]
          };

        return (
            <Fragment>  
        <div className="slider">
        <h2> </h2>
       {this.state.products.length >= 1 ?  <Slider {...settings}>
          {this.state.products.map(elem => (
            <div key={elem.id}>
            <ProductBox product={elem} />
            </div>  
          ))}
        </Slider> :  <Slider {...settings}>  {[1,2,3,4,5,6,7,8,9,10,11,12].map(() => <GridSkeleton /> )} </Slider>}

      </div>
            </Fragment>
        )
    }
}