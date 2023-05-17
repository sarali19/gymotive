import { ActionIcon, Group, Navbar, Table, Text } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks';
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai"
import api from '../api/axios';

function Cart() {
	const [_cartItems, _setCartItems] = useLocalStorage({ key: "cartItems", defaultValue: [] })
	const [user, setUser] = useLocalStorage({ key: "user" })
	const [cartItems, setCartItems] = useState([])

	async function removeFromCart(id) {
		const updatedCartItems = _cartItems.filter(item => item.id !== id);
		_setCartItems(updatedCartItems)
		await api.delete(`/carts/${user.id}/${id}`)
		fetchCart()
	}

	async function handleQuantityChange(item, step) {
		try {
			const response = await api.put(`/carts/${user.id}/${item.productId}`, { quantity: item.quantity + step })
			setCartItems(cartItems.map(item => item.id === response.data.id ? { ...item, quantity: response.data.quantity } : item))
		}
		catch (error) {
			console.log(error)
		}
	}

	const fetchCart = async () => {
		const response = await api.get(`/carts/${user.id}`)
		setCartItems(response.data)
	}

	useEffect(() => {
		if (user) {
			fetchCart()
		}
	}, [user])

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
							{cartItems.map((item) =>
								<tr key={item.id}>
									<td>{item.product.id}</td>
									<td>{item.product.title}</td>
									<td>
										<Group>
											<ActionIcon color='dark' variant='transparent' disabled={item.quantity === 1} onClick={() => handleQuantityChange(item, -1)}>
												<AiOutlineMinusSquare size={"2rem"} />
											</ActionIcon>
											{item.quantity}
											<ActionIcon color='dark' variant='transparent' onClick={() => handleQuantityChange(item, 1)}>
												<AiOutlinePlusSquare size={"2rem"} />
											</ActionIcon>
										</Group>
									</td>
									<td>{item.product.price}</td>
									<td>{item.quantity * item.product.price}</td>

									<td>
										<ActionIcon color="red" size="lg" variant="light" >
											<AiOutlineClose onClick={() => removeFromCart(item.productId)} />
										</ActionIcon> </td>
								</tr>)}
						</tbody>
					</Table>
			}

		</>
	)

}

export default Cart