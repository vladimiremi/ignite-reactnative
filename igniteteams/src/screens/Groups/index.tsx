import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";
import { useState } from "react";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./styles";
import { ListEmpty } from "@components/ListEmpty";

export function Group() {
  const [groups, setGroups] = useState<string[]>([]);
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={() => <GroupCard title="Galera do ignite" />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
    </Container>
  );
}
