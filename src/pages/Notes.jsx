import React, { useContext, useState } from 'react';
import {CiSearch} from 'react-icons/ci'
import {MdClose} from 'react-icons/md'
import {BsPlusCircle} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import NoteItem from '../components/NoteItem';
import { Context } from '../context/Context';
import { useEffect } from 'react';
const Notes = () => {
    const {data} = useContext(Context)
    const [filtredNotes,setFiltredNotes] = useState(data)
    const [searchIcon,setSearchIcon] = useState(false)
    const[text,setText] = useState('')
    const handeSearch = ()=>{
        setSearchIcon(prevState=>!prevState)
    }
    useEffect(()=>{
        !searchIcon && setFiltredNotes(data)
    },[searchIcon,data])
    useEffect(() => {
        setFiltredNotes(data.filter(note=>note.title.toLowerCase().match(text.toLowerCase())))
    }, [text,data]);
    return (
        <section>
            <header className="notes__header">
                {!searchIcon ? 
                <h3>my projets</h3>:
                <input type="text" autoFocus placeholder='keyword...' value={text} onChange={(e)=>setText(e.target.value)} /> }

                <button onClick={handeSearch} className='btn close'>{ !searchIcon?<CiSearch/>:<MdClose/>}</button>
            </header>
            <div className="notes__container">
                    {filtredNotes.map((note)=><NoteItem key={note.id} id={note.id} note={note} />)}
                </div>
            <Link className='btn add__btn' to='/create-note'> <BsPlusCircle/> </Link>
        </section>
    );
}

export default Notes;
