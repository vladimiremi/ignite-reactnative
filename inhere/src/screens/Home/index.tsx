import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const participants = [
    "Vladimir",
    "Rafael",
    "Ricardo",
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
    console.log("Adicionar participante");
  }

  function handleParticipantRemove(name: string) {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant, index) => (
          <Participant
            key={index}
            name={participant}
            onRemove={() => handleParticipantRemove("Vladimir")}
          />
        ))}
      </ScrollView>
    </View>
  );
}
