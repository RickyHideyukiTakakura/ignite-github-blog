import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 2rem 2rem 2rem 2.5rem;

  margin-top: calc(124px - 212px);

  position: relative;
  z-index: 1;

  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  & > img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
  }
`;

export const ProfileContent = styled.div`
  flex: 1;

  span {
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;

  h2 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.5rem;
    line-height: 130%;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;

    img {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`;

export const InfoList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-top: 1.5rem;

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
