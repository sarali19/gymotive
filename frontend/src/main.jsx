import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider theme={{
      globalStyles: (theme) => ({
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
        },

        ".category-button": {
          color: "white",
          background: "none",
          fontSize: 24,
          textTransform: "uppercase",
          textDecoration: "none",
          fontFamily: "consolas"
        },

        ".category-button:hover": {
          background: "none",
          borderRadius: 0,
          borderBottom: "3px solid white",
        },

        ".main-footer": {
          color: "white",
          background: "black"
        }
      })
    }}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
