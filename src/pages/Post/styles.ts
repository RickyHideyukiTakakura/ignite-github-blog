import styled from "styled-components";

export const PostContainer = styled.main`
  width: 864px;

  margin: 0 auto;
`;

export const PostInfoContainer = styled.div`
  height: 168px;
  padding: 2rem;
  margin-top: calc(80px - 168px);

  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  position: relative;
  z-index: 1;

  strong {
    display: block;
    margin-top: 1.25rem;

    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const PostInfoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};

    img {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`;

export const InfoList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  margin-top: 0.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme["base-subtitle"]};

    img {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`;

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
`;
