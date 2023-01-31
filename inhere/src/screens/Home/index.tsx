import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text key="1" style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text key="2" style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>
    </View>
  );
}
