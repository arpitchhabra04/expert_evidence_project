import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/headerComponent";
import Description from "./components/description";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
    </div>
  );
}

export default App;
