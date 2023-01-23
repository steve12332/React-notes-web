import {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';
import NoteList from "./components/NoteList";
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text:"this is my first note!",
      date: "15/04/2022",
    },
    {
      id: nanoid(),
      text:"this is my second note!",
      date: "15/05/2022",
    },
    {
      id: nanoid(),
      text:"this is my third note!",
      date: "15/06/2022",
    },  
    {
      id: nanoid(),
      text:"this is my random note!",
      date: "15/06/2022",
    },  
  ]);

  const[searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect (() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  },[notes]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes){
      setNotes(savedNotes);
    }

  },[]);

  const addNote = (text) => {
    // console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text, 
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return(
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}></Header>
        <Search handleSearchNote = {setSearchText}></Search>
        <NoteList 
          notes={notes.filter((note)=> note.text.toLocaleLowerCase().includes(searchText))} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}>
        </NoteList>
      </div>
    </div>
  );
};

export default App;