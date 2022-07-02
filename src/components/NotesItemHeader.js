import React from "react"
import { showFormattedDate } from "../utils"
import ArchiveButton from "./ArchiveButton"
import DeleteButton from "./DeleteButton"

const NotesItemHeader = ({ id, date, title, onDelete, onArchived, archived }) => {

    return (
        <div className="note-item__header">
            <div className="note-item__title">
                <h3 className="title">{ title }</h3>
                <p className="note-item__date">{ showFormattedDate(date) }</p>
            </div>
            <div className="note-item__actions">
                <ArchiveButton NoteId={id} onArchived={onArchived} isArchived={archived}/>
                <DeleteButton onDelete={onDelete} NoteId={id}/>
            </div>
        </div>
    )
}

export default NotesItemHeader