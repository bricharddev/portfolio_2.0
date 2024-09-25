import styled from "styled-components";

const FooterEstilizado = styled.footer`
  width: 100%;
  background: ${(props) => props.theme.colors.black};
`;

const Copy = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
  padding: 1.3rem;
`;

const Footer = () => (
  <FooterEstilizado>
    <Copy> &copy; 2024 Richard Barbosa. Todos os direitos reservados.</Copy>
  </FooterEstilizado>
);

export default Footer;
