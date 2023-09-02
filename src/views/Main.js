import React, { useState } from 'react';
import NoteList from '../components/NoteList';

const Main = (props) => {
    const [notes, setNotes] = useState([]);

    return (
        <div>
            <NoteList notes={notes} setNotes={setNotes} />
        </div>
    )
}

export default Main;