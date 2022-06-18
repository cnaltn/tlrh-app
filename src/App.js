import React from "react";
import Discover from "./components/Discover";
import Gems from "./components/Gems";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Sell from "./components/Sell";
import Top from "./components/Top";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Landing></Landing>
      <Gems></Gems>
      <Top></Top>
      <Sell></Sell>
      <Discover></Discover>
      <Footer></Footer>
    </div>
  );
};

export default App;
