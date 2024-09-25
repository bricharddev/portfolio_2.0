import styled from "styled-components";
import perfil from "./assets/avatar.jpg";
import { Element as ScrollElement } from "react-scroll";
import { Slide } from "react-awesome-reveal";
import { BaseSection, Title } from "../BaseElements";

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 22rem;
  height: 22rem;
  border: 6px solid ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => props.theme.shadows.primary};

  @media screen and (width < 920px) {
    display: none;
  }
`;

const Text = styled.div`
  width: 50%;
  @media screen and (width < 920px) {
    width: 100%;
  }
`;

const Description = styled.p`
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.grey};
  font-weight: bold;
  line-height: 1.6rem;
  margin-top: 1rem;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media screen and (width < 920px) {
    display: initial;
  }
`;

const About = () => (
  <ScrollElement name="sobremim">
    <BaseSection>
      <Flex>
        <Slide direction="right">
          <ProfileImg src={perfil} alt="imagem de perfil" />
        </Slide>
        <Text>
          <Title>
            About <strong>Me</strong>
          </Title>
          <Description>
            {" "}
            Systems Analysis and Development student, focusing on Front-end
            development.
          </Description>
          <Description>
            Lately, I have been dedicating myself to studies to improve my
            knowledge in web development using technologies such as JavaScript,
            TypeScript and React, followed by good practices.
          </Description>
          <Description>
            Before starting my studies in the technology field, I worked in
            companies where I had direct contact with the customer. This gave me
            the opportunity to improve my communication skills, developing my
            teamwork skills and understanding problems, always seeking the best
            solution for the customer.
          </Description>
        </Text>
      </Flex>
    </BaseSection>
  </ScrollElement>
);

export default About;
