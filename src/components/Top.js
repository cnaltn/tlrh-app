import React from "react";
import "./top.css";
import { Page } from "./Landing";
import top8 from "../image/top8.jpg";
import top1 from "../image/top1.jpg";
import top2 from "../image/top2.jpg";
import top3 from "../image/top3.jpg";
import top4 from "../image/top4.jpg";
import top5 from "../image/top5.jpg";
import top6 from "../image/top6.jpg";
import top7 from "../image/top7.jpg";
import mini1 from "../image/mini1.png";
import mini2 from "../image/mini2.png";
import mini3 from "../image/mini3.png";
import mini4 from "../image/mini4.png";
import mini5 from "../image/mini5.png";
import mini6 from "../image/mini6.png";
import mini7 from "../image/mini7.png";
import mini8 from "../image/mini8.png";

const Top = () => {
  return (
    <page className="pageTop " id="top-collections">
      <container className="container">
        <top class="top1">
          Top Collections
          {/* <view className="view">View All</view> */}
        </top>
        <grid className="gridTop">
          <gridchild className="childgrid">
            <img alt="mini1" className="mini_" src={top8}></img>
            <dsection className="dsec">
              <left className="left">
                <img alt="mini20" src={mini1}></img>
              </left>
              <right>
                <mainhead className="mainhead">
                  The Last Revenge of Horse
                </mainhead>
                <desc>By Fellowship of Mete Bilgili</desc>
              </right>
            </dsection>

            <price className="price">Price</price>
            <amount className="amount">Check Marketplace</amount>
          </gridchild>
          <gridchild className="childgrid">
            <img alt="mini2" className="mini_" src={top2}></img>
            <dsection className="dsec">
              <left className="left">
                <img alt="mini19" src={mini3}></img>
              </left>
              <right>
                <mainhead className="mainhead">
                  The Last Revenge of Horse
                </mainhead>
                <desc>By Fellowship of Mete Bilgili</desc>
              </right>
            </dsection>

            <price className="price">Price</price>
            <amount className="amount">Check Marketplace</amount>
          </gridchild>
          <gridchild className="childgrid">
            <img alt="mini3" className="mini_" src={top6}></img>
            <dsection className="dsec">
              <left className="left">
                <img alt="mini16" src={mini7}></img>
              </left>
              <right>
                <mainhead className="mainhead">
                  The Last Revenge of Horse
                </mainhead>
                <desc>By Fellowship of Mete Bilgili</desc>
              </right>
            </dsection>

            <price className="price">Price</price>
            <amount className="amount">Check Marketplace</amount>
          </gridchild>
          <gridchild className="childgrid">
            <img alt="mini4" className="mini_" src={top4}></img>
            <dsection className="dsec">
              <left className="left">
                <img alt="mini15" src={mini5}></img>
              </left>
              <right>
                <mainhead className="mainhead">
                  The Last Revenge of Horse
                </mainhead>
                <desc>By Fellowship of Mete Bilgili</desc>
              </right>
            </dsection>

            <price className="price">Price</price>
            <amount className="amount">Check Marketplace</amount>
          </gridchild>
          <gridchild className="childgrid">
            <img alt="mini4" className="mini_" src={top1}></img>
            <dsection className="dsec">
              <left className="left">
                <img alt="mini12" src={mini2}></img>
              </left>
              <right>
                <mainhead className="mainhead">
                  The Last Revenge of Horse
                </mainhead>
                <desc>By Fellowship of Mete Bilgili</desc>
              </right>
            </dsection>

            <price className="price">Price</price>
            <amount className="amount">Check Marketplace</amount>
          </gridchild>
          <gridchild className="childgrid">
            <img alt="mini5" className="mini_" src={top7}></img>
            <dsection className="dsec">
              <left className="left">
                <img alt="mini8" src={mini8}></img>
              </left>
              <right>
                <mainhead className="mainhead">
                  The Last Revenge of Horse
                </mainhead>
                <desc>By Fellowship of Mete Bilgili</desc>
              </right>
            </dsection>

            <price className="price">Price</price>
            <amount className="amount">Check Marketplace</amount>
          </gridchild>
          <gridchild className="childgrid">
            <img alt="mini7" className="mini_" src={top3}></img>
            <dsection className="dsec">
              <left className="left">
                <img alt="mini8" src={mini4}></img>
              </left>
              <right>
                <mainhead className="mainhead">
                  The Last Revenge of Horse
                </mainhead>
                <desc>By Fellowship of Mete Bilgili</desc>
              </right>
            </dsection>

            <price className="price">Price</price>
            <amount className="amount">Check Marketplace</amount>
          </gridchild>
          <gridchild className="childgrid">
            <img alt="mini10" className="mini_" src={top5}></img>
            <dsection className="dsec">
              <left className="left">
                <img alt="mini11" src={mini6}></img>
              </left>
              <right>
                <mainhead className="mainhead">
                  The Last Revenge of Horse
                </mainhead>
                <desc>By Fellowship of Mete Bilgili</desc>
              </right>
            </dsection>

            <price className="price">Price</price>
            <amount className="amount">Check Marketplace</amount>
          </gridchild>
        </grid>
      </container>
    </page>
  );
};

export default Top;
