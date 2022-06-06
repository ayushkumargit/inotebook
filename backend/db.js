const mongoose = require("mongoose")

const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&sls=false"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("successfully connected to mongo");
    })
}

module.exports = connectToMongo