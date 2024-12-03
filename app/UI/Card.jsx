import {View, StyleSheet, Text, Image} from "react-native";


export default function Card({ item }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri: item.url}} />
            <Text style={styles.text}>{item.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        width: 400,
        height:400,
        display: 'flex',
        flexDirection: 'column',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        marginTop:20,
        backgroundColor: '#838383',
    },
    image: {
        width: '100%',
        height:300
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop:4,
        marginLeft:15
    }
})