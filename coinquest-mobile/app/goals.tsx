import { View, Text, StyleSheet} from "react-native";


export default function GoalScreen(){
 return (

    <View style={styles.container}>

<View style={styles.header}>
        <Text style={styles.menu}></Text>
        <Text style={styles.headerTitle}>☰ COINQUEST</Text>


      </View>
      
  <Text style={styles.title}>Goals Screen</Text>
    
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

    headerTitle: {
      fontSize: 30,
      fontWeight: "bold",
      marginTop: 40,
      padding: 20,
  
  
  
    },

    title: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 10,
      paddingBottom: 20,
     
    },
  
    footer: {
      fontWeight: "bold",
      alignItems: "center",
      padding: 50,
  
  
    },

});
