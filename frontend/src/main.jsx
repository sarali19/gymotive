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
        },

        ".hero-text": {
          color: "white",
          fontWeight: 700,
          lineHeight: 5,
          fontFamily: "consolas",
          position: "absolute",
          right: 0.5,
          left: 40,
          bottom: 170,
        },
        ".hero-title": {
          fontSize: "3em"
        },

        ".shop-button": {
          color: "black",
          background: "white",
          // fontSize: 28,
          // textTransform: "uppercase",
          // textDecoration: "none",
          // fontFamily: "consolas",
          // padding: "24px 30px"
        },
        ".shop-button:hover": {
          color: "white",
          background: "black"
        },
        ".training": {
          color: "black",
          fontFamily: "Barlow Semi Condensed",
          fontSize: 40
        },
      })
    }}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
