import styled from "styled-components";
import CardList from "../../CardList";
import { Slide } from "react-awesome-reveal";
import { Element as ScrollElement } from "react-scroll";
import clima from "./assets/clima.png";
import loopstudio from "./assets/loopstudio.png";
import styledImg from "../../../../public/assets/techs/styled.png";
import materialImg from "../../../../public/assets/techs/material-ui.png";
import reactImg from "../../../../public/assets/techs/react.png";
import axiosImg from "../../../../public/assets/techs/axios.png";
import htmlImg from "../../../../public/assets/techs/html.png";
import cssImg from "../../../../public/assets/techs/css.png";
import jsImg from "../../../../public/assets/techs/js.png";
import Card from "./Card";
import { BaseSection, Title } from "../BaseElements";

const Techs = styled.div`
  background: ${(props) => props.theme.colors.primary};
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 99;
  transition: 2s;
`;

const TechImg = styled.img`
  height: 2.8rem;
  width: 2.8rem;
`;

const Projects = () => {
  return (
    <ScrollElement name="projetos">
      <BaseSection>
        <Slide direction="right">
          <Title>
            My <strong>Projects</strong>
          </Title>
        </Slide>
        <CardList direction="right">
          <Card
            projectImg={clima}
            alt="Clima Info image"
            hrefDeploy="https://clima-info.vercel.app/"
            hrefGit="https://github.com/bricharddev/clima-info"
          >
            <Techs>
              <TechImg alt="React logo" src={reactImg} />
              <TechImg alt="Styled Components logo" src={styledImg} />
              <TechImg alt="Material UI logo" src={materialImg} />
              <TechImg alt="Axios logo" src={axiosImg} />
            </Techs>
          </Card>
          <Card
            projectImg={loopstudio}
            alt="Loopstudios Website image"
            hrefDeploy="https://loopstudios-landing-page-ruddy-kappa.vercel.app/"
            hrefGit="https://github.com/bricharddev/Loopstudios-Landing-page"
          >
            <Techs>
              <TechImg alt="Html logo" src={htmlImg} />
              <TechImg alt="Css logo" src={cssImg} />
              <TechImg alt="Javascript logo" src={jsImg} />
            </Techs>
          </Card>
        </CardList>
      </BaseSection>
    </ScrollElement>
  );
};

export default Projects;
