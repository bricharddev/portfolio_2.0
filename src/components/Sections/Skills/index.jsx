import styled from "styled-components";
import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { Element as ScrollElement } from "react-scroll";
import { Slide } from "react-awesome-reveal";
import CardList from "../../CardList";
import { BaseSection, Title } from "../BaseElements";

const Card = styled.li`
  background: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadows.primary};
  border-radius: 1.6rem;
  text-align: center;
  padding: 3rem;
  transition: all 0.6s;

  &:hover {
    transform: scale(1.03);
  }
`;

const SkillName = styled.h3`
  color: ${(props) => props.theme.colors.grey};
  font-size: 1.5rem;
  text-transform: uppercase;
  width: 16rem;
  cursor: default;
`;

const Skills = () => (
  <ScrollElement name="habilidades">
    <BaseSection>
      <Slide>
        <Title>
          My <strong>Skills</strong>
        </Title>
      </Slide>
      <CardList direction="left">
        <Card>
          <FaHtml5 size={42} color="#4829f9" />
          <SkillName>html 5</SkillName>
        </Card>
        <Card>
          <FaCss3 size={42} color="#4829f9" />
          <SkillName>css</SkillName>
        </Card>
        <Card>
          <FaJs size={42} color="#4829f9" />
          <SkillName>Javascript</SkillName>
        </Card>
        <Card>
          <FaBootstrap size={42} color="#4829f9" />
          <SkillName>Bootstrap</SkillName>
        </Card>
        <Card>
          <SiTypescript size={42} color="#4829f9" />
          <SkillName>Typescript</SkillName>
        </Card>
        <Card>
          <FaReact size={42} color="#4829f9" />
          <SkillName>React</SkillName>
        </Card>
      </CardList>
    </BaseSection>
  </ScrollElement>
);

export default Skills;
