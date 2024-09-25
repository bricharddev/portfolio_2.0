import { Slide } from "react-awesome-reveal";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5em;
  margin-top: 1rem;
  list-style-type: none;
`;

const CardList = ({ children, direction }) => {
  return (
    <Slide direction={direction} duration={1500}>
      <List>{children}</List>;
    </Slide>
  );
};

export default CardList;
