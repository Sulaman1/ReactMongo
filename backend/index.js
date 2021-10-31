// import dotenv from "dotenv"
// import mongodb from "mongodb"
// import RestaurantsDAO from "./dao//restaurantsDAO.js"
// import app from "./server.js"

// dotenv.config()
// const MongoClient = mongodb.MongoClient

// const port = process.env.PORT || 8000;

// MongoClient.connect(
//     process.env.RESTREVIEWS_DB_URI,
//     {
//         maxPoolSize: 50,
//         wtimeoutMS: 2500,
//         useNewUrlParser: true
//     }
// )
//     .catch(err => {
//         console.error('mongo error', err.stack)
//         process.exit()
//     })
//     .then(async client => {
//         await RestaurantsDAO.injectDB(client)
//         app.listen(port, () => {
//             console.log('listening on port: ', port)
//         })
//     })
