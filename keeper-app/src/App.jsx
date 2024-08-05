import { useState } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Note } from './components/Note'
import { CreateArea } from './components/CreateArea'
import { notes } from './data/notes'

function App() {
  const [notes, setNotes] = useState([])
  const addNote = newNote => {
    setNotes(prevNotes => {
      return [newNote, ...prevNotes]
    })
  }
  const deleteNote = id => {
    setNotes(prevNotes => {
      return prevNotes.filter((n, index) => index !== id)
    })
  }
  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((n, index) => (
        <Note
          key={index}
          id={index}
          title={n.title}
          content={n.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </>
  )
}

export default App
