const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let notes = [];
let idCounter = 1;

app.get('/notes', (req, res) => {
  const { search } = req.query;
  if (search) {
    const filtered = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    );
    res.json(filtered);
  } else {
    res.json(notes);
  }
});

app.post('/notes', (req, res) => {
  const { title, content, tags } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and Content required' });
  }

  const newNote = {
    id: idCounter++,
    title,
    content,
    tags: tags || [],
    createdAt: new Date().toISOString()
  };

  notes.push(newNote);
  res.json(newNote);
});

app.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  notes = notes.filter(note => note.id !== parseInt(id));
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
