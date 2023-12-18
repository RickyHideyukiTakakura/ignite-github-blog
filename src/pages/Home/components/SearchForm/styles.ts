import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;

  input {
    flex: 1;
    padding: 0.75rem 1rem;

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["base-border"]};

    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      font-size: 1rem;
      line-height: 160%;

      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
