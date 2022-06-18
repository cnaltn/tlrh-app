import React from "react";
import "./gems.css";
import { Page } from "./Landing";
import styled from "styled-components";
import img_1 from "../image/1.png";
import img_2 from "../image/2.png";
import img_3 from "../image/3.png";
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
            <img alt="img_1" src={img_1}></img>
            <img className="ellipse" src={ellipse}></img>
            <h2 className="head2">ZombieClub Token</h2>
            <p className="p">
              Created by <span className="span">ZombieLab</span>
            </p>
            <p1 className="p1">
              Zombie Lab is a collection of 10,000<br></br> animated NFTs. Each
              NFT is unique and<br></br> resides on the Ethereum blockchain.
              Your<br></br> Zombie Lab Club NFT will double as your<br></br>{" "}
              club membership.
            </p1>
          </gridchild>
          <gridchild className="gridchild">
            <img alt="img_2" src={img_2}></img>
            <img alt="ellipse2" className="ellipse" src={ellipse2}></img>
            <h2 className="head2">Meta Bounty Hunters</h2>
            <p className="p">
              Created by <span className="span">B30898</span>
            </p>
            <p1 className="p1">
              Meta Bounty Hunters is a first of its kind<br></br> community and
              collective of elite members<br></br> who share a community-first
              mindset and<br></br> are focused on giving back to its NFT
              <br></br> holders through the Reflection Rewards.
            </p1>
          </gridchild>
          <gridchild className="gridchild">
            <img alt="img_3" src={img_3}></img>
            <img alt="ellipse3" className="ellipse" src={ellipse3}></img>
            <h2 className="head2">Treeverse Plots</h2>
            <p className="p">
              Created by <span className="span">Treeverse_Wallet</span>
            </p>
            <p1 className="p1">
              Treeverse is an open-world, fantasy<br></br> MMORPG with a
              MOBA-style combat<br></br> system. Slay beasts, forge mighty
              weapons,<br></br> lure the biggest fish, form guilds, defeat
              <br></br> dungeons.
            </p1>
          </gridchild>
        </grid>
      </container>
    </Page_>
  );
};

export default Gems;
