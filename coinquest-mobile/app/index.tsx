import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>COINQUEST</Text>
      </View>

      {/* Logo */}
      <Text style={styles.logo}>💰</Text>
      <Text style={styles.title}>CoinQuest</Text>
      <Text style={styles.subtitle}>
        Track your saving goals and manage your finances smarter
      </Text>

      {/* Buttons */}
      <Link href="/login" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </Link>

      <Link href="/dashboard" asChild>
        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>View Dashboard</Text>
        </Pressable>
      </Link>
      

      <Text style={styles.footer}>© 2026 CoinQuest Fathiya</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 400,
    width: "100%",
    alignSelf: "center",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f0e8",
  },

  header: {
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a3a2a",
    borderRadius: 12,
    marginBottom: 30,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 4,
  },

  logo: {
    fontSize: 72,
    marginBottom: 12,
    marginTop: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1a3a2a",
    marginBottom: 10,
    letterSpacing: 2,
  },

  subtitle: {
    fontSize: 15,
    color: "#6b7280",
    marginBottom: 40,
    paddingHorizontal: 20,
    textAlign: "center",
    lineHeight: 22,
  },

  button: {
    backgroundColor: "#2d6a4f",
    borderRadius: 12,
    width: "80%",
    padding: 16,
    alignItems: "center",
    marginBottom: 14,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  secondaryButton: {
    borderWidth: 2,
    borderColor: "#2d6a4f",
    width: "80%",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  secondaryText: {
    color: "#2d6a4f",
    fontSize: 18,
    fontWeight: "bold",
  },

 

  footer: {
    fontWeight: "bold",
    color: "#6b7280",
    marginTop: "auto",
    paddingBottom: 20,
  },
});

