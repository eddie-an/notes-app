import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function Content({ notes, setNotes }) {
    const { noteId } = useParams();
    const currentNote = notes.find((note) => note.id === noteId);

    const navigate = useNavigate();
    const parse = require("html-react-parser");

    const deleteNotes = () => {
        const answer = window.confirm("Are you sure?");
        if (answer) {
            setNotes(notes.filter((note) => note.id !== noteId))
            navigate("/notes");
        }
    }
    
    return (
        <div className="content-container">
            <div className="content-top-container">
                <div className="content-top-title-container">
                    <h3 className="content-title">{currentNote.title}</h3>
                    <small className="content-date">{ currentNote.date }</small>
                </div>
                <div className = "content-top-button-container">
                    <Link to={`/notes/${noteId}/edit`}>
                        <div className = "content-button">Edit</div>
                    </Link>
                    <div className = "content-button" onClick={deleteNotes}>Delete</div>
                    
                </div>
            </div>
            <div className="content-body-container">
                {parse(currentNote.content)}
            </div>
        </div>
    );
}

export default Content;
