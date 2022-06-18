import React from "react";
import "./footer.css";
import navLogo from "../image/navLogo.png";

const Footer = () => {
  return (
    <page className="footerPage">
      <container className="container">
        <fmain className="fmain">
          <left className="fleft">
            <flogo>
              <img src={navLogo}></img>
            </flogo>
            <h2 className="brandName">MemoNFT</h2>
            <p className="fdesc">
              TheFund is the world's first non-fungible token (NFT) marketplace
              for both digital and physical assets
            </p>
          </left>

          <right>
            <flist className="flist">
              <flistchild className="flistChild">
                <p className="company">Company</p>
                <a className="fitems" href="#">
                  About
                </a>
                <a className="fitems" href="#">
                  Careers
                </a>
                <a className="fitems" href="#">
                  Ventures
                </a>
                <a className="fitems" href="#">
                  Grants
                </a>
              </flistchild>
              <flistchild className="flistChild">
                <p className="company">Stats</p>
                <a className="fitems" href="#">
                  Rankings
                </a>
                <a className="fitems" href="#">
                  Activity
                </a>
              </flistchild>
              <flistchild className="flistChild">
                <p className="company">Resources</p>
                <a className="fitems" href="#">
                  Help Center
                </a>
                <a className="fitems" href="#">
                  Gas-Free Marketplace
                </a>
                <a className="fitems" href="#">
                  Blog
                </a>
                <a className="fitems" href="#">
                  Newsletter
                </a>
              </flistchild>
              <flistchild className="flistChild">
                <p className="company">Follow us on</p>
                <a className="fitems" href="#">
                  About
                </a>
                <a className="fitems" href="#">
                  Careers
                </a>
                <a className="fitems" href="#">
                  Ventures
                </a>
                <a className="fitems" href="#">
                  Grants
                </a>
              </flistchild>
            </flist>
          </right>
        </fmain>
        <copyright className="fcpy">
          MEMONFT 2021-2022 all rights reserved. Codded with 💛 by Can Altun.
        </copyright>
      </container>
    </page>
  );
};

export default Footer;
