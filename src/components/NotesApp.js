import React from 'react'
import AppHeader from './AppHeader'
import { getInitialData } from '../utils'
import NotesContent from './NotesContent'

class NotesApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getInitialData(),
            archived: [],
            searchKeyword: '',
        }

        this.onAddNotesEventHandler = this.onAddNotesEventHandler.bind(this)
        this.onDeleteNotesEventHandler = this.onDeleteNotesEventHandler.bind(this)
        this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this)
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this)
    }

    onDeleteNotesEventHandler(id) {
        const isConfirmed = window.confirm('Apakah yakin ?')
        if(isConfirmed) {
            const notes = this.state.notes.filter(note => note.id !== id)
            this.setState(() => ({ notes }))
        }
    }

    onAddNotesEventHandler({ title, body }) {
        this.setState((prevState) => {
            console.log(prevState);
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date(),
                    }
                ]
            }
        })
    }

    onArchivedEventHandler(id) {
        const prevNote = this.state.notes.filter(note => note.id !== id)
        const archived = this.state.notes.filter(note => note.id === id).map(note => {
            const isArchived = note.archived
            return { ...note, archived: !isArchived }
        })
        this.setState((prevState) => {
            return {
                notes: [...prevNote, ...archived]
            }
        })
    }

    onSearchEventHandler(value) {
        this.setState((prevState) => {
            return {
                ...prevState,
                searchKeyword: value
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <AppHeader />
                <NotesContent
                    AddNotes={this.onAddNotesEventHandler}
                    notes={this.state.notes}
                    onDelete={this.onDeleteNotesEventHandler}
                    onArchived={this.onArchivedEventHandler}
                    onSearch={this.onSearchEventHandler}
                    searchKeyword={this.state.searchKeyword}
                    />
            </React.Fragment>
        )
    }
}

export default NotesApp