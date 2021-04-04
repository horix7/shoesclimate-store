// src/reusable/image-gallery.component.js
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import ImgExample from "../../assets/img/bg4.png"

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
            <div>
                <Carousel autoPlay interval="5000" infiniteLoop transitionTime="1000"

                    onChange={this.onChangeEvent}
                    onClickItem={this.onClickItemEvent}
                    onClickThumb={this.onClickThumbEvent}
                    onSwipeStart={this.onSwipeStartEvent}
                    onSwipeEnd={this.onSwipeEndEvent}
                    onSwipeMove={this.onSwipeMoveEvent}

                >
                    <div>
                        <img src={ImgExample} />
                    </div>
                    <div>
                        <img src={ImgExample} />
                    </div>
                    <div>
                        <img src={ImgExample} />
                    </div>
                    <div>
                        <img src={ImgExample} />
                    </div> 
                    <div>
                        <img src={ImgExample} />
                    </div>
                </Carousel>
            </div>
        )
    };
}

