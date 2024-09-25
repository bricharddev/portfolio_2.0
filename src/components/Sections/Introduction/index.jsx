import styled from "styled-components";
import avatar from "./assets/avatar.jpg";
import html from "../../../../public/assets/techs/html.png";
import css from "../../../../public/assets/techs/css.png";
import js from "../../../../public/assets/techs/js.png";
import typescript from "../../../../public/assets/techs/typescript.png";
import bootstrap from "../../../../public/assets/techs/bootstrap.png";
import react from "../../../../public/assets/techs/react.png";
import { Flip, Reveal } from "react-awesome-reveal";

const Section = styled.section`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (width < 700px) {
    padding: ${(props) => props.theme.paddings.mobilePadding};
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-size: 3rem;

  @media screen and (width < 700px) {
    font-size: 1.6rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`;

const Text = styled(Container)`
  gap: 0.3rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  background: radial-gradient(
    circle,
    rgba(68, 68, 68, 1) 55%,
    rgba(255, 255, 255, 0) 93%
  );
  background: radial-gradient(
    circle,
    rgba(72, 41, 249, 1) 55%,
    rgba(2, 0, 36, 0) 93%
  );
  overflow: hidden;
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  width: 18rem;

  @media screen and (width < 700px) {
    width: 12rem;
  }
`;

const Skill = styled.img`
  width: 3.8rem;
  filter: drop-shadow(24px 6px 8px #121212);

  @keyframes slider {
    0% {
      opacity: 0;
      transform: translateX(640px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(-640px);
    }
  }

  @media screen and (width < 700px) {
    animation: slider 6s infinite linear;
  }
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.grey};
  font-weight: 700;
  letter-spacing: 1px;
  width: 60%;
  text-align: center;

  @media screen and (width < 700px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

const Introduction = () => (
    <Section>
      <Container>
        <Reveal duration={2000} triggerOnce={true}>
          <Text>
            <Title>Welcome to my portfolio!</Title>
            <Description>
              Hi! I`m Richard, a front-end developer. Here you will find a
              little bit about me, my skills and projects developed so far.
            </Description>
          </Text>
        </Reveal>
        <Flip duration={1000} triggerOnce={true} cascade={true}>
          <AvatarImg src={avatar} alt="imagem avatar" />
        </Flip>
        <SkillsContainer>
          <Skill src={html} alt="html logo" />
          <Skill src={css} alt="css logo" />
          <Skill src={js} alt="js logo" />
          <Skill src={typescript} alt="typescript logo" />
          <Skill src={bootstrap} alt="bootstrap logo" />
          <Skill src={react} alt="react logo" />
        </SkillsContainer>
      </Container>
    </Section>
);

export default Introduction;
