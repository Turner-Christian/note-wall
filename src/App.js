import './App.css';
import Update from './components/Update';
import NoteForm from './components/NoteForm';
import Main from './views/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path='/' default />
          <Route element={<NoteForm />} path='/notes/new' />
          <Route element={<Update />} path='/notes/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
