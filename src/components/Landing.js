import React from "react";
import styled from "styled-components";
import "./landing.css";
import landingLogo from "../image/landingLogo.png";
import landingLogo2 from "../image/landingLogo2.png";
import playButton from "../image/play.png";
import bgg1 from "../image/bgg1.png";
import Owl from "./Owl";

const HeadLine = styled.div``;

const Page = styled.div``;
const UpDesc = styled.div``;

const Button2 = styled.div``;

const Button1 = styled.div``;

const Landing = () => {
  return (
    <>
      {/* <middle className="deneme">
        <Owl></Owl>
      </middle> */}
      <Page className="landingPage">
        <div className="container">
          <top className="landingTop">
            <UpDesc className="landingDesc">
              Welcome to The Last Revenge of Horse (TLRH)
            </UpDesc>
            <HeadLine className="landingH1">
              The Last Revenge of Horse (TLRH) has 10,000+ NFTs<br></br> You can
              always find which is best for you.
            </HeadLine>
          </top>

          <bottom className="bottom">
            <Button1>
              <a className="button1" href="#hidden-gems">
                Explore
              </a>
            </Button1>
            {/* <Button2>
            <a className="button2" href="#a">
              Create
            </a>
          </Button2> */}
          </bottom>
          {/* <play className="playBtn">
            <img alt="playBtn" src={playButton}></img>
            Learn More About TLRH
          </play> */}
        </div>
        <right className="landingLogo">
          <img alt="landingimg" className="landingimg" src={landingLogo2}></img>
        </right>
        <bgg className="bgg">
          <img alt="bggimg" className="bggimg" src={bgg1}></img>
        </bgg>
      </Page>
    </>
  );
};

export default Landing;
export { Page };
