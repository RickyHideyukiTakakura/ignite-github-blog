import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["base-profile"]};

  max-height: 296px;
  padding: 4rem 0 8.375rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    position: relative;
    z-index: 0;
  }

  img:first-child {
    margin-top: 6.75rem;
  }

  img:last-child {
    margin-top: 3.75rem;
  }
`;
