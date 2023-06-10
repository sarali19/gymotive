import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        globalStyles: (theme) => ({
          body: {
            margin: 0,
          },

          ".link": {
            color: "inherit",
            textDecoration: "none",
            position: "relative",
          },

          ".link:hover": {
            color: "limegreen",
            textDecoration: "none",
          },

          ".category-button": {
            color: "white",
            background: "none",
            fontSize: 24,
            textTransform: "uppercase",
            textDecoration: "none",
            fontFamily: "Impact",
          },

          ".category-button:hover": {
            background: "none",
            borderRadius: 0,
            borderBottom: "3px solid limegreen",
          },

          ".main-footer": {
            color: "white",
            background: "black",
          },

          ".hero-text": {
            color: "white",
            fontWeight: 700,
            lineHeight: 5,
            fontFamily: "consolas",
            position: "absolute",
            right: 0.5,
            left: 40,
            top: "50%",
          },
          ".hero-title": {
            fontSize: "4em",
          },

          ".shop-button": {
            color: "black",
            background: "white",
          },

          ".shop-button:hover": {
            color: "white",
            background: "black",
          },
          ".training": {
            color: "black",
            fontFamily: "Barlow Semi Condensed",
            fontSize: 40,
          },
          ".cartnotif": {
            color: "white",
            backgroundColor: "red",
            borderRadius: "50%",
            border: "3px solid black",
            width: "1.2rem",
            height: "1.2rem",
            position: "absolute",
            top: 0,
            right: 0,
            transform: "translate(40% , -40%)",
            textAlign: "center",
            fontFamily: "sans-serif",
          },
          "li a": {
            color: "white",
            textDecoration: "none",
          },
        }),
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
