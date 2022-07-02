import React from "react"
import SearchNotes from "./SearchNotes"
import CheckboxArchived from "./CheckboxArchived"

const NotesContentHeader = ({ filterArchived, onSearch }) => {
    return (
        <div className="note-content__header">
            <SearchNotes onSearch={onSearch}/>
            <CheckboxArchived filterArchived={filterArchived}/>
        </div>
    )
}

export default NotesContentHeader