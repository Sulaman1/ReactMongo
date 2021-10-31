import dotenv from "dotenv"
import mongodb from "mongodb"
import RestaurantsDAO from "./dao//restaurantsDAO.js"
import ReviewsDAO from "./dao/reviewsDAO.js";
import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

dotenv.config()
const MongoClient = mongodb.MongoClient

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/restaurants", restaurants);
app.use("/api/v1/", (req, res) => { res.send("Working") });
app.use("*", (req, res) => { res.status(404).json({ error: "Not Found" }) });

const port1 = process.env.PORT || 8000;

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
)
    .catch(err => {
        console.error('mongo error', err.stack)
        process.exit()
    })
    .then(async client => {
        console.log("Client: ", client)
        await RestaurantsDAO.injectDB(client)
        await ReviewsDAO.injectDB(client)
        app.listen(port1, () => {
            console.log('listening on port: ', port1)
        })
    })

// const port = 1234;
// app.listen(port, () => {
//     console.log(`Node server is runing on port ${port}`);
// })


export default app;
