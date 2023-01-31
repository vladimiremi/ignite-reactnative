import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const participants = [
    "Vladimir",
    "Rafael",
    "Amanda",
    "Ana",
    "Maria",
    "João",
    "José",
    "Pedro",
    "Paulo",
    "Ricardo",
  ];

  function handleParticipantAdd() {
    if (participants.includes("Ricardo")) {
      Alert.alert(
        "Participante Existe",
        "Já existe um participante com esse nome"
      );
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
    console.log(`Remover participante ${name}`);
  }
  return (
    <View style={styles.container}>
      <Text key="1" style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text key="2" style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença
          </Text>
        )}
      />
    </View>
  );
}
