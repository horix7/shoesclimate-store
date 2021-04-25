import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Variants() {
  return (
    <div>
      <div style={{ padding: "10px"}}>
      <Skeleton variant="rect" width={"100%"} height={200} />
      <Skeleton variant="text" width={"90%"} style={{marginLeft: "5%"}}/>
      <Skeleton variant="text" width={"60%"} style={{marginLeft: "20%"}}  height={40}/>
      </div>

      </div>
  );
}
