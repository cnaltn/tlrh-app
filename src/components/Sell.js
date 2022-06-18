import React from "react";
import "./sell.css";
import m1 from "../image/m1.png";

const Sell = () => {
  return (
    <page className="pageTop">
      <container className="container">
        <top className="top1">Create and sell your NFTs</top>
        <grid className="sellg">
          <gridchild className="sellgc">
            <img className="sellImg" src={m1}></img>
            <h1 className="sellH1">Set up your wallet</h1>
            <p className="sellP">
              Once you’ve set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner. Learn about the
              <span className="sellSpan"> wallets we support.</span>
            </p>
          </gridchild>
          <gridchild className="sellgc">
            <img className="sellImg" src={m1}></img>
            <h1 className="sellH1">Create your collection</h1>
            <p className="sellP">
              Click <span className="sellSpan">My Collections</span> and set up
              your collection. Add social links, a description, profile & banner
              images, and set a secondary sales fee.
            </p>
          </gridchild>
          <gridchild className="sellgc">
            <img className="sellImg" src={m1}></img>
            <h1 className="sellH1">Add your NFTs</h1>
            <p className="sellP">
              <span className="sellSpan">Upload your work </span>(image, video,
              audio, or 3D art), add a title and description, and customize your
              NFTs with properties, stats, and unlockable content.
            </p>
          </gridchild>
          <gridchild className="sellgc">
            <img className="sellImg" src={m1}></img>
            <h1 className="sellH1">List them for sale</h1>
            <p className="sellP">
              Choose between auctions, fixed-price listings, and declining-price
              listings. You choose how you want to{" "}
              <span className="sellSpan">sell your NFTs</span>, and we help you
              sell them!
            </p>
          </gridchild>
        </grid>
      </container>
    </page>
  );
};

export default Sell;
