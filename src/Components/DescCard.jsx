import React from "react";
import styled from "styled-components";
import Button from "./Button";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 510px;

  /* Responsive design */
  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    gap: 20px; /* Adjust gap between elements */
    padding: 0 20px; /* Add padding to prevent overflow on smaller screens */
  }
`;

const Icon = styled.img`
  width: 131px;
  height: 131px;

  /* Responsive design for icon */
  @media (max-width: 768px) {
    width: 100px; /* Scale down the icon on mobile */
    height: 100px; /* Scale down the icon on mobile */
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 900;
  line-height: 48.76px;
  text-align: center;

  /* Responsive design for title */
  @media (max-width: 768px) {
    font-size: 28px; /* Reduce font size on mobile */
    line-height: 34px; /* Adjust line-height */
  }
`;

const Desc = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 39.01px;
  text-align: center;

  /* Responsive design for description */
  @media (max-width: 768px) {
    font-size: 18px; /* Reduce font size on mobile */
    line-height: 28px; /* Adjust line-height */
  }
`;

const DescCard = ({ imageSrc, title, desc, btnText }) => {
  return (
    <CardContainer>
      <Icon src={imageSrc} />
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <Button buttonTitle={btnText} />
    </CardContainer>
  );
};

export default DescCard;
