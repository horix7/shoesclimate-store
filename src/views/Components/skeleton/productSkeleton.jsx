import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Variants() {
  return (
    <div>
      <div className="product-skeleton">
      <div style={{textAlign: "center"}}>

      <Skeleton variant="rect" width={"100%"} height={400} />
        <br/>
      <Skeleton variant="rect" style={{marginLeft: "10%"}} width={"80%"} height={50} />

      </div>

    <div>

    <Skeleton variant="rec" width={"90%"} height={50} />
    <br/>
   
    <Skeleton variant="text" width={"30%"}  height={40} />
    <br/>
    <br/>
    <Skeleton variant="rec" width={"90%"} height={40} />
    <br/>
    <Skeleton variant="rec" width={"90%"} height={40} />
    <br/>
    <Skeleton variant="rec" width={"90%"} height={40} />
   
    <Skeleton variant="text" width={"90%"} height={150} />

</div>
      </div>

    </div>
  );
}
