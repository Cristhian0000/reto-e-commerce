
import VueCookies from 'vue-cookies'
const isGuestGuard = async (to,from,next)=>{
        return new Promise(()=>{
        const token=VueCookies.isKey('token_ecommerce')
        if(token){
            next({name:'products'})
        }
        else{
            next()
            return;
        }
        })
    
}

export default isGuestGuard