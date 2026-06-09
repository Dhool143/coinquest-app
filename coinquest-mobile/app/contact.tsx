
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";

export default function ContactUs() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field:string ) => (value: string) => setForm({ ...form, [field]: (value )});
  const allFilled = form.firstName && form.lastName && form.email && form.message;

  if (submitted) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>COINQUEST</Text>
        </View>
        <Text style={styles.successIcon}>✅</Text>
        <Text style={styles.successTitle}>Message Sent!</Text>
        <Text style={styles.successSub}>
          We'll get back to you at {form.email}
        </Text>
        <TouchableOpacity
          style={styles.confirmBtn}
          onPress={() => { setForm({ firstName:"", lastName:"", email:"", message:"" }); setSubmitted(false); }}
        >
          <Text style={styles.confirmText}>SEND ANOTHER</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>COINQUEST</Text>
      </View>

      <Text style={styles.title}>Contact Us</Text>

      {/* Form */}
      <Text style={styles.label}>First Name</Text>
      <TextInput
        placeholder="Enter first name"
        style={styles.input}
        value={form.firstName}
        onChangeText={update("firstName")}
      />

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        placeholder="Enter last name"
        style={styles.input}
        value={form.lastName}
        onChangeText={update("lastName")}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="Enter email"
        style={styles.input}
        value={form.email}
        onChangeText={update("email")}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>What can we help you with?</Text>
      <TextInput
        placeholder="Write your message..."
        style={[styles.input, styles.textArea]}
        value={form.message}
        onChangeText={update("message")}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity
        style={[styles.confirmBtn, !allFilled && styles.confirmBtnDisabled]}
        onPress={() => allFilled && setSubmitted(true)}
      >
        <Text style={styles.confirmText}>SUBMIT</Text>
      </TouchableOpacity>

      {/* Contact Info */}
      {[
        { icon: "📞", text: "1-800-COINQUEST" },
        { icon: "✉️", text: "support@coinquest.com" },
        { icon: "📍", text: "123 Finance St, Seattle, WA" },
        { icon: "🕐", text: "Mon–Fri  9am – 6pm EST" },
      ].map((c) => (
        <View key={c.text} style={styles.infoRow}>
          <Text style={styles.infoIcon}>{c.icon}</Text>
          <Text style={styles.infoText}>{c.text}</Text>
        </View>
      ))}

      {/* Bottom Nav */}
      <View style={styles.navContainer}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navIcon}>🏠</Text>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/goals" asChild>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navIcon}>🎯</Text>
            <Text style={styles.navText}>Goals</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/settings" asChild>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navIcon}>⚙️</Text>
            <Text style={styles.navText}>Settings</Text>
          </TouchableOpacity>
        </Link>
      </View>

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
    marginBottom: 16,
    letterSpacing: 1,
  },

  label: {
    fontSize: 11,
    color: "#6b7280",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    alignSelf: "flex-start",
    marginBottom: 4,
  },

  input: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: "#d1d5db",
    backgroundColor: "#ffffff",
    padding: 12,
    marginBottom: 14,
    borderRadius: 10,
    fontSize: 14,
    color: "#1a1a1a",
  },

  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  confirmBtn: {
    backgroundColor: "#2d6a4f",
    width: "100%",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
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

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#ffffff",
    width: "100%",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
  },

  infoIcon: { fontSize: 18 },

  infoText: {
    fontSize: 13,
    color: "#1a3a2a",
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



  successIcon: {
    fontSize: 64,
    marginTop: 40,
    marginBottom: 16,
  },

  successTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1a3a2a",
    marginBottom: 8,
  },

  successSub: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 20,
  },

  footer: {
    fontWeight: "bold",
    color: "#6b7280",
    paddingBottom: 10,
    marginTop: 8,
  },

});
