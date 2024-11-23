import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 10vh;
  background: #000;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Media Query for Mobile */
  @media (max-width: 768px) {
    height: 8vh;
    padding: 10px 15px;
    flex-direction: column;
    justify-content: center;
  }
`;

const Logo = styled.img`
  max-width: 100px; /* To ensure the logo doesn't become too big */
  height: auto;

  @media (max-width: 768px) {
    max-width: 80px; /* Adjust logo size for mobile */
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="/logo.svg" alt="logo" />
    </HeaderContainer>
  );
};

export default Header;
