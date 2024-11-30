import React from "react";
import styled from "styled-components";
import DescCard from "./DescCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Default 3 columns */
  grid-gap: 20px;
  padding: 100px 20px;
  min-height: 90vh;

  /* Responsive design for smaller screens */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablets */
    padding: 80px 20px; /* Adjust padding for medium screens */
    grid-gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 column on mobile */
    padding: 60px 20px; /* Adjust padding for smaller screens */
    grid-gap: 50px;
  }
`;

const HowItWorks = () => {
  return (
    <Container>
      <DescCard
        imageSrc={"/stack.svg"}
        title={"What is FlowX?"}
        desc={
          "FlowX is a fast, secure, and scalable cross-border liquidity protocol on SUI, empowering developers with stable coins, real-time FX oracles, and automated market makers to revolutionize African financial systems."
        }
        btnText={"Explore"}
        btnLink={
          "https://flow-x-5sdk.vercel.app/docs/introduction/installation"
        }
      />
      <DescCard
        imageSrc={"/world.svg"}
        title={"African Financial Future"}
        desc={
          "FlowX is a transformable solution that addresses the core challenges of Africa's financial systems with fast, secure, and low-cost stablecoin transactions, real-time FX rates, and seamless cross-border payments, driving economic growth and innovation."
        }
        btnText={"Learn More"}
        btnLink={"https://flow-x-5sdk.vercel.app/docs/introduction/setup"}
      />
      <DescCard
        imageSrc={"/hold.svg"}
        title={"Build with FlowX"}
        desc={
          "FlowX delivers fast, low-cost stablecoin transactions, real-time FX rate accuracy, and developer-friendly APIs, offering unmatched reliability for creating scalable financial solutions. Build on FlowX to power the future of cross-border payments."
        }
        btnText={"Get Started"}
        btnLink={"https://flow-x-5sdk.vercel.app/docs/introduction/changelog"}
      />
    </Container>
  );
};

export default HowItWorks;
