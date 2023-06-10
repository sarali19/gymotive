import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ActionIcon, Center, Grid, Image, Loader, Table, Text } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

function Wishlist() {
  const [wishlistItems, setWishlistItems, deleteWishlistItems] = useLocalStorage({
    key: "wishlistItems",
    defaultValue: [],
  });
  const [user, setUser] = useLocalStorage({ key: "user" });
  const [loading, setLoading] = useState(false);

  async function removeFromWishlist(id) {
    const updatedWishlistItems = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedWishlistItems);
  }

  return (
    <>
      {loading ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <Grid>
          {wishlistItems.length === 0 ? (
            <Text fz="xl" ta="center">
              Your wishlist is empty 😓
            </Text>
          ) : (
            <Table horizontalSpacing="xl" verticalSpacing="xl">
              <thead>
                <tr>
                  <th colSpan={2}>Product</th>
                  {/* <th>Title</th> */}
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {wishlistItems.map((item, idx) => (
                  <tr key={idx}>
                    <td style={{ padding: 0 }}>
                      <Image src={item.image} maw={"50px"} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <ActionIcon color="red" size="lg" variant="light">
                        <AiOutlineClose onClick={() => removeFromWishlist(item.id)} />
                      </ActionIcon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Grid>
      )}
    </>
  );
}

export default Wishlist;
