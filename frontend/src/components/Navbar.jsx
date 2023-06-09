import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { Box, Group, Image, Menu, Text } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import logo from "../images/gymotive-logo.png";

function Navbar() {
  const navigate = useNavigate();
  const [cartItems] = useLocalStorage({ key: "cartItems", defaultValue: [] });
  const [user, setUser, removeUser] = useLocalStorage({ key: "user" });

  const handleLogout = () => {
    removeUser();
    navigate("/");
  };

  return (
    <Box sx={{ background: "black", color: "white", padding: "20px 75px" }}>
      <Group position="apart">
        <Link to="/" className="link">
          <Image maw={200} src={logo} alt="logo" />
        </Link>
        <Group>
          <a href="/products?category=Women" className="link category-button">
            Women
          </a>
          <a href="/products?category=Men" className="link category-button">
            Men
          </a>
          <a href="/products?category=Accessories" className="link category-button">
            Accessories
          </a>
          <a href="/products?category=Supplements" className="link category-button">
            Supplements
          </a>
        </Group>
        <Group>
          {user && !user.isAdmin && (
            <>
              <Link to="/wishlist" className="link">
                <AiOutlineHeart size={32} />
              </Link>
              <Link to="/cart" className="link">
                <AiOutlineShoppingCart size={32} />
                <div className="cartnotif">{cartItems.length}</div>
              </Link>
            </>
          )}

          {user ? (
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Link to="#" className="link">
                  <AiOutlineUser size={32} />
                </Link>
              </Menu.Target>

              <Menu.Dropdown>
                {user.isAdmin ? (
                  <Menu.Item icon={<AiOutlineUser size={14} />} onClick={() => navigate("/dashboard")}>
                    My dashboard
                  </Menu.Item>
                ) : (
                  <Menu.Item icon={<AiOutlineUser size={14} />} onClick={() => navigate("/profile")}>
                    My profile
                  </Menu.Item>
                )}
                <Menu.Item color="red" icon={<CgLogOut size={14} />} onClick={handleLogout}>
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <>
              <Link to="/signin" className="link">
                Sign in
              </Link>
              <Link to="/signup" className="link">
                Sign up
              </Link>
            </>
          )}
        </Group>
      </Group>
    </Box>
  );
}

export default Navbar;
