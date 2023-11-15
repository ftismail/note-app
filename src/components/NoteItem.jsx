import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = ({note}) => {
    return (
        <Link to={`/edit-note/${note.id}`} className='note' >
            <h4>{note.title.length>40 ? (note.title.substr(0,40))+'...':note.title }</h4>
            <h5> {note.details} </h5>
            <p> {note.date} </p>
        </Link>
    );
}

export default NoteItem;
