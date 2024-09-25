import styled from "styled-components";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-around;
`;

export const Contact = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.grey};
  padding: 0.7rem;
  box-shadow: ${(props) => props.theme.shadows.primary};
  transition: all.4s;

  &:hover {
    transform: translateY(-8px);
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Contacts = () => (
  <Container>
    <Contact
      href="https://api.whatsapp.com/send?phone=5511913554998"
      target="blank"
      aria-label="Link de Contact whatsapp"
    >
      <FaWhatsapp color="white" />
    </Contact>
    <Contact
      href="https://www.linkedin.com/in/barbosarichard/"
      about="blank"
      target="blank"
      aria-label="Link de Contact linkedin"
    >
      <FaLinkedinIn color="white" />
    </Contact>
    <Contact
      href="https://github.com/bricharddev"
      about="blank"
      target="blank"
      aria-label="Link de visita github"
    >
      <FaGithub color="white" />
    </Contact>
  </Container>
);

export default Contacts;
