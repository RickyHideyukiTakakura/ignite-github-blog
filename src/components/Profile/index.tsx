import { useContext } from "react";
import buildingIcon from "../../assets/icons/building.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkIcon from "../../assets/icons/link.svg";
import userGroupIcon from "../../assets/icons/user-group.svg";
import { GithubContext } from "../../contexts/GithubContext";
import {
  InfoList,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
} from "./styles";

export function Profile() {
  const { userData } = useContext(GithubContext);

  return (
    <ProfileContainer>
      <img src={userData.avatar_url} />

      <ProfileContent>
        <ProfileHeader>
          <h2>{userData.name}</h2>
          <a href="#">
            Github
            <img src={linkIcon} />
          </a>
        </ProfileHeader>

        <span>{userData.bio}</span>

        <InfoList>
          <li>
            <img src={githubIcon} />
            {userData.login}
          </li>
          <li>
            <img src={buildingIcon} />
            {userData.company}
          </li>
          <li>
            <img src={userGroupIcon} />
            {userData.followers}
          </li>
        </InfoList>
      </ProfileContent>
    </ProfileContainer>
  );
}
