import styled from "styled-components";

export const CardContainer = styled.button`
  display: flex;
  flex-direction: column;

  width: 26rem;
  height: 16.25rem;
  padding: 2rem;

  border: 0;
  border-radius: 10px;
  background: ${(props) => props.theme["base-post"]};

  overflow: hidden;

  &:hover {
    outline: 2px solid ${(props) => props.theme["base-label"]};
    transition: outline 0.2s;
  }

  & > header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    margin-bottom: 1.25rem;

    strong {
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-title"]};
      white-space: wrap;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-span"]};
      white-space: nowrap;
      margin-top: 5px;
    }
  }

  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    color: ${(props) => props.theme["base-text"]};
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
