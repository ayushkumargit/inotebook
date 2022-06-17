import React, {useContext , useState}from 'react'
import noteContext from '../context/notes/noteContext';

function AddNote(props) {
    const context = useContext(noteContext)
    const {addNote} = context;

    const [notes, setNote] = useState({title:"",description:"", tag:"" })

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(notes.title , notes.description , notes.tag)
        setNote({title:"",description:"", tag:"" })
        props.showAlert(" Added successfully ", "success")
    }
    const onChange = (e)=>{
        setNote({...notes , [e.target.name]:e.target.value})
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" value={notes.title} minLength={5} required onChange={onChange} />

                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">description</label>
                    <input type="text" className="form-control" id="description" name='description' value={notes.description} minLength={5} required onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' value={notes.tag} minLength={5} required onChange={onChange} />
                </div>
                <button disabled={notes.title.length<3 || notes.description.length<5 } type="submit" className="btn btn-primary" onClick={handleClick}>Add note</button>
            </form>
        </div>
    )
}

export default AddNote