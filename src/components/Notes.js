import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';

function Notes() {
    const context = useContext(noteContext)
    const { notes} = context;
    return (
        <>
        <AddNote/>
            <div className='row'>
                {notes.map((notes)=> {
                   return <Noteitem key={notes._id} notes={notes}/>
                })}
            </div>
        </>
    )
}

export default Notes

