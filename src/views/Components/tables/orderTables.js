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

import { useState , useEffect } from 'react';

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
        customer: {
          name: element.firstName,
        }, 
        createdAt: element.createdAt,
        status: element.status
      }
    }) : []
    setState({...newSTate})

  }

  useEffect(() => {
      getOrdersData()
  }, state)


  return (
    <Card {...props}>
      <CardHeader title="Latest Orders" />
      <Divider />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Order Ref
                </TableCell>
                <TableCell>
                  Customer
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
                    {order.customer.name}
                  </TableCell>
                  <TableCell>
                    {moment(order.createdAt).format('DD/MM/YYYY')}
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
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          href="/app/orders"
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}

export default LatestOrders;
