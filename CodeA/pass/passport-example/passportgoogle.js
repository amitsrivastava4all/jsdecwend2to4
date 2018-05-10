const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
passport.use(new GoogleStrategy({
clientID:'721344886862-imqdukhq4bsc6u4o1ukm45hdiuiakp6a.apps.googleusercontent.com',
clientSecret:'nSgmBTaJLDJDJkwYUKSKVgkS',
callbackURL:'/google/callback'
},(accessToken,refreshToken,profile,done)=>{
    console.log("Passport Google Call Back Function.... AccessToken "+accessToken+" Ref "+refreshToken+" Profile ",profile,"Done ",done);
    console.log("Call to DB  to store data");
    return done(null,{token:accessToken,profile:profile})  ; // null represent no error
}));
 passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((user,done)=>{
    done(null,{profile:profile,t})
});