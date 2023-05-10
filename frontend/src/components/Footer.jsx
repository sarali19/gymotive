import React from 'react';
import { CDBContainer, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import { Box, Button, Group, Image } from "@mantine/core";
import { Link } from 'react-router-dom';
import logo from "../images/gymotive-logo.png";
import { AiOutlinePhone, AiOutlineHome,AiOutlineMail} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box sx={{ background: "black", color: "white", position: "relative",bottom: "0", width: "100%" ,marginTop:"50px"}}>
      <CDBBox  display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={logo} width="180px" height="50px"/>
             
            </a>
            <p className="my-3" style={{ width: '300px' }}>
            Step up your game with our high-performance sportswear and equipment. 
            Shop now and get ready to crush your next workout!
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="light">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="light" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="light" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h4 mb-4" style={{ fontWeight: '600' }}>
              Gymotive
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/">About Us</Link></li>
                <li> <Link to="/">Contact</Link></li>
                <li> <Link to="/">Blog</Link></li>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h4 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
            <li> <Link to="/">Support</Link></li>
            <li> <Link to="/signup">Sign Up</Link></li>
            <li> <Link to="/signin">Sign In</Link></li>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h4 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
            <li> <Link to="/products?category=Men">Men</Link></li>
            <li> <Link to="/products?category=Women">Women</Link></li>
            <li> <Link to="/products?category=Accessories">Accessories</Link></li>
            <li> <Link to="/products?category=Supplements">Supplements</Link></li>
            </CDBBox>
            
          </CDBBox>
          <CDBBox>
            <p className="h4 mb-4" style={{ fontWeight: '600' }}>
              Informations
            </p>
            <CDBBox flex="column" style={{ padding: '0' }}>
            <div> <AiOutlineHome size={25} /><b>   Adresse:</b> Kenitra, Rue Nakhil </div><br/>
            <div> <AiOutlinePhone size={25} /><b>   Telephone:</b>+212 642234225</div><br/>
            <div> <AiOutlineMail size={25} /><b>      Email: </b>e.support@gymotive.ma</div>
            </CDBBox>
            
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; GYMOTIVE, 2023. All rights reserved.</small>
      </CDBBox>
      </Box>
  );
};
export default Footer;