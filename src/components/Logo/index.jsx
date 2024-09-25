import styled from "styled-components";
import logoImage from "./assets/icons8-r-67.png";
import MobileButton from "../MobileButton";

const Container = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media screen and (width < 920px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const FlexContainer = styled.figcaption`
  text-align: left;
`;

const LogoImg = styled.img`
  width: 2rem;

  @media screen and (width < 920px) {
    width: 1.9rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.black};
  margin: 0;

  @media screen and (width < 920px) {
    font-size: .9rem;
  }
`;

const SubText = styled.p`
  font-size: .7rem;
  color: ${props => props.theme.colors.secondary};
  margin: 0;
`;

const Logo = () => (
    <Container>
      <LogoImg src={logoImage} alt="logo" />
      <FlexContainer>
        <Text>Richard Barbosa</Text>
        <SubText>Front-End Developer</SubText>
      </FlexContainer>
      <MobileButton />
    </Container>
  );

export default Logo;
