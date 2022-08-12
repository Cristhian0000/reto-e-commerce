
import VueCookies from 'vue-cookies'
const isAuthenticatedGuard = async (to,from,next)=>{
        return new Promise(()=>{
        const token=VueCookies.isKey('token_ecommerce')
        if(token){
           next();
        }
        else{
           next({name:'auth'})
        }
        })
    
}

export default isAuthenticatedGuard