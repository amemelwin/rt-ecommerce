import { Dispatch, SetStateAction, useEffect, useState } from "react";
import AdminTabNavigator from "./src/navigations/admin-tab-navigation";
import AuthStackNavigator from "./src/navigations/auth-stack-navigation";
import UserTabNavigator from "./src/navigations/user-tab-navigation";

export type GlobalProps= {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
  globalTest: ()=>void;
}

const App=()=> {
  const [isLogin,setIsLogin] = useState(true);
  const [isAdmin,setIsAdmin] = useState(true);
  const globalTest = ()=>console.warn("this is global amie!");
  const globalProps : GlobalProps = {
    setIsLogin,
    setIsAdmin,
    globalTest
  }
  useEffect(()=>{
  })
  return <AdminTabNavigator globalProps={globalProps}/>
  //<AuthStackNavigator globalProps={globalProps}/>
  // <AdminTabNavigator globalProps={globalProps}/>

  !isLogin?
        <AuthStackNavigator globalProps={globalProps}/>
        :
        isAdmin?
          <AdminTabNavigator globalProps={globalProps}/>
          :
          <UserTabNavigator globalProps={globalProps}/>
}
export default App;
