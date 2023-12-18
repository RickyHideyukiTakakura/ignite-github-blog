import effectLeft from "../../assets/header-effect-left.png";
import effectRight from "../../assets/header-effect-right.png";
import logoImage from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={effectLeft} />
      <img src={logoImage} />
      <img src={effectRight} />
    </HeaderContainer>
  );
}
