import { useContext } from "react";
import { RiMenuFoldFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import { MenuContext } from "../../context/Menu";

const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  display: none;
  transition: 500ms;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }

  @media screen and (width < 920px) {
    display: block;
    z-index: 100;
  }
`;

const MobileBtn = () => {
  const { isOpen, open } = useContext(MenuContext);

  return (
    <Button onClick={() => open()} aria-label="Botão abrir menu">
      {isOpen ? <IoClose size={36} /> : <RiMenuFoldFill size={36} />}
    </Button>
  );
};

export default MobileBtn;
