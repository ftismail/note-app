import React, { useState } from 'react';
import {RiDeleteBin6Line} from 'react-icons/ri'
import { Link, useNavigate, useParams } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io'
import { useContext } from 'react';
import { Context } from '../context/Context';
import UseCreateData from '../components/UseCreateData';

const EditNotes = () => {
    const history = useNavigate()
    const {data,setData} = useContext(Context)
    const {id} = useParams()
    const myItem = data.find(item=>item.id===id)
    const date = UseCreateData()
    const [title,setTitle] = useState(myItem.title)
    const [details,setDetails] = useState(myItem.details)

    const saveHandel = (e)=>{
        e.preventDefault()
        if (details && title) {
            const newItem = {id,title,details,date:date} 
            const newData = data.map((item)=>{
                if(item.id===id){
                    item = newItem
                }
                return item
            })
            setData(newData)
            history('/')
        }
    }

    const deletHandel = ()=>{
        const newData = data.filter(element=>element.id!==id)
        setData(newData)
        history('/')
    }
    return (
        <section>
            <header className="create-note__header">
                <Link to='/' className='btn' ><IoIosArrowBack/> </Link>
                <button className="large btn primary" onClick={saveHandel}>save</button>
                <button className="btn danger" onClick={deletHandel}> <RiDeleteBin6Line/> </button>
            </header>
            <form onSubmit={saveHandel} className="create-note__form">
                <input type="text" placeholder='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}} autoFocus/>
                <textarea placeholder='Add Note ...' autoFocus value={details} onChange={(e)=>{setDetails(e.target.value)}} rows='28' />
            </form>
        </section>
    );
}

export default EditNotes;

