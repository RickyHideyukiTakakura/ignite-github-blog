import arrowLeftIcon from "../../assets/icons/arrow-left.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import commentIcon from "../../assets/icons/comment.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkIcon from "../../assets/icons/link.svg";
import { Header } from "../../components/Header";
import {
  InfoList,
  PostContainer,
  PostContent,
  PostInfoContainer,
  PostInfoHeader,
} from "./styles";

export function Post() {
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

          <strong>JavaScript data types and data structures</strong>

          <InfoList>
            <li>
              <img src={githubIcon} />
              RickyTakakura
            </li>
            <li>
              <img src={calendarIcon} />
              Há 1 dia
            </li>
            <li>
              <img src={commentIcon} />
              15 comentários
            </li>
          </InfoList>
        </PostInfoContainer>

        <PostContent>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </PostContent>
      </PostContainer>
    </>
  );
}
