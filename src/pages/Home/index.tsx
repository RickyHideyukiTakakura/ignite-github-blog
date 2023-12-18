import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { SearchForm } from "./components/SearchForm";
import {
  CardsListContainer,
  HomeContainer,
  PublicationsContainer,
} from "./styles";

export function Home() {
  return (
    <>
      <Header />

      <HomeContainer>
        <Profile />

        <PublicationsContainer>
          <header>
            <strong>Publicações</strong>
            <span>6 publicações</span>
          </header>

          <SearchForm />

          <CardsListContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardsListContainer>
        </PublicationsContainer>
      </HomeContainer>
    </>
  );
}
