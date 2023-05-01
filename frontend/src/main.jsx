import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider theme={{
      globalStyles : (theme) => ({
        "body": {
          margin: 0
        },

        ".link": {
          color: "inherit",
          textDecoration: "none"
        },

        ".link:hover": {
          color: "limegreen",
          textDecoration: "none"
        }
      })
    }}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
