import { useState,createContext,useContext } from "react";
import { useEffect } from "react";
import axios from "axios";



const userStates ={
    isLoggedin: null,
    userData:null, 
    isLoading:null, 
    login:()=>{},
    logout:()=>{}
}
const UserContext = createContext(userStates)

export function AuthProvider({children}){
    const [userData,setUserData]= useState(null)
    const [isLoggedin,setIsLoggedin]= useState(false)
    const [isLoading,setIsLoading]= useState (true)
 

useEffect(()=>{
    const fetchUserData= async()=>{
        try{
            const response =await axios.get('/api/auth/me',{withCredentials:true});
            console.log(response.data,'user data from context' )
            setUserData (response.data)
            setIsLoggedin (true)
            setIsLoading(false)
        }catch(error){
            setUserData (null)
            setIsLoggedin (false)
            setIsLoading(false)
    
            
        }
    }

    fetchUserData();
},[])

    const login=(userData)=>{
       console.log(userData,'from conext')
         setUserData(userData)
    }
    if(!userData){
      console.log('no user data')
      
      
    }
    const logout=()=>{
        setUserData (null)
        setIsLoggedin (false)
    }
    
  const contextValues ={login, logout, userData,isLoading,isLoggedin}
    return (
     <UserContext.Provider value={contextValues}>{children}</UserContext.Provider>
    )   

}

 export const useUser =()=>{
    const context = useContext(UserContext);

    if(!context){
        throw new Error ('please provide the parent comp with context ')

    }

    return context;
 }

