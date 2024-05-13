import express from "express";
import cors from "cors";
import session from "express-session";
import SequelizeStore from 'connect-session-sequelize'
import dotenv from "dotenv";
import UserRoute from "./router/UserRoute.js";
import ProductRoute from "./router/ProductRoute.js";
import AuthRoute from "./router/AuthRoute.js";
import db from "./config/Db.js";

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db:db
})



app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store:store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);


// store.sync();

app.listen(process.env.APP_PORT || 5000, () => {
  console.log("Server up and running...");
});
