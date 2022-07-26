import React from "react";
import "./gems.css";
import { Page } from "./Landing";
import styled from "styled-components";
import img_1 from "../image/top2.jpg";
import img_2 from "../image/top9.jpg";
import img_3 from "../image/top10.jpg";
import ellipse from "../image/ellipse1.png";
import ellipse2 from "../image/ellipse2.png";
import ellipse3 from "../image/ellipse3.png";

const Page_ = styled(Page)`
  align-items: start;
  height: max-content;
  backround-color: #1f1d2b;
`;

const Gems = () => {
  return (
    <Page_ className="gemsPage">
      <container className="container">
        <top class="top1">
          Hidden Gems
          <view className="view">View All</view>
        </top>
        <grid className="grid">
          <gridchild className="gridchild">
            <img alt="img_1" className="gems_img" src={img_1}></img>
            <img className="ellipse" src={ellipse}></img>
            <h2 className="head2">The Last Revenge of Horse</h2>
            <p className="p">
              Created by <span className="span">Fellowship of the Mete Bilgili</span>
            </p>
            <p1 className="p1">
              The Last Revenge of Horse is a collection of 10,000 NFTs. Each
              NFT is unique and resides on the Ethereum blockchain.
              Your Last Revenge of Horse NFT will double as your
              club membership.
            </p1>
          </gridchild>
          <gridchild className="gridchild">
            <img alt="img_2" className="gems_img" src={img_2}></img>
            <img alt="ellipse2" className="ellipse" src={ellipse2}></img>
            <h2 className="head2">The Last Revenge of Horse</h2>
            <p className="p">
              Created by <span className="span">Fellowship of the Mete Bilgili</span>
            </p>
            <p1 className="p1">
              The Last Revenge of Horse is a collection of 10,000 NFTs. Each
              NFT is unique and resides on the Ethereum blockchain.
              Your Last Revenge of Horse NFT will double as your
              club membership.
            </p1>
          </gridchild>
          <gridchild className="gridchild">
            <img alt="img_3" className="gems_img" src={img_3}></img>
            <img alt="ellipse3" className="ellipse" src={ellipse3}></img>
            <h2 className="head2">The Last Revenge of Horse</h2>
            <p className="p">
              Created by <span className="span">Fellowship of the Mete Bilgili</span>
            </p>
            <p1 className="p1">
              The Last Revenge of Horse is a collection of 10,000 NFTs. Each
              NFT is unique and resides on the Ethereum blockchain.
              Your Last Revenge of Horse NFT will double as your
              club membership.
            </p1>
          </gridchild>
        </grid>
      </container>
    </Page_>
  );
};

export default Gems;
