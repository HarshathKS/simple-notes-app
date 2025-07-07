import React from 'react';

export default function NoteList({ notes, deleteNote }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {notes.map(note => (
        <div key={note.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{note.title}</h2>
          <p>{note.content}</p>
          <div className="mt-2">
            {note.tags.map((tag, idx) => (
              <span key={idx} className="inline-block bg-gray-200 px-2 py-1 mr-1 rounded">
                #{tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => deleteNote(note.id)}
            className="mt-2 bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
