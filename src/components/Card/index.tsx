import { useNavigate } from "react-router-dom";
import { CardContainer } from "./styles";

interface CardProps {
  title: string;
  created_at: string;
  body: string;
  postNumber: number;
}

export function Card({ title, created_at, body, postNumber }: CardProps) {
  const navigate = useNavigate();

  function handleNavigateToPost(id: number) {
    navigate(`/post/${id}`);
  }

  return (
    <CardContainer onClick={() => handleNavigateToPost(postNumber)}>
      <header>
        <strong>{title}</strong>
        <span>{created_at}</span>
      </header>
      <p>{body}</p>
    </CardContainer>
  );
}
