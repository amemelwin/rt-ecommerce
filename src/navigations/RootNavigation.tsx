import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/user/Home/HomeScreen";
import DetailScreen from "../screens/user/Home/DetailScreen";
import UserTabNavigator, { UserTabNavigatorList } from "./user-tab-navigation";
import { GlobalProps } from "../../App";
import InfoScreen from "../screens/user/InfoScreen";
import SettingScreen from "../screens/user/SettingScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';

type RootTabProp ={
    globalProps: GlobalProps;
}
export type RootParamList = {
    Home: undefined;
    Profile:undefined;
    Detail: undefined;
    HomeScreen: undefined;
}
export type ScreenProps = NativeStackScreenProps<RootParamList>;

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator<RootParamList>();
const TabNavigator = ({globalProps}:RootTabProp)=>{
  return (
    <Tab.Navigator             
              screenOptions={({ route }) => ({
                  tabBarLabel:route.name,
                  tabBarIcon: ({ focused, color }) => {
                  let iconName:string = '' ;
      
                  if (route.name === 'Info') {
                      iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'; 
                  }
                  else if (route.name === 'Home') {
                      iconName = focused
                      ? 'home'
                      : 'home-outline';
                  }else if (route.name === 'Setting') {
                      iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons 
                      name={iconName}
                      size={focused?35:28} 
                      color={color} 
                  />;
                  },
                  tabBarActiveTintColor: 'tomato',
                  tabBarInactiveTintColor: 'gray',
              })}
              >
  
      <Tab.Screen 
          name="Home" 
          component={(props:NativeStackScreenProps<UserTabNavigatorList>)=><HomeScreen {...props} {...globalProps}/>} 
      />
      <Tab.Screen name="Info" component={InfoScreen} />
      <Tab.Screen 
          name="Setting" 
          component={(props:NativeStackScreenProps<UserTabNavigatorList>)=><SettingScreen {...props} {...globalProps}/>}
      /> 
      </Tab.Navigator>
  )
}
const StackNavigator = ({globalProps}:RootTabProp)=>{
  return (
    <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={(props:NativeStackScreenProps<RootParamList>)=><HomeScreen {...props} {...globalProps}/>} /> */}
      {/* <Stack.Screen 
            name = 'Home'
            component={(props:NativeStackScreenProps<RootParamList>)=><HomeScreen {...props} {...globalProps} />}
       
        /> */}
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}
const RootNavigation = ({globalProps}:RootTabProp)=>{
    return <NavigationContainer>
    <UserTabNavigator globalProps={globalProps}/>
  </NavigationContainer>
}
export default RootNavigation;