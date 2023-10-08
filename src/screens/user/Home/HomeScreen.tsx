import { StyleSheet, Text, View } from "react-native";
import { ScreenProps } from "../../../navigations/user-tab-navigation";
import { HomeTabScreenProps } from "../../../navigations/admin-tab-navigation/home-stack-navigation";
const HomeScreen = ({navigation}:HomeTabScreenProps)=>{
    //    const navigation = useNavigation<Nav>();
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Text onPress={()=>navigation.navigate("detail",{name: "Amie"})}>Go to details</Text>
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
export default HomeScreen;