const JwtStrategy = require('passport-jwt').Strategy

const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('./model/RegisterModel')

const {PRIVET_KEY} = require("./config")

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = PRIVET_KEY;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (payload, done) => {
       console.log(payload)
        User.findOne({ _id: payload._id })
            .then(user => {
                if (!user) {
                    return done(null, false) 
                } else {
                    return done(null, user)
                }
            })
            .catch(error => {
                console.log(error)
                return done(error)
            })
    }))
}