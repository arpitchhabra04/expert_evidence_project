import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/headerComponent";
import Description from "./components/description";
import Footer from "./components/footerComponent";
import Video from "./components/video";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
