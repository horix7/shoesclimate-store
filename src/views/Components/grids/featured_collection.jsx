import Collection from "../home/collection_display";
import React , {Component, Fragment } from "react"

export default class FeaturedGrids extends Component {

    render () {

        return (
            <Fragment>
                <div className="collection-grids">
                    <Collection collection={{
                        name: "Nike",
                        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
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
                        image: "https://www.snupps.com/api/2.9/users/1627396/items/13957895/views/14761589-1.1024.jpg"
                    }} />
                </div>
            </Fragment>
        )
    }
}