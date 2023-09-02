import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const NoteForm = (props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const { notes, setNotes } = props;
    const navigate = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/notes/new', {
            title,
            body
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate('/')
                setNotes([...notes, res.data]);
            })
            .catch(err => {
                console.log(err);
                console.log('--->', err.res);
            });
    }
    return (
        <div>
            <header className='d-flex justify-content-center p-3 border-bottom'>
                <h1 className='m-5'>Write Notes</h1>
                <div className='m-5 d-flex justify-content-center'>
                    <Link to={'/'}>go back home</Link>
                </div>
            </header>
            <div className='d-flex justify-content-center mt-5'>
                <form className='border rounded w-50 p-4 bg-light' onSubmit={onSubmitHandler}>
                    <div>
                        <label className='form-label'>Note Title</label>
                        <input
                            className='form-control'
                            type="text"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div>
                        <label className='form-label'>Note Body</label>
                        <input
                            className='form-control'
                            type="text"
                            value={body}
                            onChange={(e) => { setBody(e.target.value) }} />
                    </div>
                    <div>
                        <input className='btn bg-success mt-3' type="submit" value={'Write this note!'} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NoteForm;