import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CoinQuest</Text>
      <Text>Welcome to my Finance App</Text>

      <Link href="/login">Go to Login</Link>
      <Link href="/dashboard">Go to Dashboard</Link>
      <Link href="/goals">Go to Goals</Link>
      <Link href="/settings">Go to Settings</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
