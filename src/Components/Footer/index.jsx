import React from "react";
import styled from "styled-components";
import github from "./../../assets/github.svg";
import linkedin from "./../../assets/linkedin.svg";
import gmail from "./../../assets/gmail.svg";

const StyledFooter = styled.footer`
  background-color: #91735f;
  padding-top: 7em;
  margin-top: 25em;
  padding-top: 10em;
`;

const StyledSocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 73px;
`;

const StyledSocialMedia = styled.a`
  color: #5b453d;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 48px;
  text-decoration: none;
`;

const StyledSocialMediaTitle = styled.h3`
  font-family: "Titillium Web", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 11px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #5b453d;
`;

const StyledSocialMediaImage = styled.img``;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialMediaContainer>
        <StyledSocialMedia>
          <StyledSocialMediaImage src={gmail} />
          <StyledSocialMediaTitle>GMAIL</StyledSocialMediaTitle>
        </StyledSocialMedia>
        <StyledSocialMedia href="https://www.linkedin.com/in/jonatan-moreno-39651b215/">
          <StyledSocialMediaImage src={linkedin} />
          <StyledSocialMediaTitle>LINKEDIN</StyledSocialMediaTitle>
        </StyledSocialMedia>
        <StyledSocialMedia href="https://github.com/jonatanluismoreno">
          <StyledSocialMediaImage src={github} />
          <StyledSocialMediaTitle>GITHUB</StyledSocialMediaTitle>
        </StyledSocialMedia>
      </StyledSocialMediaContainer>
    </StyledFooter>
  );
};

export default Footer;
