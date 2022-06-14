import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const noteInitial = [
        {
            "_id": "62a848d73c29df30b40ff8b3",
            "user": "62a4d407b6632f2ad59d4745",
            "title": "note is note",
            "description": "hello i am ayush this is my first note",
            "tags": "General",
            "date": "2022-06-14T08:37:43.087Z",
            "__v": 0
        },
        {
            "_id": "62a848e43c29df30b40ff8b5",
            "user": "62a4d407b6632f2ad59d4745",
            "title": "this is second note",
            "description": "hello i am ayush this is my first note",
            "tags": "General",
            "date": "2022-06-14T08:37:56.284Z",
            "__v": 0
        },
        {
            "_id": "62a848e43c29df30b40ff8b5",
            "user": "62a4d407b6632f2ad59d4745",
            "title": "this is second note",
            "description": "hello i am ayush this is my first note",
            "tags": "General",
            "date": "2022-06-14T08:37:56.284Z",
            "__v": 0
        },
        {
            "_id": "62a848e43c29df30b40ff8b5",
            "user": "62a4d407b6632f2ad59d4745",
            "title": "this is second note",
            "description": "hello i am ayush this is my first note",
            "tags": "General",
            "date": "2022-06-14T08:37:56.284Z",
            "__v": 0
        },
        {
            "_id": "62a848e43c29df30b40ff8b5",
            "user": "62a4d407b6632f2ad59d4745",
            "title": "this is second note",
            "description": "hello i am ayush this is my first note",
            "tags": "General",
            "date": "2022-06-14T08:37:56.284Z",
            "__v": 0
        },
        {
            "_id": "62a848e43c29df30b40ff8b5",
            "user": "62a4d407b6632f2ad59d4745",
            "title": "this is second note",
            "description": "hello i am ayush this is my first note",
            "tags": "General",
            "date": "2022-06-14T08:37:56.284Z",
            "__v": 0
        }
    ]

    const [notes, setNote] = useState(noteInitial)

    return (
        <NoteContext.Provider value={{ notes, setNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;