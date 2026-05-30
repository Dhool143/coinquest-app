import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function contactUs() {

return (

    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerTitle}>☰ COINQUEST</Text>
        </View>
        <Text style={styles.title}>Contact Us</Text>

            <TextInput placeholder="First Name" style={styles.input}/>
            <TextInput  placeholder="Last Name" style={styles.input}/>
            <TextInput placeholder="Email" style={styles.input}/>
             <TextInput placeholder="What can we help you with" style={styles.input}/>
           
           <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Subimt</Text>
            </TouchableOpacity>


     



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

    

    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        marginBottom: 15,
        borderRadius: 10,
    },

    button: {
        backgroundColor: "black",
        padding: 20,
        width: "100%",
        borderRadius: 10,
        alignItems: "center"
    },
    buttonText: {
   color: "white",
   fontWeight: "bold"

    },


    title: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 30,
      paddingBottom: 40,
    
     
    },
  
    footer: {
      fontWeight: "bold",
      alignItems: "center",
      padding: 50,
  
  
    },


     
    

});
