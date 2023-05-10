import { ActionIcon, Navbar, Table, Text } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks';
import React from 'react'
import { RxCross1 } from "react-icons/rx"

function Cart() {
	const [cartItems, setCartItems] = useLocalStorage({ key: "cartItems", defaultValue: [] })

	async function removeFromCart(id) {
		const updatedCartItems = cartItems.filter(item => item.id !== id);
		setCartItems(updatedCartItems)
	}

	return (
		<>
			{
				cartItems.length === 0
					?
					<Text fz="xl" ta="center">Your cart is empty 😓</Text>
					:
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
							{cartItems.map((item, idx) =>
								<tr key={idx}>
									<td>{item.id}</td>
									<td>{item.title}</td>
									<td>{item.quantity}</td>
									<td>{item.price}</td>
									<td>{item.quantity * item.price}</td>

									<td>
										<ActionIcon color="red" size="lg" variant="light" >
											<RxCross1 onClick={() => removeFromCart(item.id)} />
										</ActionIcon> </td>
								</tr>)}
						</tbody>
					</Table>
			}

		</>
	)

}

export default Cart