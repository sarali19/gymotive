import React from "react"
import {Link} from "react-router-dom"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Burger, Center, Container, Group, Header, Menu } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';

function Navbar() {
	return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/">Shop</Link>
            <Link to="/cart">
                <AiOutlineShoppingCart size={32}/>
            </Link>
            <Link to="/wishlist">wishlist</Link>
            
        </div>
    </div>
  )
}

export default Navbar; 