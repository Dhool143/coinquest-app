

import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from "react-native";


export default function LoginScreen(){

    return (
        <View style={styles.container}>
            <View style={styles.header}> 
            <Text style={styles.headerTitle}>☰ COINQUEST</Text>


            </View>
            <Text style={styles.title}>Login Screen</Text>
            <TextInput placeholder="Enter Email" style={styles.input}/>
            <TextInput placeholder="Enter Password" secureTextEntry style={styles.input}/>
            <TouchableOpacity style={styles.button}/>
            <Text style={styles.buttonText}>Sign In</Text>


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
       
      },
  
      headerTitle: {
        fontSize: 30,
        fontWeight: "bold",
       
    
    
      },


    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 30,
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


    footer: {
        fontWeight: "bold",
        alignItems: "center",
        padding: 50,
    
    
      },



});
