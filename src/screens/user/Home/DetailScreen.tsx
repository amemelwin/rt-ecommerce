import { View,StyleSheet,Text } from "react-native";
import { HomeTabScreenProps } from "../../../navigations/admin-tab-navigation/home-stack-navigation";

const DetailScreen = ({globalTest}:HomeTabScreenProps)=>{
    return (
        <View style={styles.container}>
            <Text>Info</Text>
            <Text 
                onPress={globalTest} 
                style={{marginTop: 30,color: "red",fontSize: 35}}
            >
                Global Test
            </Text>
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