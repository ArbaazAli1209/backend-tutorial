const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
    // age: Number,
    // dob: Date
})

const noteModel = mongoose.model("note", noteSchema)

module.exports = noteModel