import buildingIcon from "../../assets/icons/building.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkIcon from "../../assets/icons/link.svg";
import userGroupIcon from "../../assets/icons/user-group.svg";
import {
  InfoList,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
} from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/rickyhideyukitakakura.png" />

      <ProfileContent>
        <ProfileHeader>
          <h2>Ricky Takakura</h2>
          <a href="#">
            Github
            <img src={linkIcon} />
          </a>
        </ProfileHeader>

        <span>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </span>

        <InfoList>
          <li>
            <img src={githubIcon} />
            RickyTakakura
          </li>
          <li>
            <img src={buildingIcon} />
            UTFPR
          </li>
          <li>
            <img src={userGroupIcon} />
            15 Followers
          </li>
        </InfoList>
      </ProfileContent>
    </ProfileContainer>
  );
}
