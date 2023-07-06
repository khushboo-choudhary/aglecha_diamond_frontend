const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
require("dotenv").config();
const app = express();
const paymentRoutes = require("./controllers/payment");
const productApi = require("./controllers/ProductsController");
const passport = require("./configs/google-oauth");
const userController = require("./controllers/user.controller");
const { register, login, newToken } = require("./controllers/auth.controller");

app.use(cors());
app.use(express.json());

let port = process.env.PORT || 2345;

// register
app.post("/register", register);
// .login
app.post("/login", login);
app.use("/users", userController);

//payment
app.use("/api/payment/", paymentRoutes);

//product
app.use("/product", productApi);

//google oauth
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
  }),
  (req, res) => {
    const { user } = req;
    console.log("req", req);
    const token = newToken(user);
    
    return res.redirect(
      `https://aglecha-diamonds-app.vercel.app/google-oauth2success?token=${token}&nickName=${user.nickName}&profileImage=${user.profileImage}`
    );
  }
);

app.get("/auth/google/failure", (req, res) => {
  return res.status(400).json({ msg: "Login Failed" });
});

app.listen(port, async () => {
  try {
    await connect();
    console.log(`server is running on port ${port}`);
  } catch (err) {
    console.error(err.message);
  }
});
