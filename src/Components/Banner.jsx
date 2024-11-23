import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";

// Keyframes for animating circle movement
const moveCircle = keyframes`
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(80px, -80px);
  }
  50% {
    transform: translate(-80px, 80px);
  }
  75% {
    transform: translate(-150px, -100px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  color: #fff;
  overflow: hidden; /* Ensures circles stay within the container */
  background: #000;
  position: relative;
  gap: 50px;
  padding: 0 20px; /* Add padding to prevent overflow on mobile */

  /* Responsive design */
  @media (max-width: 768px) {
    height: 92vh; /* Keep content within 90vh */
    padding: 0 10px; /* Adjust padding on mobile */
    gap: 10px;
  }
`;

const Circle = styled.div`
  z-index: 1;
  position: absolute;
  border-radius: 50%;
  filter: blur(120px); /* Apply blur effect */
  opacity: 0.7;
  animation: ${moveCircle} ${({ duration }) => duration}s infinite alternate;

  /* Circle size */
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `}

  /* Initial position */
  ${({ x, y }) => `
    top: ${y}%;
    left: ${x}%;
  `}

  /* Background gradient for each circle */
  ${({ gradient }) => `
    background: ${gradient};
  `}

  /* Responsive design for circles */
  @media (max-width: 768px) {
    width: ${({ size }) => size * 0.6}px; /* Scale down circles on mobile */
    height: ${({ size }) => size * 0.6}px; /* Scale down circles on mobile */
  }
`;

const Motto = styled.div`
  font-size: 96px;
  font-weight: 400;
  line-height: 119.06px;
  text-align: center;
  z-index: 10;
  width: 1165px;

  /* Responsive design for motto */
  @media (max-width: 768px) {
    font-size: 48px; /* Reduce font size on mobile */
    width: 90%; /* Adjust width for smaller screens */
    line-height: normal;
  }
`;

const Description = styled.div`
  font-size: 36px;
  font-weight: 400;
  line-height: 43.88px;
  text-align: center;
  z-index: 10;
  width: 928px;

  /* Responsive design for description */
  @media (max-width: 768px) {
    font-size: 18px; /* Reduce font size on mobile */
    width: 90%; /* Adjust width for smaller screens */
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      {/* Animated Blurry Circles with Separate Colors */}
      {/* Blue Gradient Circles */}
      <Circle
        size={400}
        x={10}
        y={20}
        duration={8}
        gradient="radial-gradient(circle, #3e74fe, #5c9bff)"
      />
      <Circle
        size={600}
        x={70}
        y={30}
        duration={12}
        gradient="radial-gradient(circle, #3e74fe, #5c9bff)"
      />

      {/* Purple Gradient Circles */}
      <Circle
        size={350}
        x={50}
        y={60}
        duration={10}
        gradient="radial-gradient(circle, #943eff, #c463ff)"
      />
      <Circle
        size={500}
        x={30}
        y={80}
        duration={14}
        gradient="radial-gradient(circle, #943eff, #c463ff)"
      />
      <Circle
        size={450}
        x={80}
        y={10}
        duration={16}
        gradient="radial-gradient(circle, #943eff, #c463ff)"
      />

      {/* Text Content */}
      <Motto>Redefining Cross-Border Finance for Africa</Motto>
      <Description>
        FlowX empowers developers to harness stablecoins for seamless, low-cost,
        and secure payments. Driving innovation in high-growth markets.
      </Description>
      <Button buttonTitle={"Start Building"} />
    </BannerContainer>
  );
};

export default Banner;
