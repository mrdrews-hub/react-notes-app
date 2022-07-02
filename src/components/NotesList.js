import React from "react"
import NotesItem from "./NotesItem"

const NotesList = ({notes, onArchived, onDelete, isArchived, searchKeyword }) => {
    let result = notes.filter(note => note.archived === isArchived)

    if (searchKeyword.length > 0) {
        if(isArchived) {
            result = notes.filter(note => (note.title.toLowerCase().match(searchKeyword.toLowerCase()) && note.archived === true))
        } else {
            result = notes.filter(note => note.title.toLowerCase().match(searchKeyword.toLowerCase()))
        }
    }
    if(result.length > 0) {
        return (
            <div className="notes-list">
                {
                    result.map(note => (
                            <NotesItem
                                key={note.id}
                                id={note.id}
                                title={note.title}
                                body={note.body}
                                date={note.createdAt}
                                archived={note.archived}
                                onDelete={onDelete}
                                onArchived={onArchived}
                            />
                        )
                    )
                }
            </div>
        )
    } else {
        return (
            <h2 style={{ 'textAlign': 'center' }}>Data Tidak Ditemukan</h2>
        )
    }
}

export default NotesList