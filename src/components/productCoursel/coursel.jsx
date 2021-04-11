// src/reusable/image-gallery.component.js
import React from "react";
import { Carousel } from 'react-responsive-carousel';

export default class ImageGallaryComponent extends React.Component {

    onChangeEvent = () => {
        console.log('onChange Event Triggered');
    }

    onClickItemEvent = () => {
        console.log('onClickItem Event Triggered');
    }

    onClickThumbEvent = () => {
        console.log('onClickThumb Event Triggered');
    }

    onSwipeStartEvent = () => {
        console.log('onSwipeStart Event Triggered');
    }

    onSwipeEndEvent = () => {
        console.log('onSwipeEnd Event Triggered');
    }

    onSwipeMoveEvent = () => {
        console.log('onSwipeMove Event Triggered');
    }

    render() {
        return (
            <div className="product-slider-images">
                <Carousel autoPlay interval="5000" infiniteLoop transitionTime="1000"

                    onChange={this.onChangeEvent}
                    onClickItem={this.onClickItemEvent}
                    onClickThumb={this.onClickThumbEvent}
                    onSwipeStart={this.onSwipeStartEvent}
                    onSwipeEnd={this.onSwipeEndEvent}
                    onSwipeMove={this.onSwipeMoveEvent}

                >
                   
                  {this.props.images.map(elem => (
                    <div key={elem}>
                        <img className="product-slider-image" src={elem} />
                    </div>
                  ))}
                </Carousel>
            </div>
        )
    };
}

