

import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function LoginScreen() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>COINQUEST</Text>
      </View>

      {/* Logo */}
      <Text style={styles.logo}>💰</Text>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>

      {/* Inputs */}
      <TextInput
        placeholder="Enter Email"
        placeholderTextColor="#a0aec0"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Enter Password"
        placeholderTextColor="#a0aec0"
        secureTextEntry
        style={styles.input}
      />

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Go to Sign Up */}
      <Link href="/" asChild>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>Back to Home</Text>
        </TouchableOpacity>
      </Link>

      

      <Text style={styles.footer}>© 2026 CoinQuest Fathiya</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    maxWidth: 400,
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#f5f0e8",
  },

  header: {
    height: 60,
    width: "100%",
    flexDirection: "row",
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
    fontSize: 64,
    marginBottom: 12,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1a3a2a",
    marginBottom: 6,
    letterSpacing: 1,
  },

  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 30,
  },

  input: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: "#d1d5db",
    backgroundColor: "#ffffff",
    padding: 14,
    marginBottom: 14,
    borderRadius: 10,
    fontSize: 15,
    color: "#1a1a1a",
  },

  button: {
    backgroundColor: "#2d6a4f",
    padding: 16,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },

  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },

  secondaryButton: {
    borderWidth: 1.5,
    borderColor: "#2d6a4f",
    width: "100%",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "transparent",
  },

  secondaryText: {
    color: "#2d6a4f",
    fontSize: 15,
    fontWeight: "bold",
  },

  footer: {
    fontWeight: "bold",
    color: "#6b7280",
    marginTop: "auto",
    paddingBottom: 20,
  },
});
