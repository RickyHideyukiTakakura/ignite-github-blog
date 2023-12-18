import { useContext } from "react";
import { useParams } from "react-router-dom";
import arrowLeftIcon from "../../assets/icons/arrow-left.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import commentIcon from "../../assets/icons/comment.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkIcon from "../../assets/icons/link.svg";
import { Header } from "../../components/Header";
import { GithubContext } from "../../contexts/GithubContext";
import { dataFormatter } from "../../utils/formatter";
import {
  InfoList,
  PostContainer,
  PostContent,
  PostInfoContainer,
  PostInfoHeader,
} from "./styles";

export function Post() {
  const { issues } = useContext(GithubContext);
  const params = useParams();

  const issueByNumber =
    issues &&
    issues.items &&
    issues.items.find((issue) => issue.number === Number(params.id));

  if (!issueByNumber) {
    return null;
  }

  return (
    <>
      <Header />

      <PostContainer>
        <PostInfoContainer>
          <PostInfoHeader>
            <a href="/">
              <img src={arrowLeftIcon} alt="" />
              Voltar
            </a>
            <a href="#">
              Ver no Github
              <img src={linkIcon} alt="" />
            </a>
          </PostInfoHeader>

          <strong>{issueByNumber.title}</strong>

          <InfoList>
            <li>
              <img src={githubIcon} />
              {issueByNumber.user.login}
            </li>
            <li>
              <img src={calendarIcon} />
              {dataFormatter.format(new Date(issueByNumber.created_at))}
            </li>
            <li>
              <img src={commentIcon} />
              {issueByNumber.comments} comentários
            </li>
          </InfoList>
        </PostInfoContainer>

        <PostContent>{issueByNumber.body}</PostContent>
      </PostContainer>
    </>
  );
}
