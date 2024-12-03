import { Text, View, StyleSheet, Image } from "react-native";
import Card from "@/app/UI/Card";
import ScrollImg from "@/app/components/ScrollImg";

export default function Index() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text}>Gallery</Text>
        </View>
        <ScrollImg/>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        backgroundColor:'#636363',
        display: 'flex',
        alignItems: 'center',
    },
    header: {
        width:'100%',
        height:50,
        backgroundColor:'grey',
        display:'flex',
        justifyContent:'center',
    },
    text: {
        color:'white',
        fontSize:24,
        marginLeft:15,
    },
    card: {
        width: 370,
        height:370,
        display: 'flex',
        flexDirection: 'column',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius:10,
    },
    image: {
        width: '90%',
        height:280,
        margin:15

    }
})
