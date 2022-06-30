import React from "react"
import NotesContentHeader from "./NotesContentHeader"
import NotesList from "./NotesList"

// const NotesContent = ({ notes, onDelete, onArchived, filterArchived }) => {
//     return (
//         <div className="note-content">
//             <NotesContentHeader filterArchived={filterArchived}/>
//             <NotesList notes={notes} onDelete={onDelete} onArchived={onArchived}/>
//         </div>
//     )
// }

class NotesContent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            filterArchived: false
        }

        this.onFilterArchived = this.onFilterArchived.bind(this)
    }

    onFilterArchived(value) {
        console.log(value);
        this.setState((prevState) => {
            return {
                ...prevState,
                filterArchived: value
            }
        })
    }

    render() {
        return (
            <div className="note-content">
                <NotesContentHeader filterArchived={this.onFilterArchived}/>
                <NotesList notes={this.props.notes} onDelete={this.props.onDelete} onArchived={this.props.onArchived} isArchived={this.state.filterArchived}/>
            </div>
        )
    }
}

export default NotesContent