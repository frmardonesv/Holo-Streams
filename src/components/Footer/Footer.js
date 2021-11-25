import React from "react";
import { FooterContainer } from "./FooterStyles";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="about">
          <h3>Disclaimer</h3>
          <div>
            <span>*This is only a fan website*</span>
            <span>
              This is NOT a Hololive official website, and does not represent
              interests of CoverCorp and/or related companies. Content watched
              and consumed through this website are properties of their
              respective streamers and owners.
            </span>
          </div>
        </div>

        <hr />

        <ul className="resources">
          <h3>Material Source</h3>
          <li>
            <a href="https://hololive.hololivepro.com">
              Hololive Official Website
            </a>
          </li>

          <li>
            <a href="https://hololive.hololivepro.com/en">
              Hololive Official Website (EN)
            </a>
          </li>

          <li>
            <a href="https://www.hololive.tv">Hololive Production Website</a>
          </li>

          <li>
            <a href="https://virtualyoutuber.fandom.com/wiki/Hololive">
              Hololive Wiki
            </a>
          </li>
        </ul>
      </div>

      <hr className="hidden" />

      <h2>
        Please support the streamers in your own way, such as subscribing,
        watching, superchats, buying merchandise, etc.
        <br />
        <i>
          <AiFillHeart size="2rem" color="#ff004d" />
        </i>
      </h2>
    </FooterContainer>
  );
};

export default Footer;
