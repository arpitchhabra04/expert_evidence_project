import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/headerComponent";
import Description from "./components/description";
import Footer from "./components/footerComponent";
import Video from "./components/video";
import SignForm from "./components/SignForm/SignForm";

function App() {
  return (
    <div className="App">
      <SignForm />
      {/* <Header />
      <Description />
      <Footer /> */}
    </div>
  );
}

export default App;
