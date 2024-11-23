import styled from "styled-components";

const GradientWrapper = styled.div`
  display: inline-block;
  background: linear-gradient(90deg, #3e74fe 0%, #943eff 100%);
  padding: 3px;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 400px;
  height: 99px;
  background-color: #fff; /* Default background color */
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat, sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 39.01px;
  text-align: center;
  cursor: pointer;
  z-index: 10;
  border-radius: 8px;
  transition: background 0.3s ease-in-out, color 0.1s ease-in-out; /* Smooth transition */

  &:hover {
    background: linear-gradient(
      90deg,
      #943eff 0%,
      #3e74fe 100%
    ); /* Gradient on hover */
    color: #fff; /* Text color change on hover for contrast */
  }

  /* Media Query for Mobile */
  @media (max-width: 768px) {
    width: 250px; /* Adjust the button width */
    height: 60px; /* Adjust the button height */
    font-size: 24px; /* Adjust font size for smaller screens */
  }
`;

const Button = ({ buttonTitle }) => {
  return (
    <GradientWrapper>
      <ButtonContainer>{buttonTitle}</ButtonContainer>
    </GradientWrapper>
  );
};

export default Button;
