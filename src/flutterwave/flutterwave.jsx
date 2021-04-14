import React, { useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { TextField, Button } from "@material-ui/core"

export default function FlutterWave () {
  const [config, setConfig ] = useState({
    public_key: 'FLWPUBK_TEST-96bc0402de1213b618f9f58986fd0701-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'RWF',
    payment_options: 'card,mobilemoney',
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


  const handleClientInput = (event) => {
    let payment_info = {...config}
    payment_info.customer[event.target.id] = event.target.value

    setConfig({...payment_info})
  }

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
    
    <TextField variant="outlined" onChange={handleClientInput} fullWidth style={{width: "500px"}}  id="email" label="email" type="email" /> <br/> <br/>
    <TextField variant="outlined" onChange={handleClientInput} fullWidth style={{width: "500px"}} id="name" label="name" type="name" /> <br/> <br/>
    <TextField variant="outlined" onChange={handleClientInput} fullWidth style={{width: "500px"}} label="phone"   id="phonenumber" type="number" /> <br/> <br/> 

      <Button
        variant="contained"
        onClick={() => {
          if(Object.values(config.customer).some(elem => elem == null)) {
            alert("filling in your billing information please")
          }else {

          handleFlutterPayment({
            callback: (response) => {
                closePaymentModal() 
            },
            onClose: () => {},
          });
        }
      }}
      >
        Contiue To Payment 
      </Button>
    </div>
  );
}