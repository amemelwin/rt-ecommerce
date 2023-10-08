import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalProps } from "../../../App";
import HomeScreen from "../../screens/admin/HomeScreen";
import DetailScreen from "../../screens/user/Home/DetailScreen";
export type HomeTabScreenProps = NativeStackScreenProps<HomeStackNavigatorList> & GlobalProps;
export type HomeStackNavigatorList = {
    home: undefined;
    detail: {
        name: String;
    }
}
type HomeStackProp = {
    globalProps : GlobalProps;
}
const HomeStackNavigation = ({globalProps}:HomeStackProp)=>{
    // const Stack = createNativeStackNavigator<HomeStackNavigatorList>();
    const Tab = createBottomTabNavigator<HomeStackNavigatorList>();

    return <NavigationContainer independent>
        <Tab.Navigator>
            <Tab.Screen 
                name = 'home'
                component={(props:NativeStackScreenProps<HomeStackNavigatorList>)=><HomeScreen {...props} {...globalProps} />}
            />
            <Tab.Screen 
                name = "detail"
                component={(props:NativeStackScreenProps<HomeStackNavigatorList>)=><DetailScreen {...props} {...globalProps} />}
            />
        </Tab.Navigator>
    </NavigationContainer>
}
export default HomeStackNavigation;