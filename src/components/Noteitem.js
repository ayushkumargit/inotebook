import React , { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

function Noteitem(props) {
    const context = useContext(noteContext)
    const { deleteNote } = context;
    const { notes } = props;
    return (
        <>
            <div className='col-md-3 my-3'>
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">{notes.title}</h5>
                        <p className="card-text">{notes.description}</p>
                            <div className='card-footer'>
                                <i className="fa-solid fa-pen-to-square mx-3 text-primary "></i>
                                <i className="fa-solid fa-eye mx-3 text-info"></i>
                                <i className="fa-solid fa-trash mx-3 text-danger" onClick={()=>{deleteNote(notes._id)}}  ></i>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Noteitem