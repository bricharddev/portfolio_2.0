import styled from "styled-components";
import Nav from "../Nav";
import Logo from "../Logo";
import Contacts from "../Contacts";
import { Element as ScrollElement } from "react-scroll";
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  position: relative;

  @media screen and (width < 920px) {
    position: relative;
    flex-direction: column;
    padding: ${(props) => props.theme.paddings.mobilePadding};
    gap: 0.5rem;
  }
`;

const Header = () => (
  <ScrollElement name="inicio">
    <StyledHeader>
      <Logo />
      <Nav />
      <Contacts />
    </StyledHeader>
  </ScrollElement>
);

export default Header;
