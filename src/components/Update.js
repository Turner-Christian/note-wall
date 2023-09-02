import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const deleteNote = (e) => {
        axios.delete('http://localhost:8000/notes/' + id)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        axios.get('http://localhost:8000/notes/' + id)
            .then(res => {
                setTitle(res.data.title);
                setBody(res.data.body);
            })
            .catch(err => console.error(err));
    }, []);

    const updateNote = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/notes/' + id, {
            title,
            body
        })
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <header className='d-flex justify-content-center p-3 border-bottom'>
                <h1 className='m-5'>Note</h1>
                <div className='m-5 d-flex justify-content-center'>
                    <Link to={'/'}>go back home</Link>
                </div>
            </header>
            <div className='d-flex justify-content-center mt-5'>
                <form className='border rounded w-50 p-4 bg-light' onSubmit={updateNote}>
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
                        <div>
                            <input className='btn bg-success mb-3 mt-3' type="submit" />
                        </div>
                        <div>
                            <button className='btn bg-danger' onClick={(e) => { deleteNote(id) }}>Delete Note</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update