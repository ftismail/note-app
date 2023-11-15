import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io'
import { useContext } from 'react';
import { Context } from '../context/Context';
import {v4 as uuid} from 'uuid'
import UseCreateData from '../components/UseCreateData';
const CreateNote = () => {
    const history = useNavigate()
    const [title,setTitle] = useState('')
    const [details,setDetails] = useState('')
    const {setData} = useContext(Context)
    const date = UseCreateData()
    const handelSubmit = (e)=>{
        e.preventDefault()
        if(title && details){
            const newNote={id:uuid(),title,details,date:date}
            setData(prevData=>[newNote,...prevData])
            history('/')
        }
    }
    return (
        <section>
            <header className="create-note__header">
                <Link to='/' className='btn' ><IoIosArrowBack/> </Link>
                <button onClick={handelSubmit} className="large btn primary">save</button>
            </header>
            <form onSubmit={handelSubmit} className="create-note__form">
                <input value={title} type="text" placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}} autoFocus/>
                <textarea value={details} placeholder='Add Note ...' onChange={(e)=>{setDetails(e.target.value)}}  autoFocus rows='28' />
            </form>
        </section>
    );
}

export default CreateNote;

