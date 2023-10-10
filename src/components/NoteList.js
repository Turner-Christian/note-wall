import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NoteList = (props) => {
    const { notes, setNotes } = props;

    useEffect(() => {
        axios.get('http://localhost:8000')
            .then((res) => {
                console.log(res.data);
                setNotes(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className='container-md bg-secondary-subtle border border-top-1 border-bottom-1 border-dark p-3'>
            <header className='d-flex justify-content-center flex-column p-3'>
                <h1 className='m-5'>POSTED NOTES</h1>
                <div className='m-5 d-flex justify-content-center align-items-center'>
                    <Link className='btn bg-success text-white' to={'/notes/new'}>Write note</Link>
                </div>
            </header>
            <hr />
            <div className=''>
                {
                    notes.map((note, index) => {
                        return (
                            <div className='m-2'>
                                <div className='bg-dark-subtle m-2 p-2'>
                                    <div>
                                        <h2 key={index}>{note.title}</h2>
                                        <p className='' key={index}>{note.body}</p>
                                    </div>
                                    <div>
                                        <Link className='btn bg-danger text-white px-4' to={`/notes/${note._id}`}>EDIT</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NoteList