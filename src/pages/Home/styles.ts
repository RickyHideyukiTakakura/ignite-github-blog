import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 864px;

  margin: 0 auto;
`;

export const PublicationsContainer = styled.section`
  margin: 4.5rem 0;

  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0.75rem;

    strong {
      font-size: 1.125rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-span"]};
    }
  }
`;

export const CardsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 3rem;
`;
