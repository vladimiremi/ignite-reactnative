import { Container, SubTitle, Title } from "./style";

type HighlightProps = {
  title: string;
  subtitle: string;
};

export function Highlight({ subtitle, title }: HighlightProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
