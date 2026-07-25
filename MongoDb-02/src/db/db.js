const mongoose = require("mongoose")

async function connectDB() {

    await mongoose.connect("mongodb+srv://arbaaz8158_db_user:2qLfKg1tBHlPTmyb@backendtutorial.jkqbmsy.mongodb.net/halley")

    console.log("Connected to DB");
    
}

module.exports = connectDB