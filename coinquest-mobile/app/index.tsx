import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (

    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.menu}></Text>
        <Text style={styles.headerTitle}>☰ COINQUEST</Text>


      </View>
      <Text style={styles.logo}>💰</Text>
      {/* <Text style={styles.title}>CoinQuest</Text> */}
      
      <Text style={styles.subtitle}> Track your saving goals and manage your finances smarter</Text>

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
    backgroundColor: "#5FA8D3",
   
  },

  header: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
    paddingBottom: 20,
   justifyContent:  "flex-start",

  },

  menu: {
    


  },


  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
    padding: 20,



  },

  logo:{
    fontSize: 60,
    marginBottom: 10,

  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
   
  },

  subtitle: {
    fontSize: 16,
    color: "#CBD5E1",
    marginBottom: 40,
    paddingHorizontal: 20,
    textAlign: "center",

  },

  button: {
    backgroundColor: "white",
    borderRadius: 12,
    width: "80%",
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
  },

  buttonText: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
   

  },

  secondaryButton: {
    borderWidth: 2,
    borderColor: "#22C55E",
    width: "80%",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "white",

  },


  secondaryText: {
    color: "#22C55E",
    fontSize: 18,
    fontWeight: "bold",


  },

  footer: {
    fontWeight: "bold",
    alignItems: "center",
    padding: 50,


  },
});
