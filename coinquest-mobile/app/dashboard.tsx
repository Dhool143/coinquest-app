import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function DashboardScreenHome() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>COINQUEST</Text>
      </View>

      
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.greeting}>Good to see Isaac 👋</Text>

   
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Total Savings</Text>
        <Text style={styles.balanceAmount}>$2,800</Text>
        <Text style={styles.balanceSub}>↑ +2.4% this month</Text>
      </View>

    
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>🎯</Text>
          <Text style={styles.statValue}>3</Text>
          <Text style={styles.statLabel}>Goals</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>🏦</Text>
          <Text style={styles.statValue}>1</Text>
          <Text style={styles.statLabel}>Accounts</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>📊</Text>
          <Text style={styles.statValue}>75%</Text>
          <Text style={styles.statLabel}>Progress</Text>
        </View>
      </View>

    
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Goal Progress</Text>

        <Text style={styles.goalName}>Emergency Fund</Text>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: "80%" }]} />
        </View>
        <Text style={styles.progressPercent}>80%</Text>

        <Text style={styles.goalName}>Vacation Fund</Text>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: "50%" }]} />
        </View>
        <Text style={styles.progressPercent}>50%</Text>

        <Text style={styles.goalName}>New Laptop</Text>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: "30%" }]} />
        </View>
        <Text style={styles.progressPercent}>30%</Text>
      </View>

 
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
    padding: 20,
    backgroundColor: "#f5f0e8",
    alignItems: "center",
    maxWidth: 400,
    width: "100%",
    alignSelf: "center",
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a3a2a",
    marginBottom: 4,
    letterSpacing: 1,
    alignSelf: "flex-start",
  },

  greeting: {
    fontSize: 16,
    color: "#6b7280",
    marginBottom: 20,
    alignSelf: "flex-start",
  },

  balanceCard: {
    backgroundColor: "#2d6a4f",
    width: "100%",
    padding: 24,
    borderRadius: 16,
    marginBottom: 16,
    alignItems: "center",
  },

  balanceLabel: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 14,
  },

  balanceAmount: {
    color: "#ffffff",
    fontSize: 42,
    fontWeight: "bold",
    marginTop: 6,
  },

  balanceSub: {
    color: "#a8d5b5",
    fontSize: 13,
    marginTop: 4,
  },

  statsRow: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
    marginBottom: 16,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#1a3a2a",
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
  },

  statIcon: {
    fontSize: 22,
    marginBottom: 4,
  },

  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },

  statLabel: {
    fontSize: 11,
    color: "rgba(255,255,255,0.55)",
    marginTop: 2,
  },

  card: {
    backgroundColor: "#ffffff",
    width: "100%",
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a3a2a",
    marginBottom: 14,
    letterSpacing: 0.5,
  },

  goalName: {
    fontSize: 13,
    color: "#374151",
    marginBottom: 4,
    marginTop: 8,
  },

  progressBarBg: {
    width: "100%",
    height: 8,
    backgroundColor: "#e5e7eb",
    borderRadius: 10,
  },

  progressBarFill: {
    height: 8,
    backgroundColor: "#2d6a4f",
    borderRadius: 10,
  },

  progressPercent: {
    fontSize: 11,
    color: "#6b7280",
    textAlign: "right",
    marginTop: 2,
  },

  activityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },

  activityIcon: {
    fontSize: 18,
  },

  activityText: {
    fontSize: 13,
    color: "#374151",
    flex: 1,
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