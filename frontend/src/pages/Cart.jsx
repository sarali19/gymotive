import { ActionIcon, Navbar, Table } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks';
import React from 'react'
import { RxCross1 } from "react-icons/rx"

function Cart() {
  const [cartItems] = useLocalStorage({ key: "cartItems", defaultValue: [] });

  return (
    <>
      <Table horizontalSpacing="xl" verticalSpacing="xl">
        <thead>
          <tr>
            <th>ProductId</th>
            {/* <th>Image</th> */}
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item =>
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.quantity * item.price}</td>
              <td><ActionIcon color="red" size="lg" variant="light"><RxCross1 /></ActionIcon> </td>
            </tr>)}
        </tbody>
      </Table>
    </>
  )
}

export default Cart