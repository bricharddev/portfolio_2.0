import styled from "styled-components";

const BaseSection = styled.section`
  padding: ${(props) => props.theme.paddings.sectionsPadding};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;

  @media screen and (width < 920px) {
    padding: ${(props) => props.theme.paddings.mobileSectionsPadding};
    gap: 0;
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.grey};
  letter-spacing: 1px;
  font-size: 2rem;
  margin-bottom: 1em;

  & strong {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.8rem;
  }

  @media screen and (width < 920px) {
    text-align: center;
  }
`;

export { BaseSection, Title };
