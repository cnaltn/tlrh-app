import React from "react";
import "./footer.css";
import { BsTwitter, BsInstagram, BsMedium } from "react-icons/bs";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <page className="footerPage">
      <container className="container">
        <fmain className="fmain">
          <right>
            <flist className="flist">
              <flistchild className="flistChild">
                <a className="fitems" href="/">
                  PURCHASE
                </a>
                <a className="fitems" href="/">
                  MEMBERS
                </a>
                <a className="fitems" href="/">
                  TEAM
                </a>
                <a className="fitems" href="/">
                  COLLECTION
                </a>
                <a className="fitems" href="/">
                  ROAD MAP
                </a>
                <a className="fitems" href="/">
                  BLOG
                </a>
              </flistchild>
              <flistchild className="footer_socials">
                <div className="footer_geton">
                  <h2>GET ON THE LIST</h2>
                  <form className="form_">
                    <input
                      type="email"
                      className="input_footer"
                      placeholder="E-mail"
                    ></input>
                    <button className="send_button" href="#">
                      <BiMailSend></BiMailSend>
                    </button>
                  </form>
                </div>
                <div className="footer_geton2">
                  <p className="company">FOLLOW US</p>
                  <div className="socials_div">
                    <a
                      href="https://twitter.com/revengeofhorses"
                      target="_blank"
                    >
                      <BsTwitter></BsTwitter>
                    </a>
                    <a href="https://linkedin.com" target="_blank">
                      <FaLinkedinIn></FaLinkedinIn>
                    </a>
                    <a href="https://discord.com" target="_blank">
                      <FaDiscord></FaDiscord>
                    </a>
                    <a
                      href="https://www.instagram.com/revengeofhorses/"
                      target="_blank"
                    >
                      <BsInstagram></BsInstagram>
                    </a>
                    <a href="https://opensea.io/account" target="_blank">
                      <Icon icon="simple-icons:opensea" />
                    </a>
                    <a href="https://medium.com" target="_blank">
                      <BsMedium></BsMedium>
                    </a>
                  </div>
                </div>
              </flistchild>
            </flist>
          </right>
          <left className="fleft">
            <flogo className="flogo">
              <h1 className="footerLogo">TLRH</h1>
            </flogo>
            <h2 className="brandName">The Last Revenge of Horses</h2>
            {/* <p className="fdesc">
              The Last Revenge of Horse has 10,000+ NFTs, you can always find
              which is best for you. Take your time and look our marketplace and
              follow our socials.
            </p> */}
          </left>
        </fmain>
        <copyright className="fcpy">
          The Last Revenge of Horse 2021-2022 all rights reserved<br></br>
          Codded with 💛 by Can Altun.
        </copyright>
      </container>
    </page>
  );
};

export default Footer;
