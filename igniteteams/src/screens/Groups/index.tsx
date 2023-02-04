import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./styles";

export function Group() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com sua turma" />
    </Container>
  );
}
