const JwtStrategy=require('passport-jwt').Strategy
const ExtactJwt=require('passport-jwt').ExtractJwt


const options={
    jwtFromRequest:ExtactJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:'ss'
}


module.exports=passport=>{
    passport.use(
        new JwtStrategy(options,async (payload,done)=>{
            try{
                const user =await User.findById(payload.id).select('name,id')    
                if(user){
                    done(null,user)
                }
            }
            catch (e){
                console.log(e)
            }
            
        })
    )
}