import React, { useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { TextField, Button } from "@material-ui/core"

export default function FlutterWave () {
  const [config, setConfig ] = useState({
    public_key: 'FLWPUBK_TEST-96bc0402de1213b618f9f58986fd0701-X',
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
      logo: 'https://pbs.twimg.com/profile_images/1298146343785988096/NKTCuQrE.jpg',
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