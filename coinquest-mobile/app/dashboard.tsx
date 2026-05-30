import {View, Text, StyleSheet} from "react-native";

export default function DashboardScreenHome() {

    return(
       <View style={styles.container}>

        <View style={styles.header}>
        <Text style={styles.menu}></Text>
        <Text style={styles.headerTitle}>☰ COINQUEST</Text>
        </View>
        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.greeting}>Welcome Back 👋</Text>

        <View style={styles.balanceCard}>
        <Text style={styles.cardTitle}>Total Savings</Text>
        <Text style={styles.balance}>$2,800</Text>
        </View>

        <View style={styles.card}>
        <Text style={styles.cardTitle}>Action Goal</Text>
        <Text style={styles.cardValue}>3 Goal</Text>
        </View>

        <View style={styles.card}>
        <Text style={styles.cardTitle}>Link Accounts</Text>
        <Text style={styles.cardValue}> 1 Account</Text>
        </View>

        <View style={styles.card}>
        <Text style={styles.cardTitle}> Monthly Progress</Text>
        <Text style={styles.cardValue}>75%</Text>

        {/* <button onClick={}></button> */}

       
        </View>


      <Text style={styles.footer}>© 2026 CoinQuest Fathiya</Text>

       </View>

    );
}


const styles = StyleSheet.create ({

    container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#5FA8D3",
    alignItems: "center",
    maxWidth: 400,
    width: "100%",
   justifyContent: "flex-start",
   alignSelf: "center",
   
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


    title: {
        fontSize: 35,
        fontWeight: "black",
        fontFamily: "italic",
        marginBottom: 30,
        padding: 20,



    },

    greeting: {
    fontSize: 20,
     marginBottom: 20,
     marginTop: 40,

    },

    balanceCard: {
     backgroundColor: "#22C55E",
     padding: 25,
     marginBottom: 20,
     borderRadius: 20,
     

    },


    cardTitle: {
        color: "#475569",
        fontSize: 16,

    },

    balance: {
   color: "white",
   fontSize: 36,
   fontWeight: 'bold',
   marginTop: 10,

    },

    card: {
        backgroundColor: "white",
        marginBottom: 15,
        padding: 20,
        borderRadius: 15,
    },

    cardValue: {
        fontWeight: "bold",
        fontSize: 24,
        marginTop: 8,


    },

    footer: {
       fontWeight: "bold",
       alignItems: "center",
       marginBottom: 20,
       padding: 20,


    },



})

