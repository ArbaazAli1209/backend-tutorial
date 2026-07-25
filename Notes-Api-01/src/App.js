// This file is for creating Server.
const express = require("express")

const App = express()

const notes = []
App.use(express.json())

// POST /notes
App.post('/notes', (req, res) => {
    notes.push(req.body);
    
    res.status(201).json({
        message: "note created successfully"
    })
})

// GET /notes
App.get('/notes', (req, res) => {
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })
})

// Delete /notes/:index
App.delete('/notes/:index', (req, res) => {
    const index = req.params.index
    delete notes [ index ]
    res.status(200).json({
        message: "note deleted successfully"
    })
})

// Update 
App.patch("/notes/:index", (req, res) => {
    const index = req.params.index
    const description = req.body.description

    notes[index].description = description

    res.status(200).json({
        message: "note updated successfully"
    })
})
module.exports = App