import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';

function Notes() {
    const context = useContext(noteContext)
    const { notes, setNote } = context;
    return (
        <>
            <div className='row'>
                {notes.map((notes)=> {
                   return <Noteitem notes={notes}/>
                })}
            </div>
        </>
    )
}

export default Notes

