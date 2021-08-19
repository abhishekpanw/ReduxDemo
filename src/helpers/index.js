import { Redirect } from "react-router"

export const authenticate = (admin,token)=>{
    if(typeof window !== "undefined"){
        localStorage.setItem("admin",JSON.stringify(admin))
        localStorage.setItem("token",JSON.stringify(token))
    }

}


export const isAuthenticated = ()=>{
    
    if(typeof window == "undefined"){
        return false
    }
 
    if(localStorage.getItem("token")){
        return JSON.parse(localStorage.getItem("token"))
    }else{
        return false
    }
 }

 export const getAdmin = ()=>{
    
    if(typeof window == "undefined"){
        return false
    }
 
    if(localStorage.getItem("admin")){
        return JSON.parse(localStorage.getItem("admin"))
    }else{
        return false
    }
 }

 export const signout = ()=>{
    if(typeof window !== "undefined"){
        localStorage.removeItem("token")
        localStorage.removeItem("admin")
        window.location.reload()
    }

    
}