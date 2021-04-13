import React, { useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { TextField, Button } from "@material-ui/core"

export default function FlutterWave () {
  const [config, setConfig ] = useState({
    public_key: 'FLWPUBK-**************************-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '0500px4586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'shoes climate',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  })



  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
    
    <TextField variant="outlined" fullWidth style={{width: "500px"}} label="email" type="email" /> <br/> <br/>
    <TextField variant="outlined" fullWidth style={{width: "500px"}} label="name" type="name" /> <br/> <br/>
    <TextField variant="outlined" fullWidth style={{width: "500px"}} label="phone" type="number" /> <br/> <br/> 

      <Button
        variant="contained"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Contiue To Payment 
      </Button>
    </div>
  );
}