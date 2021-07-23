export const loginUserAuth=(username,password)=>{
    console.log(username,password);
       { if(username==="a" && password==="a"){
            return true
        }else{
            return false
        }
    }
    
}

export const loginUserUtil=(user)=>{
const {username,password}=user

    const logUser=loginUserAuth(username,password)
    
        if(logUser===true){
            console.log("true");
            return {
                user:user,
                isLoggedIn:true
            }
        }else{
            console.log("fale");
            return{
                user:null,
                isLoggedIn:false
            }
        }
    
}

   