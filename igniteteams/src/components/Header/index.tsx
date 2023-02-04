import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImage from "@assets/logo.png";

type HeadersProps = {
  showBackButton?: boolean;
};
export function Header({ showBackButton = false }: HeadersProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImage} />
    </Container>
  );
}
