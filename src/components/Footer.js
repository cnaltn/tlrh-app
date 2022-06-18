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
              <img alt="navLogo" src={navLogo}></img>
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
                <a className="fitems" href="#a">
                  About
                </a>
                <a className="fitems" href="#a">
                  Careers
                </a>
                <a className="fitems" href="#a">
                  Ventures
                </a>
                <a className="fitems" href="#a">
                  Grants
                </a>
              </flistchild>
              <flistchild className="flistChild">
                <p className="company">Stats</p>
                <a className="fitems" href="#a">
                  Rankings
                </a>
                <a className="fitems" href="#a">
                  Activity
                </a>
              </flistchild>
              <flistchild className="flistChild">
                <p className="company">Resources</p>
                <a className="fitems" href="#a">
                  Help Center
                </a>
                <a className="fitems" href="#a">
                  Gas-Free Marketplace
                </a>
                <a className="fitems" href="#a">
                  Blog
                </a>
                <a className="fitems" href="#a">
                  Newsletter
                </a>
              </flistchild>
              <flistchild className="flistChild">
                <p className="company">Follow us on</p>
                <a className="fitems" href="#a">
                  About
                </a>
                <a className="fitems" href="#a">
                  Careers
                </a>
                <a className="fitems" href="#a">
                  Ventures
                </a>
                <a className="fitems" href="#a">
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
