import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,

};

const theme = extendTheme({
  config,
  Tabs: {
    variants: {
      unstyled: {
        paddingY: '4',
        marging: '0',
        tab: {
          _selected: {
            color: 'white',
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
