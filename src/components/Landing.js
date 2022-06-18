import React from "react";
import styled from "styled-components";
import "./landing.css";
import landingLogo from "../image/landingLogo.png";
import landingLogo2 from "../image/landingLogo2.png";
import playButton from "../image/play.png";
import bgg1 from "../image/bgg1.png";

const HeadLine = styled.div``;

const Page = styled.div``;
const UpDesc = styled.div``;

const Button2 = styled.div``;

const Button1 = styled.div``;

const Landing = () => {
  return (
    <Page className="landingPage">
      <div className="container">
        <top className="landingTop">
          <UpDesc className="landingDesc">
            Exclusive NFT for Digital and Real-world Assets
          </UpDesc>
          <HeadLine className="landingH1">
            The world's first non-fungible token (NFT) marketplace<br></br> for
            both digital and physical assets.
          </HeadLine>
        </top>

        <bottom className="bottom">
          <Button1>
            <a className="button1" href="#">
              Explore
            </a>
          </Button1>
          <Button2>
            <a className="button2" href="#">
              Create
            </a>
          </Button2>
        </bottom>
        <play className="playBtn">
          <img src={playButton}></img>
          Learn more about MEMONFT
        </play>
      </div>
      <right className="landingLogo">
        <img className="landingimg" src={landingLogo2}></img>
      </right>
      <bgg className="bgg">
        <img className="bggimg" src={bgg1}></img>
      </bgg>
    </Page>
  );
};

export default Landing;
export { Page };
