import React, { useState } from 'react';
import { Note } from './component/Note';

function App() {
  const [notes, setNotes] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');

  const handleAddNote = () => {
    setNotes([...notes, { title: noteTitle, description: noteDescription }]);
    setNoteTitle('');
    setNoteDescription('');
    setIsPopupOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4">
      <header className="text-white text-4xl font-bold p-4 mb-4 shadow-lg bg-opacity-70 bg-blue-800 rounded">
        Sticky Notes App
      </header>

      <div className="flex gap-4">
  <div className="flex flex-wrap gap-4">
    {notes.map((note, index) => (
      <Note key={index} title={note.title} description={note.description} />
    ))}
  </div>

  <div className="flex flex-col justify-center items-center">
    <button
      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg"
      onClick={() => setIsPopupOpen(true)}
    >
      Add Note
    </button>
  </div>
</div>


      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl mb-4">Add Note</h2>
            <input
              className="border border-gray-300 p-2 mb-4 w-full"
              type="text"
              placeholder="Title"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
            />
            <textarea
              className="border border-gray-300 p-2 mb-4 w-full"
              placeholder="Description"
              value={noteDescription}
              onChange={(e) => setNoteDescription(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
                onClick={handleAddNote}
              >
                Add
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                onClick={() => setIsPopupOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
