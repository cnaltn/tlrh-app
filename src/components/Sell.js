import React from "react";
import "./sell.css";
import m1 from "../image/m1.png";

const Sell = () => {
  return (
    <page className="pageTop">
      <container className="container">
        <top className="top1">Make an Unique Collection NFTs With Us</top>
        <grid className="sellg">
          <gridchild className="sellgc">
            <img alt="sellimg" className="sellImg" src={m1}></img>
            <h1 className="sellH1">Set up your NFTs</h1>
            <p className="sellP">
              You can make an unique collection with The Last Revenge of Horse NFTs. We've 10,000+ unique NFTs for your favourite collections.
              <span className="sellSpan"> Let's start today!</span>
            </p>
          </gridchild>
          <gridchild className="sellgc">
            <img alt="sellimg2" className="sellImg" src={m1}></img>
            <h1 className="sellH1">Create your collection</h1>
            <p className="sellP">
              Create <span className="sellSpan">your unique collection</span> and set up
              your NFTs. And don't forget we always support you after your buy.
            </p>
          </gridchild>
          <gridchild className="sellgc">
            <img alt="sellimg3" className="sellImg" src={m1}></img>
            <h1 className="sellH1">Follow our socials</h1>
            <p className="sellP">
              <span className="sellSpan">Always follow our socials </span>because we're gonna make and brand new NFTs every day. You're not wanna to miss some hidden gems, aren't you?
            </p>
          </gridchild>
          <gridchild className="sellgc">
            <img alt="sellimg4" className="sellImg" src={m1}></img>
            <h1 className="sellH1">List them for sale</h1>
            <p className="sellP">
              You can always sell our NFTs whenever you want. You know the right time to 
              <span className="sellSpan"> sell your NFTs</span>, and we help you
              sell them!
            </p>
          </gridchild>
        </grid>
      </container>
    </page>
  );
};

export default Sell;
