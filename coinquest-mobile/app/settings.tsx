import {View, Text , StyleSheet, TextInput, TouchableOpacity} from "react-native";

export default function SettingScreen(){
 return (
    <View style={styles.container}>
      <View style={styles.header}>
         <Text style={styles.headerTitle}>☰ COINQUEST</Text>


      </View>
     <Text style={styles.title}>Setting Screen </Text>

     <Text style={styles.subtitle}>User Setting</Text>

     <TouchableOpacity style={styles.settingButton}>
      <Text>Profile</Text>
   </TouchableOpacity>
      <TouchableOpacity style={styles.settingButton}>
      <Text>Password</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.settingButton}>
      <Text>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingButton}>
      <Text>Privacy</Text>




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

    title: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 30,
      paddingBottom: 40,
    
     
    },

    subtitle: {
      fontSize: 20,
      fontWeight: "bold",


    },

    settingButton: {
      width: "100%",
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
      backgroundColor: "white",


    },

   
  
    footer: {
      fontWeight: "bold",
      alignItems: "center",
      padding: 50,
  
  
    },








});