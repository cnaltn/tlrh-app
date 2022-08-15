import React from "react";
import styled from "styled-components";
import navLogo from "../image/navLogo.png";
import { BsTwitter, BsInstagram, BsMedium } from "react-icons/bs";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { Icon } from "@iconify/react";

import "./header.css";

const Container = styled.div``;

const Navbar = styled.div``;

const NavLogo = styled.div``;

const NavInput = styled.div``;

const NavItems = styled.div``;

//Styling

const Header = () => {
  window.onscroll = function bgNav() {
    document.getElementById("navContainer").style.background = "#18181b";
    return;
  };

  return (
    <Container id="navContainer" className="navContainer ">
      <Navbar className="navbar">
        <NavLogo className="navLogo">
          {/* <img alt="navLogo1" className="navLogo_" src={navLogo}></img> */}
          <h1 className="logoNav">TLRH</h1>
        </NavLogo>
        {/* <NavInput>
          <input
            type="text"
            placeholder="Search items, collections and accounts"
            className="input"
          ></input>
        </NavInput> */}
        <NavItems className="navItems">
          <a href="#hidden-gems">PURCHASE</a>
          <a href="#top-collections">MEMBERS</a>
          <a href="#discover">TEAM</a>
          <a href="#discover">COLLECTION</a>
          <a href="#discover">ROADMAP</a>
          <a href="#discover">BLOG</a>
          {/* <a className="a-button" href="#a">
            Account
          </a> */}
          <div className="head_socials">
            <a href="https://twitter.com/revengeofhorses" target="_blank">
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
        </NavItems>
      </Navbar>
    </Container>
  );
};

export default Header;
export { navLogo };
