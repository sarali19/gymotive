import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser } from "react-icons/ai"
import { ActionIcon, Box, Group, Image, Indicator, Text } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import logo from "../images/gymotive-logo.png";


function Navbar() {

	const [cartItems] = useLocalStorage({ key: "cartItems", defaultValue: [] });

	return (
		<Box sx={{ background: "black", color: "white", padding: "20px 75px" }}>
			<Group position="apart">
				<Link to="/" className="link">
					<Image maw={200} src={logo} alt="logo" />
				</Link>
				<Group>
					<Link to="/products?category=Women" className="category-button">Women</Link>
					<Link to="/products?category=Men" className="category-button">Men</Link>
					<Link to="/products?category=Accessories" className="category-button">Accessories</Link>
					<Link to="/products?category=Supplements" className="category-button">Supplements</Link>
				</Group>
				<Group>
					<Link to="/wishlist" className="link"><AiOutlineHeart size={32} /></Link>
					<Link to="/cart" className="link">
						<AiOutlineShoppingCart size={32} />
						<div className="cartnotif">{cartItems.length}</div>
					</Link>
					<Link to="/profile" className="link"><AiOutlineUser size={32} /></Link>
				</Group>
			</Group>
		</Box>
	);
}

export default Navbar; 