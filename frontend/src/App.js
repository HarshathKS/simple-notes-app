import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';

const API_URL = 'http://localhost:5000/notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');

  const fetchNotes = async () => {
    const res = await axios.get(API_URL, { params: { search } });
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, [search]);

  const addNote = async (note) => {
    await axios.post(API_URL, note);
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchNotes();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📝 Simple Notes App</h1>
      <SearchBar setSearch={setSearch} />
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
