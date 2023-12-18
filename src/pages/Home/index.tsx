import { useContext } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { GithubContext } from "../../contexts/GithubContext";
import { dataFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import {
  CardsListContainer,
  HomeContainer,
  PublicationsContainer,
} from "./styles";

export function Home() {
  const { issues } = useContext(GithubContext);

  return (
    <>
      <Header />

      <HomeContainer>
        <Profile />

        <PublicationsContainer>
          <header>
            <strong>Publicações</strong>
            <span>{issues.total_count} publicações</span>
          </header>

          <SearchForm />

          <CardsListContainer>
            {issues &&
              issues.items &&
              issues.items.map((issue) => {
                return (
                  <Card
                    key={issue.id}
                    title={issue.title}
                    created_at={dataFormatter.format(
                      new Date(issue.created_at)
                    )}
                    body={issue.body}
                    postNumber={issue.number}
                  />
                );
              })}
          </CardsListContainer>
        </PublicationsContainer>
      </HomeContainer>
    </>
  );
}
