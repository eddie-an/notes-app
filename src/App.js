import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NoNoteContent from "./components/NoNoteContent";
import Content from "./components/Content";
import EditContent from "./components/EditContent";
import uuid from "react-uuid";



function App() {

  const [ notes, setNotes ] = useState(JSON.parse(localStorage.notes));

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

const formatDate = (when) => {
    const formatted = new Date(when).toLocaleString("en-US", options);
    if (formatted === "Invalid Date") {
        return "";
    }
    return formatted;
};


  const addNotes = () => {
    const newDate = new Date()
    const newNote = {
      id: uuid(),
      title: "Untitled",
      content: "",
      date: formatDate(newDate),
    };
    setNotes([newNote, ...notes]);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout notes = { notes } addNotes = { addNotes }/>}>
          <Route index element={<NoNoteContent/>}/>
          <Route path="/notes" element={<NoNoteContent/>}/>
          <Route path="/notes/:noteId" element={<Content notes = { notes } setNotes = { setNotes }/>}/>
          <Route path="/notes/:noteId/edit" element={<EditContent notes = { notes } setNotes ={ setNotes } formatDate = { formatDate }/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
  }
  
  export default App;