const mongoose = require('mongoose');

async function connectDB() {

    try{

        await mongoose.connect(process.env.MONGO_URI)
        console.log("DataBase connected successfully");

    } catch (err) {

        console.error("DataBase connection error:", err);

    }
}

module.exports = connectDB;