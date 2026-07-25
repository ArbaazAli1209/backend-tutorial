const express = require('express')
const noteModel = require("./models/note.model")

const app = express();
app.use(express.json());

/*
POST /notes => Create a note
GET /notes => Get a note
DELETE /notes/:id => Delete a note
PATCH /notes/:id => Update a note
*/

app.post("/notes", async (req, res) => {
    const data = req.body   // { title, description }
    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "note created"
    })
});

app.get("/notes", async (req, res) => {

    const notes = await noteModel.find()    // Find always return Array[]

    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })

});

app.delete("/notes/:id", async (req, res) => {

    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: "note deleted successfully"
    })
});

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({_id: id}, {description: description})

    res.status(200).json({
        message: "note updated successfully"
    })
});

module.exports = app