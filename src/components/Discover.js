import React from "react";
import "./discover.css";
import discoverIMG from "../image/Dscvr.png";

const Discover = () => {
  return (
    <page className="pageDiscover">
      <container className="container">
        <top>
          <h1 className="headDscvr">Discover the latest #TOPNFT</h1>
          <p className="pDscvr">
            The NFT marketplace with everything for everyone
          </p>
        </top>
        <bottom className="discoverBot">
          <img
            className="discoverimg"
            alt="discoverimg"
            src={discoverIMG}
          ></img>
          <a className="discoverBtn" href="#a">
            <btn>Explore the marketplace</btn>
          </a>
        </bottom>
      </container>
    </page>
  );
};

export default Discover;
