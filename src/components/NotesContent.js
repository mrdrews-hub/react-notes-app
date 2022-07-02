import React from "react"
import NotesContentHeader from "./NotesContentHeader"
import NotesList from "./NotesList"
import NotesInput from './NotesInput'

class NotesContent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            filterArchived: false,
        }

        this.onFilterArchived = this.onFilterArchived.bind(this)
    }

    onFilterArchived(value) {
        console.log(value);
        this.setState((prevState) => {
            return {
                ...prevState,
                filterArchived: value,
            }
        })
    }

    render() {
        return (
            <main>
            <NotesInput AddNotes={this.props.AddNotes}/>
            <div className="note-content">
                <NotesContentHeader filterArchived={this.onFilterArchived} onSearch={this.props.onSearch}/>
                <NotesList
                    notes={this.props.notes}
                    onDelete={this.props.onDelete}
                    onArchived={this.props.onArchived}
                    isArchived={this.state.filterArchived}
                    search={this.props.onSearch}
                    searchKeyword={this.props.searchKeyword}
                    />
            </div>
            </main>
        )
    }
}

export default NotesContent