import { useState,createContext,useContext } from "react";

const userStates ={
    isLoggedin: null,
    login:()=>{},
    logout:()=>{}
}
const UserContext = createContext(userStates)

export function AuthProvider({children}){
    const [userData,setUserData]= useState()

    const login=(userData)=>{
       console.log(userData,'from conext')
         setUserData(userData)
    }

    return (
     <UserContext.Provider value={{login, userData}}>{children}</UserContext.Provider>
    )

}

 export const useUser =()=>{
    const context = useContext(UserContext);

    if(!context){
        throw new Error ('please provide the parent comp with context ')

    }

    return context;
 }

