import React from 'react';
import { Box, Group, Image } from "@mantine/core";
import { Link } from 'react-router-dom';
import logo from "../images/gymotive-logo.png";
import {
  AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube,
  AiOutlineHome, AiOutlinePhone, AiOutlineMail
}
  from 'react-icons/ai';

const Footer = () => {
  return (
    <Box sx={{ background: "black", color: "white", padding: "20px 75px", fontFamily: "Consolas" }}>
      <Group position="apart">
        <div>
          <a href="/" >
            <img alt="logo" src={logo} width="240px" /></a>
          <p className="my-3" style={{ width: '300px', marginBottom: "1rem" }}>
            Step up your game with our high-performance sportswear and equipment.
            Shop now and get ready to crush your next workout!XXX
          </p>
          <Link ><AiOutlineFacebook size={40} color='white' /></Link>
          <Link ><AiOutlineInstagram size={40} color='white' /></Link>
          <Link ><AiOutlineTwitter size={40} color='white' /></Link>
          <Link ><AiOutlineYoutube size={40} color='white' /></Link>
        </div>

        <div>
          <p className="h4 mb-4" style={{ fontWeight: '600' }}>
            Gymotive
          </p>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/">About Us</Link></li>
          <li> <Link to="/">Contact</Link></li>
          <li> <Link to="/">Blog</Link></li>
        </div>
        <div>
          <p className="h4 mb-4" style={{ fontWeight: '600' }}>
            Help
          </p>
          <li> <Link to="/">Support</Link></li>
          <li> <Link to="/signup">Sign Up</Link></li>
          <li> <Link to="/signin">Sign In</Link></li>
        </div>
        <div>
          <p className="h4 mb-4" style={{ fontWeight: '600' }}>
            Products
          </p>
          <li> <Link to="/products?category=Men">Men</Link></li>
          <li> <Link to="/products?category=Women">Women</Link></li>
          <li> <Link to="/products?category=Accessories">Accessories</Link></li>
          <li> <Link to="/products?category=Supplements">Supplements</Link></li>
        </div>
        <div>
          <p className="h4 mb-4" style={{ fontWeight: '600' }}>
            Informations
          </p>
          <div> <AiOutlineHome size={25} /><b>   Adresse:</b> Kenitra, Rue Nakhil </div><br />
          <div> <AiOutlinePhone size={25} /><b>   Telephone:</b>+212 642234225</div><br />
          <div> <AiOutlineMail size={25} /><b>      Email: </b>e.support@gymotive.ma</div>
        </div>

      </Group>


    </Box>
  );
};
export default Footer;