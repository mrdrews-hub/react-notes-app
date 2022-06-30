import React from "react";
import NotesItem from "./NotesItem";

const NotesList = ({notes, onArchived, onDelete, isArchived }) => {
    const filterArchived = notes.filter(note => note.archived === isArchived)
    console.log(filterArchived);
    if(filterArchived.length > 0) {
        return (
            <div className="notes-list">
                {
                    filterArchived.map(note => (
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
            <h2 style={{ 'textAlign': 'center' }}>Belum Ada Data Arsip</h2>
        )
    }
    // return (
    //     <div className="notes-list">
    //         {
    //             notes.filter(note => note.archived === isArchived).map((note) => {
    //                 if(note.id) {
    //                     return (
    //                         <NotesItem
    //                             key={note.id}
    //                             id={note.id}
    //                             title={note.title}
    //                             body={note.body}
    //                             date={note.createdAt}
    //                             archived={note.archived}
    //                             onDelete={onDelete}
    //                             onArchived={onArchived}
    //                         />
    //                     )
    //                 } else {
    //                     return (
    //                         <h2>Data Tidak Ditemukan</h2>
    //                     )
    //                 }
    //             })
    //         }
    //     </div>
    // )
}

// class NotesList extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             filterArchived: false,
//             searchValue: ''
//         }

//         this.onFilterArchived = this.onFilterArchived.bind(this)
//     }

//     onFilterArchived() {
//         const isArchived = this.state.filterArchived
//         this.setState((prevState) => {
//             return {
//                 ...prevState,
//                 filterArchived: !isArchived
//             }
//         })
//     }

//     render() {
//         return (
//             <div className="notes-list">
//                 {
//                     this.props.notes.map((note) => {
//                         if(this.state.filterArchived) {
//                             return (
//                                 <NotesItem
//                                     key={note.id}
//                                     id={note.id}
//                                     title={note.title}
//                                     body={note.body}
//                                     date={note.createdAt}
//                                     archived={note.archived}
//                                     onDelete={this.props.onDelete}
//                                     onArchived={this.props.onArchived}
//                                     onFilterArchived={this.onFilterArchived}
//                                 />
//                             )
//                         } else {
//                             return (
//                                 <NotesItem
//                                     key={note.id}
//                                     id={note.id}
//                                     title={note.title}
//                                     body={note.body}
//                                     date={note.createdAt}
//                                     archived={note.archived}
//                                     onDelete={this.props.onDelete}
//                                     onArchived={this.props.onArchived}
//                                     onFilterArchived={this.onFilterArchived}
//                                 />
//                             )
//                         }
//                     })
//                 }
//             </div>
//         )
//     }
// }

export default NotesList