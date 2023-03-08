import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

function EditContent({ notes, setNotes, formatDate }) {
    const { noteId } = useParams();
    const currentNote = notes.find((note) => note.id === noteId);

    const navigate = useNavigate();

    const deleteNotes = () => {
        const answer = window.confirm("Are you sure?");
        if (answer) {
            setNotes(notes.filter((note) => note.id !== noteId))
            navigate("/notes");
        }
        
    }

    const [ editedTitle, setEditedTitle ] = useState(currentNote.title);
    const [ editedContent, setEditedContent] = useState(currentNote.content);

    const handleEditTitle = (event) => {
        setEditedTitle(event.target.value);
    }

    const handleSave = () => {
        const editedNotes = notes.map((note) => {
            if (note.id === noteId)
            {
                const newDate = new Date()
                return (
                    {
                        ...note,
                        title: `${editedTitle!== "" ? editedTitle : "Untitled"}`,
                        content: editedContent,
                        date: formatDate(newDate),
                    }
                )
            }
            else{return note;}
            
        });

        setNotes([...editedNotes]);
    }
    return (
    <div className="content-container">
        <div className="content-top-container">
            <div className="content-top-title-container">
                <input type = "text" className = "content-top-textbox" value = { editedTitle } onChange={ handleEditTitle }
                maxLength= "50" />
                <small className="content-date">{ currentNote.date }</small>
            </div>
            <div className = "content-top-button-container">
                <Link to={`/notes/${noteId}`} onClick={handleSave}>
                    <div className = "content-button">Save</div>
                </Link>
                <div className = "content-button" onClick={deleteNotes}>Delete</div>
            </div>
        </div>
        <ReactQuill theme="snow" value = { editedContent } onChange = { setEditedContent } className="editor"/>
    </div>
    );
}

export default EditContent;
