require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const { v4 } = require("uuid");
const User = require("../models/user.model");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://diamond-khushboo.herokuapp.com/auth/google/callback",
      
    },
    async function (request, accessToken, refreshToken, profile, done) {
      console.log("user", request,accessToken,refreshToken);
      console.log("profile" , profile)
      let user = await User.findOne({ email: profile?.email }).lean().exec();

      if (!user) {
        let nickName = profile?.email.split("@")[0];
        user = await User.create({
          email: profile?.email,
          password: v4(),
          nickName: nickName,
          profileImage: profile?.photos[0].value,
          
        });
        console.log(nickName);
      }
     console.log(nickName);
      return done(null, user);
    }
  )
);

module.exports = passport;
