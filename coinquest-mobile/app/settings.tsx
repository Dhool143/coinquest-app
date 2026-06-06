import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function SettingScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

     
      <View style={styles.header}>
        <Text style={styles.headerTitle}>COINQUEST</Text>
      </View>

      <Text style={styles.title}>Settings</Text>

     
      <View style={styles.avatarBlock}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>ID</Text>
        </View>
        <View>
          <Text style={styles.avatarName}>Isaac</Text>
          <Text style={styles.avatarEmail}>Isaac.doe@email.com</Text>
        </View>
      </View>

     
      <Text style={styles.sectionLabel}>User Settings</Text>

      {[
        {  label: "Profile",       desc: "Edit your name and photo" },
        { label: "Password",      desc: "Change your password" },
        {  label: "Security",      desc: "Two-factor authentication" },
        {  label: "Notifications", desc: "Manage alerts & emails" },
      ].map((item) => (
        <TouchableOpacity key={item.label} style={styles.settingRow}>
         
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>{item.label}</Text>
            <Text style={styles.settingDesc}>{item.desc}</Text>
          </View>
          <Text style={styles.settingArrow}>›</Text>
        </TouchableOpacity>
      ))}


<Link href="/login" asChild>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>
</Link>

<Link href="/goals" asChild>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Goals</Text>
  </TouchableOpacity>
</Link>

<Link href="/contact" asChild>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Contact</Text>
  </TouchableOpacity>
</Link>

<Link href="/settings" asChild>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Settings</Text>
  </TouchableOpacity>
</Link>

     
  

     

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
    fontSize: 26,
    fontWeight: "bold",
    color: "#1a3a2a",
    alignSelf: "flex-start",
    marginBottom: 16,
    letterSpacing: 1,
  },

  avatarBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#ffffff",
    width: "100%",
    padding: 16,
    borderRadius: 14,
    marginBottom: 20,
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#1a3a2a",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#c9a84c",
    fontWeight: "bold",
    fontSize: 18,
  },

  avatarName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a3a2a",
  },

  avatarEmail: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 2,
  },

  sectionLabel: {
    alignSelf: "flex-start",
    fontSize: 12,
    fontWeight: "bold",
    color: "#6b7280",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 10,
    marginTop: 4,
  },

  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2d6a4f",
    width: "100%",
    padding: 14,
    borderRadius: 12,
    marginBottom: 8,
    gap: 12,
  },

  settingIcon: {
    fontSize: 22,
    width: 30,
    textAlign: "center",
  },

  settingInfo: {
    flex: 1,
  },

  settingLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 0.5,
  },

  settingDesc: {
    fontSize: 11,
    color: "rgba(255,255,255,0.65)",
    marginTop: 2,
  },

  settingArrow: {
    fontSize: 22,
    color: "rgba(255,255,255,0.4)",
  },

  signOutBtn: {
    width: "100%",
    marginTop: 10,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#dc2626",
    backgroundColor: "transparent",
    marginBottom: 20,
  },

  signOutText: {
    color: "#dc2626",
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 0.5,
  },

  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1a3a2a",
    width: "100%",
    padding: 14,
    borderRadius: 16,
    marginBottom: 20,
  },

  navButton: {
    alignItems: "center",
    gap: 4,
  },

  navIcon: {
    fontSize: 20,
  },

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
