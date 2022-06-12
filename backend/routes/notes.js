const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes")
const fetchuser = require("../middleware/fetchuser")
const { body, validationResult } = require('express-validator');


// ROUTE 1: get all notes using : GET "api/auth/fetchallnotes". no login required 
router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {

        const notes = await Notes.find({ user: req.user.id })
        res.json(notes);
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Enternal server error")
    }
})

// ROUTE 2: adding notes using : POST "api/auth/addnote". no login required 
router.post("/addnote", fetchuser, [
    body('title', "Enter a valid title").isLength({ min: 3 }),
    body('description', "Description must be atleast 5 character").isLength({ min: 5 })], async (req, res) => {
        try {
            // Destructuring
            const { title, description, tag } = req.body

            // if thre is any error , return bad request and the error
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Notes({
                title, description, tag, user: req.user.id
            })
            const savenote = await note.save()
            res.json(savenote);
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Enternal server error")
        }

    })

// ROUTE 3: updating existing notes using : PUT "api/auth/updatenote". no login required 
router.put("/updatenote/:id", fetchuser, async (req, res) => {

    const { title, description, tag } = req.body
    try {
        // Create a new note object
        const newNote = {}
        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        // find the note to be updated and update it
        let note = await Notes.findById(req.params.id)
        if (!note) {
            return res.status(400).send("Not Found")
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(400).send("Not Allowed")
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Enternal server error")
    }

})

// ROUTE 4: delete existing notes using : DELETE "api/auth/deletenote". no login required 
router.delete("/deletenote/:id", fetchuser, async (req, res) => {

    try {


        // find the note to be updated and update it
        let note = await Notes.findById(req.params.id)
        if (!note) {
            return res.status(400).send("Not Found")
        }
        //allow deletion only if user owns the notes
        if (note.user.toString() !== req.user.id) {
            return res.status(400).send("Not Allowed")
        }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "success": "note has been deleted", note: note })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Enternal server error")
    }
})
module.exports = router