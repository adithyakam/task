const un='hruday@gmail.com';
const pwd='hruday123';


export const loginUserAuth=(username,password)=>{
    // console.log(username,password);
       { if(username===un && password===pwd){
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
            // console.log("true");
            return {
                user:user,
                isLoggedIn:true,
                loginFailed:false
            }
        }else{
            // console.log("fale");
            return{
                user:null,
                isLoggedIn:false,
                loginFailed:true
            }
        }
    
}

   