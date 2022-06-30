import React from "react"
import SearchNotes from "./SearchNotes"
import CheckboxArchived from "./CheckboxArchived"
const NotesContentHeader = ({ filterArchived }) => {
    return (
        <div className="note-content__header">
            <SearchNotes />
            <CheckboxArchived filterArchived={filterArchived}/>
        </div>
    )
}

export default NotesContentHeader