import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { getUserOrders } from '../../../services/productService'

import React, { useState , useEffect } from 'react';

const LatestOrders = (props) => {

  const [ state, setState ] = useState({
    orders: [],
    loading: false 
  })

  const getOrdersData = async() => {

    const orders = await getUserOrders()
    let newSTate = {...state}

    newSTate.orders = orders.data.length >= 1 ? orders.data.map(element => {
      return {
        id: element.id,
        ref: element.id,
        amount: element.grandTotal,
        createdAt: element.createdAt,
        status: element.status
      }
    }) : []
    setState({...newSTate})


    console.log(newSTate)
    

  }

  useEffect(() => {
      getOrdersData()
  }, state)


  return (
    <Card {...props}>
      <CardHeader title="Orders" />
      <Divider />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Order Ref
                </TableCell>
               
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Total
                </TableCell>
                <TableCell>
                  Status
                </TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {state.orders.map((order , key) => (
                <TableRow
                  hover
                  key={key}
                >
                  <TableCell>
                    {Number(key) + 1}
                  </TableCell>
                 
                  <TableCell>
                    {moment(order.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {order.amount} USD
                  </TableCell>
                  <TableCell>
                    <Chip
                      color="primary"
                      label={order.status}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
       
      </Box>
    </Card>
  );
}

export default LatestOrders;
