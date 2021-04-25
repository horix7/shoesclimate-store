import { Button, Typography } from '@material-ui/core';
import React,{ Component, Fragment } from 'react';


export default class ProducGrids extends Component {

    render () {
        return (
            <Fragment>
                <div className="card_holder" style={{ backgroundImage: `url(\"${this.props.collection.image}\")`}}>
                    <div className="feat-content">
                    <p>
                        {this.props.collection.name} collection
                    </p>
                    <Button variant="outlined" style={{color: "white", borderColor: "white"}}>
                        View Collection
                    </Button>
                    </div>
                </div>
            </Fragment>
        )
    }
}