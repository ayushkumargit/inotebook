import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';
import {useNavigate} from "react-router-dom"

function Notes(props) {
    const context = useContext(noteContext)
    const { notes, getNote, editNote } = context;
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("auth-token")) {
            getNote()
        }
        else{
            navigate("/login")
        }
        // eslint-disable-next-line 
    }, [])

    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
        
    }

    const handleClick = (e) => {
        console.log("updating the note...", note);
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click()
        props.showAlert(" updated successfully ", "success")
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <AddNote showAlert={props.showAlert} />
            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Update Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" minLength={5} required onChange={onChange} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">description</label>
                                    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} minLength={5} required onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} minLength={5} required onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<3 || note.edescription.length<5 } onClick={handleClick} type="button" className="btn btn-primary" >Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <h2 className='my-2'>Your Notes</h2>
                <div className="container ">
                    {notes.length === 0 && "No notes to show!! 😊"}
                    </div>
                    {notes.map((notes) => {
                        return <Noteitem key={notes._id} updateNote={updateNote} showAlert={props.showAlert} notes={notes} />
                    })}
                
            </div>
        </>
    )
}

export default Notes

