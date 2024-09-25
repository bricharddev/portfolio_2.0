import styled from "styled-components";
import { useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { MenuContext } from "../../context/Menu";

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  padding: 0.2rem;
  justify-content: center;
  margin: 0 auto;
  gap: 1rem;
  background-color: ${(props) => props.theme.colors.grey};
  border-radius: 1.8rem;
  height: 2.8rem;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadows.primary};
  @media screen and (width > 920px) {
    position: fixed;
    top: 7.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
  }

  @media screen and (width < 920px) {
    position: absolute;
    background-color: ${(props) => props.theme.colors.primary};
    left: 50%;
    right: 0;
    z-index: 99;
    border-radius: 26px 0 0px 26px;
    flex-direction: column;
    height: 500px;
    padding: 1rem 0;
    transition: all.6s;

    transform: ${(props) =>
      props.active ? "translateX(0%)" : "translateX(120%)"};
  }
`;

const Link = styled(ScrollLink)`
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  border-radius: 26px;
  text-decoration: none;
  font-size: 1rem;
  width: 7.8rem;
  height: 100%;
  transition: 500ms;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  &.active {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  @media screen and (width < 920px) {
    border-radius: 0;
    color: ${(props) => props.theme.colors.black};
    width: 100%;
    font-weight: bold;
    letter-spacing: 1px;

    &:hover {
      background-color: transparent;
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const options = [
  {
    text: "Home",
    href: "inicio",
  },
  {
    text: "About me",
    href: "sobremim",
  },
  {
    text: "Skills",
    href: "habilidades",
  },
  {
    text: "Projects",
    href: "projetos",
  },
];

const Nav = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  return (
    <Navigation active={isOpen}>
      {options.map((opcao) => (
        <Link
          key={opcao.text}
          activeClass="active"
          to={opcao.href}
          duration={800}
          spy={true}
          className={opcao.active}
          onClick={() => setIsOpen(false)}
        >
          {opcao.text}
        </Link>
      ))}
    </Navigation>
  );
};

export default Nav;
