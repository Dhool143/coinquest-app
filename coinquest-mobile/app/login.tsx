import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";

// const GOALS = [
//   { icon: "🚨", title: "Emergency Fund",  desc: "Save for unexpected expenses" },
//   { icon: "💸", title: "Saving Money",    desc: "Track savings towards goals" },
//   { icon: "💳", title: "Pay Off Debt",    desc: "Create a plan to pay off debt" },
//   { icon: "🏠", title: "Buy a Home",      desc: "Save for a down payment" },
//   { icon: "✈️", title: "Travel Fund",     desc: "Save for your dream vacation" },
//   { icon: "🎓", title: "Education",       desc: "Save for tuition or courses" },
// ];

export default function GoalScreen() {
const [selected, setSelected] = useState<string[]>([]);

  const toggle = (title: string) => {
    setSelected((prev: string[]) =>
      prev.includes(title)
        ? prev.filter((t: string) => t !== title)
        : [...prev, title]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>COINQUEST</Text>
      </View>

      <Text style={styles.title}>Set Personal Goals</Text>
      <Text style={styles.subtitle}>
        Select options below to add widgets to the main page:
      </Text>


      {/* Confirm Button */}
      <TouchableOpacity
        style={[styles.confirmBtn, selected.length === 0 && styles.confirmBtnDisabled]}
      >
        <Text style={styles.confirmText}>
          CONFIRM ({selected.length} selected)
        </Text>
      </TouchableOpacity>

      

      <Text style={styles.footer}>© 2026 CoinQuest Fathiya</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 400,
    width: "100%",
    alignSelf: "center",
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
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 4,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a3a2a",
    alignSelf: "flex-start",
    marginBottom: 6,
    letterSpacing: 1,
  },

  subtitle: {
    fontSize: 13,
    color: "#6b7280",
    alignSelf: "flex-start",
    marginBottom: 16,
    lineHeight: 18,
  },

  goalCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f7f4",
    width: "100%",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: "#d1d5db",
    gap: 12,
  },

  goalCardActive: {
    backgroundColor: "#2d6a4f",
    borderColor: "#40916c",
  },

  goalIcon: {
    fontSize: 26,
    flexShrink: 0,
  },

  goalInfo: {
    flex: 1,
  },

  goalTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1a3a2a",
  },

  goalTitleActive: {
    color: "#ffffff",
  },

  goalDesc: {
    fontSize: 11,
    color: "#6b7280",
    marginTop: 3,
  },

  goalDescActive: {
    color: "rgba(255,255,255,0.7)",
  },

  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#d1d5db",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  circleActive: {
    borderColor: "#ffffff",
    backgroundColor: "#ffffff",
  },

  circleDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#2d6a4f",
  },

  confirmBtn: {
    backgroundColor: "#2d6a4f",
    width: "100%",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  confirmBtnDisabled: {
    opacity: 0.45,
  },

  confirmText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
    letterSpacing: 1,
  },

  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1a3a2a",
    width: "100%",
    padding: 14,
    borderRadius: 16,
    marginTop: 10,
    marginBottom: 20,
  },

  navButton: {
    alignItems: "center",
    gap: 4,
  },

  navIcon: { fontSize: 20 },

  navText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#2d6a4f",
    padding: 12,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
  },
  
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  footer: {
    fontWeight: "bold",
    color: "#6b7280",
    paddingBottom: 20,
  },
});
