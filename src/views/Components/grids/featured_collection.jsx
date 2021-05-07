import Collection from "../home/collection_display";
import React, { Component, Fragment } from "react"
import newNike from "../../../assets/img/newnike.jpeg"

export default class FeaturedGrids extends Component {

    render() {

        return (
            <Fragment>
                <div className="collection-grids">
                    <Collection collection={{
                        name: "Nike",
                        image: "https://es.kicksmaniac.com/zdjecia/2020/05/03/605/05/Q10654air_jordan_17814-mini.jpg"
                    }} />

                    <Collection collection={{
                        name: "ADIDAS",
                        image: "https://i.pinimg.com/originals/ca/26/71/ca267137829f6205b7080528f3619b4c.jpg"
                    }} />

                    <Collection collection={{
                        name: "new balance",
                        image: "https://d2lllwtzebgpl1.cloudfront.net/ce87940c5bf3713113656e256072beea_listingImg_DLa36ZJ39N.jpg"
                    }} />

                    <Collection collection={{
                        name: "yeezy",
                        image: "https://i.pinimg.com/originals/0c/5e/87/0c5e87e557a1ca61f924230b192bc0a3.jpg"
                    }} />
                </div>
            </Fragment>
        )
    }
}