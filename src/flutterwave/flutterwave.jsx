import React, { useState, useContext } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { TextField, Typography, Button } from "@material-ui/core"
import { StoreContext } from "../mobxState/stateManagment";
import { flutterwaveKey } from "../env"
 
export default function FlutterWave (props) {

  console.log(props)
  const [config, setConfig ] = useState({
    public_key: flutterwaveKey,
    tx_ref: Date.now(),
    amount: props.total,
    currency: props.currency,
    customer: {
      email: null,
      phonenumber: null,
      name: null,
    },
    customizations: {
      title: 'SHOES-CLIMATE',
      description: 'Payment for items in cart',
      logo: 'https://pbs.twimg.com/profile_images/1298146343785988096/NKTCuQrE.jpg',
    },
  })

  const store = useContext(StoreContext)

  const [succes, setSucces] = useState(store.checkout.active["confirm payment"])

  const handleClientInput = (event) => {
    let payment_info = {...config}
    payment_info.customer[event.target.id] = event.target.value

    setConfig({...payment_info})
  }

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
    
   { !succes  ?
   
    <>
   <TextField variant="outlined" onChange={handleClientInput} className="text-fields"  id="email" label="email" type="email" /> <br/> <br/>
    <TextField variant="outlined" onChange={handleClientInput} className="text-fields" id="name" label="name" type="name" /> <br/> <br/>
    <TextField variant="outlined" onChange={handleClientInput} className="text-fields" label="phone"   id="phonenumber" type="number" /> <br/> <br/> 

      <Button
        variant="contained"
        fullWidth
        style={{width: "200px", marginBottom: "20px"}}
        onClick={() => {
          if(Object.values(config.customer).some(elem => elem == null)) {
            alert("filling in your billing information please")
          }else {

          handleFlutterPayment({
            callback: (response) => {
                store.activateNextBtn("confirm payment")
                closePaymentModal() 
                setSucces(true)
            },
            onClose: () => {},
          });
        }
      }}
      >
      Confirm Payment 
      </Button> </> : <Typography> payment made successfully </Typography> }
    </div>
  );
}