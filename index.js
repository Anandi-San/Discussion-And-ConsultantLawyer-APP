import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import SequelizeStore from "connect-session-sequelize";
import db from "./config/database.js"
import UsersRoute from "./routes/UsersRoute.js"
import DiscussionRoute from "./routes/DiscussionRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
    db: db
});

// (async()=>{
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: false
    }
}));

app.use(cors({
    credentials:true,
    origin: 'http://localhost:5173'
}));
app.use(express.json());

app.use(UsersRoute);
app.use(DiscussionRoute);
app.use(AuthRoute);

// store.sync();
// console.log(user);

app.listen(process.env.APP_PORT, () =>{
    console.log('SERVER IS UP AND RUNNING');
});