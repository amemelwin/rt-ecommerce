import { View,StyleSheet,Text } from "react-native";

const DetailScreen = ()=>{
    return (
        <View style={styles.container}>
            <Text>Info</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        fontWeight:'bold'
    }
})
export default DetailScreen;