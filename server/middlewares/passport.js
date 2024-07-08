import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const googleClientId =process.env.GOAUTH_PASSPORT_CLIENT_ID
const googleClientSecret = process.env.GOAUTH_PASSPORT_CLIENT_SECRET

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

passport.use(new GoogleStrategy({
    clientID: googleClientId,
    clientSecret: googleClientSecret,
    // callbackURL: 'http://localhost:5173/dashboard',
    callbackURL: 'http://localhost:5000/api/user/google/callback',
    scope: ['profile', 'email']
}, (accessToken, refreshToken, profile, cb) => {
    const guser = {
        id: profile.id,
        name: profile.displayName,
        email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null
    };
    // console.log(callbackURL);
    // console.log(profile);
    console.log(guser.email)
    // localStorage.setItem('guseremail', guser.email);
    return cb(null, guser);
}));
