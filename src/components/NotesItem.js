import React from "react"
import NotesItemHeader from "./NotesItemHeader"
import NotesItemBody from "./NotesItemBody"

const NotesItem = ({ id, title, body, date, onDelete, onArchived, archived }) => {
    return (
        <div className="note-item">
            <NotesItemHeader id={id} title={title} date={date} onDelete={onDelete} onArchived={onArchived} archived={archived}/>
            <NotesItemBody content={body}/>
        </div>
    )
}

export default NotesItem