import React from "react";
import { FaDiscord, FaGithub, FaXTwitter } from "react-icons/fa6";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 10vh;
  border-top: 0.5px solid gray;

  /* Adjust layout for smaller screens */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack the items vertically on mobile */
    align-items: center; /* Center align the items */
    height: auto; /* Let the footer height adjust on smaller screens */
    gap: 10px; /* Add space between items */
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px; /* Reduce space between icons on mobile */
  }
`;

const Social = styled.a`
  svg {
    width: 32px;
    height: 32px;
    color: #000;
    font-weight: bold;
    transition: color 0.3s ease; /* Smooth hover effect */
  }

  /* Hover effect */
  &:hover {
    color: #0073e6;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <img src="/logo_dark.svg" alt="logo" />
      <Socials>
        <Social
          href="/https://x.com/CodeXlab042?t=Ub5y4NjjrK2rSUX2s8wA5w&s=09"
          target="_blank"
        >
          <FaXTwitter />
        </Social>
        <Social href="/" target="_blank">
          <FaGithub />
        </Social>
        <Social href="https://discord.gg/29bJvYpF" target="_blank">
          <FaDiscord />
        </Social>
      </Socials>
    </FooterContainer>
  );
};

export default Footer;
