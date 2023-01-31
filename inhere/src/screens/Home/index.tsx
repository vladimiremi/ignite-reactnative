import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {
    console.log("Adicionar participante");
  }
  return (
    <View style={styles.container}>
      <Text key="1" style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text key="2" style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
      />
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
