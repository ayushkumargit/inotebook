import React, {useContext , useState}from 'react'
import noteContext from '../context/notes/noteContext';

function AddNote() {
    const context = useContext(noteContext)
    const {addNote} = context;

    const [notes, setNote] = useState({title:"",description:"", tag:"default" })

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(notes.title , notes.description , notes.tag)
    }
    const onChange = (e)=>{
        setNote({...notes , [e.target.name]:e.target.value})
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} />

                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">description</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add note</button>
            </form>
        </div>
    )
}

export default AddNote