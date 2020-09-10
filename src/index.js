import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAZGpzwbCtMv3_jM68sdWSrgSMu0hPeCJo",
  authDomain: "cart-8fb94.firebaseapp.com",
  databaseURL: "https://cart-8fb94.firebaseio.com",
  projectId: "cart-8fb94",
  storageBucket: "cart-8fb94.appspot.com",
  messagingSenderId: "632706996614",
  appId: "1:632706996614:web:eb8683437ce74fae63f407",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
