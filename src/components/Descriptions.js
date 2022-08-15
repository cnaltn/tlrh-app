import React from "react";
import "./descriptions.css";
import { Icon } from "@iconify/react";
import { FaDiscord } from "react-icons/fa";

const Descriptions = () => {
  return (
    <section className="desc_sec">
      <div className="container">
        <div className="desc_div">
          <p className="m_desc">
            The Last Revenge of Horses is a collection hosted on the Ethereum
            blockchain. All the horses are unique and are generated through
            software with different hairstyles, eyes, faces, clothing,
            accessories etc.{" "}
          </p>
        </div>
        <div>
          <a className="opensea_button" href="#">
            JOIN THE HERD BY PURCHASING ON OPENSEA!
            <Icon className="opensea_icon" icon="simple-icons:opensea" />
          </a>
        </div>
        <div className="second_div">
          <h1>Why join the Herd?</h1>
          <p>
            By acquiring a TLRH NFT or joining our discord server, you join a
            global community of peers sharing the same enthusiasm for NFT’s
            gaming and a digital future as you. By becoming a NFT holder, you
            receive special gifts such as merchandise with a signature horse.
            Also, you become eligible for future airdrops and other NFT related
            giveaways. As The Last Revenge of Horses project progresses, you
            will have privileges in the TLRH Game and metaverse environment. And
            most importantly, by joining the herd, you will have a saying in the
            fate of the project.{" "}
          </p>
        </div>
        <div>
          <a className="discord_button" href="#">
            JOIN THE REVENGE ON DISCORD
            <FaDiscord className="discord_icon"></FaDiscord>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Descriptions;
