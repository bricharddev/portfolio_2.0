import styled from "styled-components";
import { FaGithub, FaLocationArrow } from "react-icons/fa";

const CardTech = styled.li`
  position: relative;
  box-shadow: ${(props) => props.theme.shadows.primary};
  border-radius: 1.6rem;
  cursor: pointer;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  transition: all 0.6s;
  height: 22rem;
  width: 22rem;
  max-width: 90%;

  &:hover {
    transform: scale(1.03);
  }
`;

const Image = styled.img`
  border-radius: inherit;
  max-width: 100%;
  height: 100%;
`;

const LinksContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  transform: translateY(110%);
  background: ${(props) => props.theme.colors.primary};
  transition: all.6s;
  z-index: 99;

  ${CardTech}:hover & {
    transform: translateY(0);
  }
`;

const Link = styled.a`
  text-align: center;
  padding: 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  transition: all.6s;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Card = ({ children, projectImg, alt, hrefGit, hrefDeploy }) => {
  return (
    <CardTech>
      <Image src={projectImg} alt={alt} />
      <LinksContainer>
        <Link href={hrefGit} target="blank">
          <FaGithub size={52} />
          GitHub
        </Link>
        <Link href={hrefDeploy} target="blank">
          <FaLocationArrow size={52} />
          Deploy
        </Link>
      </LinksContainer>
      {children}
    </CardTech>
  );
};

export default Card;
