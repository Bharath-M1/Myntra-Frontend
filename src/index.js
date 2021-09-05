import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


/* importing packages stylesheet globally */
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
