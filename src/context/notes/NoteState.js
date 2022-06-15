import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const noteInitial = [
        {
            "_id": "62a84538d73c29df30b40ff8b3",
            "user": "62a4d407b6632f2ad59d4745",
            "title": "note is note",
            "description": "hello i am ayush this is my first note",
            "tags": "General",
            "date": "2022-06-14T08:37:43.087Z",
            "__v": 0
        },
        {
            "_id": "62a84528e43c29df30b40ff8b5",
            "user": "62a4d407b6632f2ad59d4745",
            "title": "this is second note",
            "description": "hello i am ayush this is my first note",
            "tags": "General",
            "date": "2022-06-14T08:37:56.284Z",
            "__v": 0
        },
        {
            "_id": "6252a848e43c29df30b40ff8b5",
            "user": "62a4d407b6632f2ad59d4745",
            "title": "this is second note",
            "description": "hello i am ayush this is my first note",
            "tags": "General",
            "date": "2022-06-14T08:37:56.284Z",
            "__v": 0
        },
        {
            "_id": "62a848e43c2359df30b40ff8b5",
            "user": "62a4d407b6632f2ad59d4745",
            "title": "this is second note",
            "description": "hello i am ayush this is my first note",
            "tags": "General",
            "date": "2022-06-14T08:37:56.284Z",
            "__v": 0
        },
        {
            "_id": "62a848e43c29df30b4540ff8b5",
            "user": "62a4d407b6632f2ad59d4745",
            "title": "this is second note",
            "description": "hello i am ayush this is my first note",
            "tags": "General",
            "date": "2022-06-14T08:37:56.284Z",
            "__v": 0
        },
        {
            "_id": "62a848e43c29545df30b40ff8b5",
            "user": "62a4d407b6632f2ad59d4745",
            "title": "this is second note",
            "description": "hello i am ayush this is my first note",
            "tags": "General",
            "date": "2022-06-14T08:37:56.284Z",
            "__v": 0
        }
    ]

    const [notes, setNote] = useState(noteInitial)

    // Add a note
    const addNote = (title, description, tag) => {
        console.log("adding a new note");
        const userNote = {
            "_id": "62a848e43c2954sf30b40ff8b5",
            "user": "62a4d407b6632f2ad59d4745",
            "title": title,
            "description": description,
            "tags": tag,
            "date": "2022-06-14T08:37:56.284Z",
            "__v": 0
        }
        setNote(notes.concat(userNote))
    }


    // Delete a note
    const deleteNote = (id) => {
        const newNotes = notes.filter((notes)=>{return notes._id!==id})
        setNote(newNotes)
        console.log("deleting note with id " + id);
    }
    // update a note
    const updateNote = (id, title, description, tag) => {

    }

    return (
        <NoteContext.Provider value={{ notes, addNote , updateNote ,deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;