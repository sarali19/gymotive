import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Grid,
  Paper,
  Radio,
  Select,
  Stack,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useEffect, useState } from "react";

const thStyle = { background: "#F5F5F5", color: "#F44336", fontWeight: "normal" };

function CMI() {
  const [order, setOrder] = useState();

  useEffect(() => {
    console.log("fetch order data here");
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Col span={6}>
          <Table withBorder withColumnBorders>
            <thead>
              <tr>
                <th style={thStyle}>Payment details {new Date().toLocaleDateString()}</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <Stack spacing={"md"}>
                    <Text fw={500}>
                      Payment method
                      <img
                        src="https://w7.pngwing.com/pngs/678/81/png-transparent-visa-and-master-cards-mastercard-money-foothills-florist-business-visa-visa-mastercard-text-service-orange.png"
                        height={23}
                        style={{ marginLeft: 18 }}
                      />
                    </Text>

                    <Radio label="Credit card" defaultChecked />
                    <TextInput label="Name on card" placeholder="NAME ON CARD" />
                    <TextInput label="Card number" placeholder="CARD NUMBER" />
                    <Flex>
                      <Select
                        label="Expiration date"
                        data={Array.from(Array(12).keys()).map((month) => ({
                          value: month + 1,
                          label: `${month + 1}`.padStart(2, "0"),
                        }))}
                        value={1}
                      />
                      <Select ml={12} label=" " data={[{ value: 2023, label: 2023 }]} value={2023} />
                    </Flex>
                    <TextInput label="Verification code" placeholder="" w={250} />
                    <Checkbox label="I agree to the terms and conditions" mb={20} />
                  </Stack>
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <th style={{ background: "#F5F5F5" }}>Your payment information with stay confidential</th>
              </tr>
            </tfoot>
          </Table>
        </Grid.Col>

        <Grid.Col span={6}>
          <Stack>
            <Table withBorder withColumnBorders>
              <thead>
                <tr>
                  <th style={thStyle}>ORDER DETAILS</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <Text fw={500} span>
                      ID :
                    </Text>
                    123
                    <br />
                    <Text fw={500} span>
                      Amount :
                    </Text>
                    1230
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table withBorder withColumnBorders>
              <thead>
                <tr>
                  <th style={thStyle}>MERCHANT DETAILS</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <Text fw={500} span>
                      Merchant name :
                    </Text>
                    Gymotive
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table withBorder withColumnBorders>
              <thead>
                <tr>
                  <th style={thStyle}>CLIENT INFO</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <Text fw={500} span>
                      Merchant name :
                    </Text>
                    Gymotive
                  </td>
                </tr>
              </tbody>
            </Table>

            <Flex gap={12}>
              <Button fullWidth color="green">
                ACCEPT
              </Button>
              <Button fullWidth color="red">
                CANCEL
              </Button>
            </Flex>
          </Stack>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default CMI;
